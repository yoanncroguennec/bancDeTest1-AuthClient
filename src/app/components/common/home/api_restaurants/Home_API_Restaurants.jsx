import React, { useEffect, useState } from 'react'
// CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"
// MAP
import Map, { NavigationControl, Marker } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
// REDUX
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../../../../utils/redux/actions/RestaurantActions'
// COMPONENTS LAYOUTS
import Loader from "../../../layouts/animations/Loader";
import { Box, Typography } from '@mui/material';
// ICONS
import { BiPhoneCall, BiMailSend} from "react-icons/bi"
// STYLES
import "./Slider.css"


export default function Home_API_Restaurants() {

    const dispatch = useDispatch();

    const { loading, restaurants } = useSelector(state => state.restaurants)
    // console.log(restaurants);

    useEffect(() => {
        dispatch(getRestaurants());

    }, [dispatch])


    return loading
        ?   <Loader />
        :   <>
               {restaurants && restaurants.map(({ _id, name, address, photos, description, phoneNumberRestaurant, emailRestaurant, location }) => {
                    return(
                        <Box key={_id}>
                            <Typography align='center' variant='h4'>{name}</Typography>
                            <Typography align='center'>{address}</Typography>
                            <Typography>{description}</Typography>
                            <div style={{ display : "flex", flexWrap: "nowrap", justifyContent: "center" }}>
                                <BiPhoneCall size={32} /> 
                                <a href={phoneNumberRestaurant} style={{ textDecoration: "none", color: "#000", cursor: "pointer", zIndex: 1000}}><Typography>{phoneNumberRestaurant}</Typography></a>
                            </div>
                            <div style={{ display : "flex", flexWrap: "nowrap", justifyContent: "center" }}>
                                <BiMailSend size={32} />
                                <a href="#" style={{ textDecoration: "none", color: "#000", cursor: "pointer", zIndex: 1000}}><Typography>{emailRestaurant}</Typography></a> 
                            </div>
                            {/* CAROUSEL */}
                            <Carousel
                                autoPlay
                                interval={3000}
                                infiniteLoop
                                thumbWidth={120}
                                showIndicators={false}
                                showStatus={false}
                            >
                                {photos.map(slide => (
                                    <div key={slide.public_id}>
                                    <img src={slide.url} alt=""  />
                                    </div>
                                ))}
                            </Carousel> 
                            {/* MAP */}
                            <Map mapLib={maplibregl} 
                                initialViewState={{
                                longitude: location[1],
                                latitude: location[0],
                                zoom: 14
                                }}
                                style={{ border: "3px solid #003", borderRadius: "45px", margin: "0 auto", width: "30%", height: "50vh"}}
                                mapStyle="https://api.maptiler.com/maps/streets/style.json?key=RIBsnoKi0ygIzEb13O1w"
                            >
                                <NavigationControl position="top-left" />
                                <Marker color="#61DB" longitude={location[1]} latitude={location[0]} />
                            </Map>
                            <hr style={{ border: "3px solid #003", borderRadius: "15px", width : "30vw"}} />
                        </Box>
                    )
                })}
            </>
}
