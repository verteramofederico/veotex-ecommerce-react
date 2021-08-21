import ItemCount from './ItemCount';
import ItemList from './ItemList'; 
import {useState, useEffect} from "react"

const singleItem = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(
        () => 
        resolve([
            {id: 2,title: 'pantalon',destacado: true, description: 'pantalon largo',price: 1900,pictureUrl: 'uploads/products/pantalon.jpg'},
            {id: 3,title: 'camisa',destacado: false, description: 'camisa mangas',price: 1600,pictureUrl: 'uploads/products/camisa.jpg'},
            {id: 4,title: 'casco',destacado: true, description: 'casco amarillo',price: 1100,pictureUrl: 'uploads/products/casco.jpg'}         
            ]),
            2000);
            })}


const ItemListContainer = (props) => {

    let [ ItemsArray, cambioState ] = useState([]) 

    useEffect(() => {
        singleItem().then((data) => {
            let aux = data.filter((producto) => producto.destacado);
            cambioState(aux);
            console.log(ItemsArray)
        })
    }, []);

    return (
            <>     
            
            <section className="jumbotron">
                <h1 className="text-center">{props.greeting}</h1>     
            </section>

            <ItemCount stock="4" initial="1" onAdd={() =>{}} /> 
            <ItemList {ItemsArray} />
            
            </>    
            
    )
}

export default ItemListContainer;