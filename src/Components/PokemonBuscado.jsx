import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonBuscado = ({ setPokeBuscado, pokeBuscado }) => {

    const { name } = useParams();

    useEffect(() => {

        const getPokeBuscado = async () => {

            try {

                let API = `https://pokeapi.co/api/v2/pokemon/${name}`
                const response = await fetch(API);
                const data = await response.json();

                let pokemonObj = {
                    id: data.id,
                    name: data.name,
                    height: data.height,
                    type: data.types[0].type.name,
                    avatar: data.sprites.front_default
                }
                setPokeBuscado(pokemonObj)

            } catch (e) {
                console.log(e)
            }
        }
        getPokeBuscado();

    }, [])

    return (
        <div className='d-flex  justify-content-center' style={{ margin: '100px' }}>
            <div className='card text-center ' style={{ width: '17rem' }}>
                <Link to="/">  <div className='card-header'>
                    <img src={pokeBuscado.avatar} style={{height:'200px'}} />
                </div></Link>
                <div className='card-body'>
                    <p className='card-text'>Nombre: {pokeBuscado.name}</p>
                    <p className='card-text'>Tipo: {pokeBuscado.type} {pokeBuscado.type}</p>
                    <p className='card-text'>Altura: {pokeBuscado.height}</p>
                </div>

            </div>
        </div>
    )
}

export default PokemonBuscado