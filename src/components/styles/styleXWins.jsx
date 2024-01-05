export default function styleXWins(item, index) {
    return({
        display: 'flex',
        width: '1%', 
        height: index === 6 ? '95%' : '39%',
        position: 'relative',
        rotate: [0, 4, 8].includes(index) 
            ? '-44.5deg'
            : '45deg',
        borderRadius: '5px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        top: index === 6 ? '-50%' : '',
        left: index === 6 ? '12.3%' : '',
        margin: '10px',
        transition: '1s all',
        backgroundColor: [1, 5, 3, 7].includes(index)
            ? 'rgb(0,0,0,0)'
            : 'red',
        marginLeft: '12%',
        marginRight: '13%',
        transform: 'scale(1.6)',

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
        },
    });
}