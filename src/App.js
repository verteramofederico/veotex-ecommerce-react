import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="container">
      <>
        <NavBar/>
      </>
      <>
        <ItemListContainer greeting="bienvenido"/>
      </>
      <>
        <Footer/>
      </>
    </div>
    
  )
}

export default App;
