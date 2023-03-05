import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import Presentation from '../../components/common/home/Presentation';
// COMPONENTS LAYOUTS
import Loader from '../../components/layouts/animations/Loader';
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../utils/redux/actions/ProductActions'
import Products from '../../components/common/home/Products';
import Home_API_Restaurants from '../../components/common/home/api_restaurants/Home_API_Restaurants';
// import Products from '../../components/common/home/Products';
import BG_Btn_RestaurantsMap from "../../utils/assets/imgs/home/BG_Btn_RestaurantsMap.jpg"


export default function Home() {
    const dispatch = useDispatch();

    const { loading, products } = useSelector(state => state.products)
    // console.log(products);

    useEffect(() => {
        dispatch(getProducts());

    }, [dispatch])
    
    return loading
        ?   <Loader />
        :   <div style={{ alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                {/* PRESENTATION */}
                <Presentation />

                {/* RESTAURANTS */}
                <Link to="/restaurants" style={{ textDecoration: "none" }}>
                    <Box sx={{ alignItems: "center", backgroundImage: `url(${BG_Btn_RestaurantsMap})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", border: "6px solid #003", borderRadius: 12, boxShadow: "0px 20px 50px #555", cursor: "pointer", display: "flex", height: "400px", justifyContent: "center", width: "600px" }}>
                        <Typography align='center' color="#FFF" variant='h4' style={{ position: "relative", top: "-50px" }}>Nos Restaurants</Typography>
                    </Box>
                </Link>

                {/* PRODUCTS */}
                <Products products={products} />
            </div>
}
