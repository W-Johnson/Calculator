import React from 'react';
import Box from '@material-ui/core/Box';
import './styles/Screen.css'

interface CurrentCalcul {
    calcul : string
}

function Screen( current : CurrentCalcul) {

    return (
        <div className='divBox'>
            <Box className='resultBox'>
                <h2 > {current.calcul} </h2>
            </Box>
        </div>
    );
}

export default Screen;