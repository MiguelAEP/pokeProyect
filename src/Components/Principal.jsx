import React, { useState } from 'react'
import Tarjetas from './Tarjetas'
import Cargando from './Cargando'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
const Principal = () => {


    const [searchPoke, setSearchPoke] = useState('')
    const [pokemones, setPokemones] = useState([])
    const [cargando, setCargando] = useState(false)

    const navigate = useNavigate();

    const getPokemon = async (pokemon) => {


        try {

            let API = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await fetch(API);
            if (!response.ok) {
                Swal.fire({
                    icon: 'error',
                    title: 'Pokemon no encontrado',
                })
                let err = new Error()
                err.message = "Dato no encontrado"
                throw err

            }

            const data = await response.json();
            navigate(`/pokeBuscado/${data.name}`)

            setSearchPoke('')
        } catch (error) {
           
         //   alert(error)
            setSearchPoke('')
            return
        }




    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(searchPoke)
        let primeraLetra = searchPoke.charAt(0).toLocaleLowerCase();
        let cortarLetra = searchPoke.slice(1)
        let palabraCompleta = primeraLetra.concat(cortarLetra)
       
        if (searchPoke === '') {
            alert("no se permite datos vacios")
            return;
        }

        getPokemon(palabraCompleta)

    }





    return (
        <div >
            <form onSubmit={handleSubmit} className="d-flex  m-4 " >
                <input
                    onChange={(e) => setSearchPoke(e.target.value)} value={searchPoke}
                    className="form-control  text-center" style={{ width: "28rem" }} placeholder='Search Pokemon' />
                <button className="btn btn-outline-success " type="submit">Buscar</button>
            </form>

            {cargando && <Cargando />}
            <div className='cards mt-4'>
                <Tarjetas cargando={cargando}
                    setCargando={setCargando}

                    setPokemones={setPokemones}
                    pokemones={pokemones} />
            </div>



        </div>

    )
}

export default Principal