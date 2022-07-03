import React, { useState, useEffect } from 'react'
import HealthBar from '../health-bar'

const Opponent = () => {

    const [data, setData] = useState({})

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
            .then(response => response.json())
            .then(responseData => {
                setData(responseData)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section id="Opponent">
            <h2>{data.name}</h2>
            <HealthBar health="122/122" />
            <img className="pokemon-render pokemon-opponent" src={data.sprites?.front_default}></img>
        </section>
    );
}

export default Opponent;
