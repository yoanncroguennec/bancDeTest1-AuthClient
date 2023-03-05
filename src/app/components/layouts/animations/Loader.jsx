import React from 'react'
import { CircleLoader } from 'react-spinners'


export default function Loader() {
    return (
        <div style={{margin: "0 auto", height: 50, width: 200, padding: 50}}>
            <CircleLoader size={100} color={"#3d2514"} /> 
        </div>
    )
}
