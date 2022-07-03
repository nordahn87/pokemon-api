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
        <>
            <h2>{data.forms[0?.name]}</h2>
            <HealthBar health="122/122" />
            <img src={data.sprites?.front_default}></img>
        </>
    );
}

export default Opponent;