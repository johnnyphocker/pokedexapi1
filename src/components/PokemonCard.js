import React, { useState, useEffect } from 'react';

import axios from 'axios';

const PokemonCard = ({detail: {name, url}}) => {

    let [data, setData] = useState({})

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setData(res.data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h4>{name}</h4>
            <img src={data.sprites && data.sprites.front_default} alt=""/>
        </div>
    )
}


export default PokemonCard;