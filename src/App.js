import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

// hook de estado
import {useState, useEffect} from "react"

const App = () => {
    const [ contador, setContador ] = useState(0) // useState tiene retorno

    //useEffect(fn,array) // useEffect no tiene retorno pero debe tener al menos un parametro 
    /* useEffect(()=>{

    }) */

    useEffect(()=>{
      
    }, []) // array de dependencias 

    const cambiarContador = () => {
      setContador(contador + 1)
    }


  return (
    <div className="container">
      <NavBar/>

      <ItemListContainer greeting="bienvenido"/>

      <Footer/>

      <p>El contador va: {contador}</p>
      <button onClick={cambiarContador}>click</button>
    </div>
    
  )
}

export default App;
