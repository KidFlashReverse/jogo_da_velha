export default function styleOWins(item, index){
    return({
        display: 'flex',
        width: '28%', 
        height: '55%',
        position: 'relative',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        transition: '1s all',
        backgroundColor: 'none',
        '::before': {
            content: '""',
            position: 'absolute',
            zIndex: 2,
            width: '38vw',
            height: '38vw',
            borderRadius: '1000px',
            border: 'solid blue 20px',
            top: '1vw',
            left: index === 6 ? '-0.35vw' : '0',
            backgroundColor: 'none',
            display: index === 0 ? 'block' : 'none',
        },

        from: {
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
                            : 'white',
            transition: '1s top, left, width, heigth',
            '&:hover': {
                width: '26%',
                height: '52%',
            },
            pointerEvents: 'auto',
            cursor: 'pointer',
            '::before': {
                content: '""',
                position: 'relative',
                width: '0',
                height: '0',
                transition: 'all 1.5s',
            }
        }
    });
}