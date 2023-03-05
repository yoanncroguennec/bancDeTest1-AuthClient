import React from 'react'
import { Typography, useMediaQuery, useTheme } from '@mui/material'
// UTILS ASSETS DATA + IMGS
import { dataPresentation } from '../../../utils/assets/data/home/DataPresention'
import imgPresentation from '../../../utils/assets/imgs/home/imgPresentation.jpg';
import { RootPresentation } from './StyledPresentation';


const stylesImgDesktop = {
    border: "2px solid black", borderRadius: 15, boxShadow: "0px 20px 50px #555", marginRight: "100px", width: "700px"
}
const stylesImgMobile = {
    border: "2px solid black", borderRadius: 15, boxShadow: "0px 20px 50px #555", height: "150px", marginRight: "100px", width: "200px"
}

export default function Presentation() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <RootPresentation>
            <img src={imgPresentation} alt="Presentation" style={ matches ? stylesImgMobile : stylesImgDesktop } />
            <div>
                {dataPresentation.map(( item ) => (<Typography variantMapping={{body1: "p"}} sx={{ lineHeight: "20px"}}>{item.text}</Typography>))}
            </div>
        </RootPresentation>
    )
}
