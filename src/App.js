import Principal from "./Components/Principal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonBuscado from "./Components/PokemonBuscado";
import { useState } from "react";
import Navbar from "./Rutas/Navbar";
import Fire from "./Rutas/Fire";
import Electric from "./Rutas/Electric";
import Gras from "./Rutas/Gras";
import Ground from "./Rutas/Ground";
import Normal from "./Rutas/Normal";
import Poison from "./Rutas/Poison";
import Water from "./Rutas/Water";
import Cargando from "./Components/Cargando";

function App() {
  const [cargando, setCargando] = useState(false)
  const [pokeBuscado, setPokeBuscado] = useState({})
  const [pokeFire, setPokeFire] = useState([])
  const [pokeElectric, setPokeElectric] = useState([])
  const [pokeNormal, setPokeNormal] = useState([])
  const [pokeGras, setpokeGras] = useState([])
  const [pokeGround, setPokeGround] = useState([])
  const [pokePoison, setPokePoison] = useState([])
  const [pokeWater, setPokeWater] = useState([])

  return (

    <div >
      <BrowserRouter>

        <Navbar />
        {cargando && <Cargando />}

        <Routes>
          <Route path="/" exact element={<Principal />} />

          <Route path="/pokeBuscado/:name" exact
            element={<PokemonBuscado
              setPokeBuscado={setPokeBuscado}
              pokeBuscado={pokeBuscado}
            />} />

          <Route path="/fire" element={
            <div className="cards mt-4">
              <Fire
                setPokeFire={setPokeFire}
                pokeFire={pokeFire}
                setCargando={setCargando}
              />
            </div>
          }
          />

          <Route path="/electric" element={
            <div className="cards mt-4">
              <Electric
                pokeElectric={pokeElectric}
                setPokeElectric={setPokeElectric}
                setCargando={setCargando}

              />
            </div>
          } />

          <Route path="/normal" element={

            <div className="cards mt-4">
              <Normal
                pokeNormal={pokeNormal}
                setPokeNormal={setPokeNormal}
                setCargando={setCargando}
              />
            </div>
          } />

          <Route path="/gras" element={
            <div className="cards mt-4">
              <Gras
                pokeGras={pokeGras}
                setpokeGras={setpokeGras}
                setCargando={setCargando}
              />
            </div>}
          />

          <Route path="/ground" element={
            <div className="cards mt-4">
              <Ground
                pokeGround={pokeGround}
                setPokeGround={setPokeGround}
                setCargando={setCargando}
              />
            </div>
          } />

          <Route path="/poison" element={
            <div className="cards mt-4">
              <Poison
                pokePoison={pokePoison}
                setPokePoison={setPokePoison}
                setCargando={setCargando}
              />
            </div>

          } />
          <Route path="/water" element={
            <div className="cards mt-4">
              <Water
                pokeWater={pokeWater}
                setPokeWater={setPokeWater}
                setCargando={setCargando}
              />

            </div>
          } />

          <Route path="*" element={<Principal />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
