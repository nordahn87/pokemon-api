import React, { useState, useEffect } from 'react'
import HealthBar from '../health-bar'

const Player = () => {
    
    const [data, setData] = useState({})

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
       
            <HealthBar health="130/130" />
            <img src={data.sprites?.back_default}></img>
        </>
    );
}

export default Player;