import React, { useEffect } from 'react'
import classNames from 'classnames'

const Tarjetas = ({ pokemones, setPokemones, setCargando, cargando }) => {

    const getPokemones = async () => {
        let API = `https://pokeapi.co/api/v2/pokemon/?limit=40`
        const response = await fetch(API);

        const data = await response.json();

        data.results.forEach(async (element) => {

            const response = await fetch(element.url)
            const json = await response.json()
          
            let pokemon = {
                id: json.id,
                name: json.name,
                avatar: json.sprites.front_default,
                tipo: json.types
            }
       
            setPokemones((pokemones) => [...pokemones, pokemon]);
            setCargando(false)

        })
    }

    useEffect(() => {
        setCargando(true)
        getPokemones()
    }, [])

    return (
        <>
            {
                pokemones.map((poke, indx) => (

                    <div className={classNames('card',
                        { 'fire': poke.tipo[0].type.name === 'fire' },
                        { 'water': poke.tipo[0].type.name === 'water' },
                        { 'normal': poke.tipo[0].type.name === 'normal' },
                        { 'gras': poke.tipo[0].type.name === 'grass' },
                        { 'poison': poke.tipo[0].type.name === 'poison' },
                        { 'electric': poke.tipo[0].type.name === 'electric' },
                        { 'ground': poke.tipo[0].type.name === 'ground' },
                    )}
                        key={indx} style={{ width: '12rem' }}>

                        <div className='card-header'>
                            <img src={poke.avatar} />
                        </div>

                        <div className='card-body'>
                            <p className='card-text'>{poke.name}</p>
                            <p className='card-text'>{poke.tipo[0].type.name} {poke.tipo[1]?.type.name}</p>

                        </div>




                    </div>



                ))
            }

        </>
    )
}

export default Tarjetas