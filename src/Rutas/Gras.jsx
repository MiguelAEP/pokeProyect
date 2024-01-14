import React, { useEffect } from 'react'

const Gras = ({pokeGras,setpokeGras,setCargando}) => {

  
  useEffect(() => {

    const getGras = async () => {
      let API = `https://pokeapi.co/api/v2/type/grass/`
      const response = await fetch(API);
      const data = await response.json();
      
      data.pokemon.forEach(async (element) => {

        const response = await fetch(element.pokemon.url)
        const json = await response.json()

        let pokemon = {
          id: json.id,
          name: json.name,
          avatar: json.sprites.front_default,
          tipo: json.types
        }

        setpokeGras((pokeGras) => [...pokeGras, pokemon]);

        setCargando(false)
      })
    }
    setCargando(true)
    getGras();
   
  }, [])

  return (
    <>
       {
                pokeGras.map((poke, indx) => (
   
                    <div className='card' key={indx} style={{ width: '12rem' }}>

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

export default Gras