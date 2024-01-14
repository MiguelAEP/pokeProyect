import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {


    return (
        <div >

            <nav className=' nav justify-content-around navbar-dark bg-dark p-4' >
                <Link to='/' style={{textDecoration:'none'}}><h3 className='text-white'>Pokemones</h3></Link>
                <NavLink className="btn btn-outline-info" to="/fire" >Fire</NavLink>
                <NavLink className="btn btn-outline-info" to="/normal" >Normal</NavLink>
                <NavLink className="btn btn-outline-info" to="/water" >Water</NavLink>
                <NavLink className="btn btn-outline-info" to="/electric" >Electric</NavLink>
                <NavLink className="btn btn-outline-info" to="/poison" >Poison</NavLink>
                <NavLink className="btn btn-outline-info" to="/ground" >Ground</NavLink>
                <NavLink className="btn btn-outline-info" to="/gras" >Grass</NavLink>
            </nav>

        </div>
    )
}

export default Navbar