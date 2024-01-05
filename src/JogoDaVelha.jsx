import { Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import styleWinPosition from "./components/styles/styleWinPosition";
import styleXWins from "./components/styles/styleXWins";
import styleOWins from "./components/styles/styleOWins";
import styleVelha from "./components/styles/styleVelha";

export default function JogoDaVelha () {
    document.body.style.overflow = 'hidden';
    const windowWidth = window.innerWidth;
    
    const array = Array(9).fill("");
    const matriz = Array(9).fill(array);
    const victoryArray = Array(9).fill('');

    const [block1, setBlock1] = useState(matriz);
    const [playerOne, setPlayerOne] = useState(true);
    const [circleOrCruss, setCircleOrCruss] = useState('');
    const [victory, setVictory] = useState(victoryArray);
    const [victoryGame, setVictoryGame] = useState('');
    const [winPosition, setWinPosition] = useState(0);
    const [local, setLocal] = useState(10);

    const [blockSize, setBlockSize] = useState(windowWidth*0.55);

    const styleDefault = (item, indexCell, index) => {
        return ({
            display: 'flex',
            width: '25%', 
            height: '50%',
            rotate: '0deg',
            borderRadius: '5px',
            position: 'relative',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '10px',
            top: '0px',
            left: '0',
            backgroundColor: item ? 
                                item === 'O' ? 'blue' : 'red' 
                            : ((index === local || local > 8 || victory[local] !== '') && victoryGame === '') ? 'white' : '#616161',
            transition: '0.3s all',
            '&:hover': {
                width: '26%',
                height: '52%',
            },
            pointerEvents: 'auto',
            cursor: 'pointer',
        });
    };

    const handleCompareGameBlock = (game) => {
        game.forEach((cells, index) => {
            const winners = [];
            victory.forEach((value, indexVictory) => {
                if(value !== ''){
                    winners.push(indexVictory);
                }
            }) 

            if(!winners.includes(index)){
                const possibleWin = [
                    [cells[0], cells[1], cells[2]], 
                    [cells[3], cells[4], cells[5]], 
                    [cells[6], cells[7], cells[8]], 
        
                    [cells[0], cells[3], cells[6]], 
                    [cells[1], cells[4], cells[7]], 
                    [cells[2], cells[5], cells[8]], 
        
                    [cells[0], cells[4], cells[8]], 
                    [cells[2], cells[4], cells[6]], 
                ];
    
                possibleWin.forEach(cellsPossible => {
                    if(cellsPossible.every(cell => cell === 'O')){ 
                        var newVictory = [...victory];
                        newVictory[index] = 'O'; 
                        setVictory(newVictory);
                    }
                    if(cellsPossible.every(cell => cell === 'X')){ 
                        var newVictory = [...victory];
                        newVictory[index] = 'X'; 
                        setVictory(newVictory);
                    }
                });

                if(possibleWin.every((sub) => sub.every((char) => char !== ''))){
                    var newVictory = [...victory];
                    newVictory[index] = 'Velha'; 
                    setVictory(newVictory);
                }
            }
        });
    };

    const handleCompareGame = (game) => {
        const possibleWin = [
            [game[0], game[1], game[2]], 
            [game[3], game[4], game[5]], 
            [game[6], game[7], game[8]], 

            [game[0], game[3], game[6]], 
            [game[1], game[4], game[7]], 
            [game[2], game[5], game[8]], 

            [game[0], game[4], game[8]], 
            [game[2], game[4], game[6]], 
        ];

        possibleWin.forEach((cellsPossible, cellsPossibleIndex) => {
            if(cellsPossible.every(cell => cell === 'O' || cell === 'Velha')){ 
                setVictoryGame('O');
                setWinPosition(cellsPossibleIndex);
            }
            if(cellsPossible.every(cell => cell === 'X' || cell === 'Velha')){ 
                setVictoryGame('X');
                setWinPosition(cellsPossibleIndex);
            }
        });
    };

    const handleClickBlock = (index, indexCell) => {
        setBlock1(block1.map((cell, indexBlock) => indexBlock === index ? cell.map((item, indexCells) => indexCells === indexCell ? circleOrCruss : item) : cell));
        setPlayerOne(!playerOne);
        setLocal(indexCell);
    };

    useEffect(() => {
        setCircleOrCruss(playerOne ? 'O' : 'X');
    }, [playerOne, circleOrCruss]);

    useEffect(() => {
        handleCompareGameBlock(block1);
        handleCompareGame(victory);
    }, [block1, victory]);

    useEffect(() => {
        setBlockSize(windowWidth*0.55);
    }, [windowWidth]);

    return (
        <>  
            <Box sx={{
                width: '100vw', 
                height: '100vh', 
                backgroundColor: '#bdbdbd', 
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
            }}> 
                <Box sx={{
                    position: windowWidth < 900 ? 'relative' : 'absolute',
                    marginLeft: '5vw',
                }}>
                    <Box sx={{
                        paddingTop:  windowWidth < 900 ? '5vw' : '10vw',
                    }}>
                        <Typography variant="h3" sx={{fontWeight: 'bold', fontSize: '3.5vw',}}>Jogo da Velha 2</Typography>
                    </Box>
                    <Box sx={{
                        paddingTop: windowWidth < 900 ? '5vw' : '10vw',
                    }}>
                        {victoryGame !== '' ?(
                            <>
                                <Box sx={styleWinPosition(winPosition)}></Box>
                                <Typography variant="h4" sx={{fontSize: '3.5vw',}}>{playerOne ? <span style={{color: 'red'}}>X</span> : <span style={{color: 'blue', fontWeight: 'bold'}}>O</span>} ganhou</Typography>
                                <Button onClick={() => window.location.reload()} variant="contained" sx={{marginTop: '10px'}}>Reiniciar</Button>
                            </>
                        ) : (
                            <>
                                <Typography variant="h4" sx={{fontSize: '2.5vw',}}>Vez do {playerOne ? <span style={{color: 'blue'}}>O</span> : <span style={{color: 'red', fontWeight: 'bold'}}>X</span>}</Typography>
                            </>
                        )}
                    </Box>
                </Box>
                <Box sx={{
                    position: 'relative',
                    width: `${windowWidth < 900 ? blockSize : blockSize + 100}px`,
                    height: `${blockSize + 100}px`,
                    paddingTop: '2%',
                    left: windowWidth < 900 ? '25vw' : '35vw',
                    marginTop: windowWidth < 900 ? '5vw' : '0vw',
                }}>
                    {block1.map((cell, index) => (
                        <Box sx={{
                            width: `${blockSize}px`,
                            height: `${blockSize}px`,
                            display: 'inline-block',
                            zoom: '30%',
                        }}>
                            <Box 
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    position: 'relative',
                                    width: '100%',
                                    height: '50%',
                                }}
                            >
                                {cell.map((item, indexCell) => (
                                    <>
                                        <Box
                                            key={indexCell}
                                            className={`cell ${item}`}
                                            onClick={() => block1[index][indexCell] === '' && victory[index] === '' && ((local === index || local > 8 || victory[local] !== '') && victoryGame === '') ? handleClickBlock(index, indexCell) : null}  
                                            sx={victory[index] !== '' ? victory[index] === 'X' ? styleXWins(item, indexCell) : victory[index] === 'O' ? styleOWins(item, indexCell) : styleVelha(item, indexCell) : styleDefault(item, indexCell, index)}  
                                        >
                                            <Typography 
                                                variant="h3" 
                                                fontWeight='bold'
                                                color='rgb(0, 0, 0, 0.5)'
                                                display={victory[index] !== '' ? 'none' : 'block'}
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    </>
                                ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}