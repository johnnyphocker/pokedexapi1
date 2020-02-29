import React, { Component } from 'react';

import PokemonCard from './PokemonCard'

class PokemonList extends Component {



    render() {

        return (
            <div>
                <h3>Lista de Pokemon</h3>
                {
                    this.props.pokemon && this.props.pokemon.map((e, i) => {
                        return <PokemonCard detail={e} key={i} />
                    })
                }
            </div>
        )
    }
}

export default PokemonList;