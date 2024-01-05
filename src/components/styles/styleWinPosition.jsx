export default function styleWinPosition(winPosition){
    if(winPosition === 0){
        return({
            width: '44vw',
            height: '1vh',
            top: '14vh',
            zIndex: '3',
            left: '33vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '0vw',
                height: '1vh',
                top: '14vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 1){
        return({
            width: '44vw',
            height: '1vh',
            top: '48vh',
            zIndex: '3',
            left: '33vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '0vw',
                height: '1vh',
                top: '48vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 2){
        return({
            width: '44vw',
            height: '1vh',
            zIndex: '3',
            top: '82vh',
            left: '33vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 3){
        return({
            width: '51vw',
            height: '1vh',
            rotate: '90deg',
            zIndex: '3',
            top: '50vh',
            left: '15.7vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 4){
        return({
            width: '51vw',
            height: '1vh',
            rotate: '90deg',
            zIndex: '3',
            top: '50vh',
            left: '29.5vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 5){
        return({
            width: '51vw',
            height: '1vh',
            rotate: '90deg',
            zIndex: '3',
            top: '50vh',
            left: '43.2vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 6){
        return({
            width: '62vw',
            height: '1vh',
            rotate: '52deg',
            zIndex: '3',
            top: '48vh',
            left: '24vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }else if(winPosition === 7){
        return({
            width: '62vw',
            height: '1vh',
            rotate: '-52deg',
            zIndex: '3',
            top: '48vh',
            left: '24vw',
            position: 'absolute',
            borderRadius: '5px',
            backgroundColor: 'red',
            transition: '1s all',

            from: {
                width: '1vw',
                height: '1vh',
                top: '82vh',
                left: '33vw',
                position: 'absolute',
                borderRadius: '5px',
                backgroundColor: 'red',
                transition: '1s all',
            },
        });
    }
}