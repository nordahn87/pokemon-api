import React, { useState, useEffect } from 'react'
import HealthBar from '../health-bar'
import Buttons from '../action-buttons/buttons'

const Player = () => {

    const [data, setData] = useState({})

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
                console.log(responseData)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section id="Player">
            <h1>{data.name}</h1>
            <HealthBar health="130/130" />
            <img className="pokemon-render pokemon-player" src={data.sprites?.back_default}></img>
            <Buttons />
        </section>
    );
}

export default Player;
