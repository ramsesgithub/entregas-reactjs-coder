import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/Navbar/NavBar"


export const App = () =>{
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="Hola, Bienvendio a Celucenter Shop!"/>
    </>
  )
}

export default App
