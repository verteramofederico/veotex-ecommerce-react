import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Footer from './components/Footer';
import bannerWelcome from './components/bannerWelcome';

const App = () => {    
  return (
    <div className="container">
      <NavBar/>
      <bannerWelcome greeting="bienvenido" /> 
      <ItemListContainer />
      <ItemDetailContainer/> 

      <Footer/>

      
    </div>
    
  )
}

export default App;





