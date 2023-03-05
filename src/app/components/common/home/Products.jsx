import React from 'react'
import { Typography, styled, Paper, Grid, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import { BoxItem, BoxItemDesc, ImgDesktop, ImgMobile } from './StyledProducts';





export default function Products({ products }) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Typography align='center' variant='h4'>Nos Produits</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {products && products.map((product) => {
                    return(
                        <Grid item xs={6} key={product._id}>
                            <BoxItem sx={{ }}>
                                <img alt={product.name} src={product.photos[0].url} style={ matches ? ImgMobile : ImgDesktop } />
                                <BoxItemDesc style={{ }}>
                                    <Typography variant='h6' style={{ textAlign: "center"}}>{product.name}</Typography>
                                    <Typography variant="h7">{product.description}</Typography>
                                    <div style={{ display: "flex", flexWrap: "nowrap"}}>
                                        <p>Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'} >{product.stock > 0 ? 'En Stock' : 'Plus de stock'}</span></p>
                                        <Typography variant='h7' style={{ textAlign: "left"}}>{product.price} €</Typography>

                                        <Link to={`/product/${product._id}`}>
                                            VOIR PRODUIT
                                        </Link>
                                    </div>
                                </BoxItemDesc>
                            </BoxItem>
                        </Grid>
                    )
                })}
            </Grid>
        </>
    )
}
