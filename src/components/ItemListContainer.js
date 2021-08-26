import ItemCount from './ItemCount';
import ItemList from './ItemList'; 
import {useState, useEffect} from "react"

const URL_API_PRODUCTS = "https://mocki.io/v1/85f13fc4-5212-4796-a403-994e8ef8280e"


// manera manual antes de usar mocki.io
const singleItem = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(
        () => 
        resolve([
            {id: 1,title: 'casco',destacado: false, description: 'casco amarillo',price: 1100,pictureUrl: 'uploads/products/casco.jpg'},
            {id: 2,title: 'pantalon',destacado: true, description: 'pantalon largo',price: 1900,pictureUrl: 'uploads/products/pantalon.jpg'},
            {id: 3,title: 'camisa',destacado: true, description: 'camisa mangas',price: 1600,pictureUrl: 'uploads/products/camisa.jpg'},
            {id: 4,title: 'Botin',destacado: false, description: 'botin de trabajo',price: 1100,pictureUrl: 'uploads/products/botin.jpg'}, 
            {id: 5,title: 'Guante',destacado: true, description: 'guante tejido moteado',price: 1400,pictureUrl: 'uploads/products/guante.jpg'}, 
            {id: 6,title: 'Zapato',destacado: false, description: 'zapato de seguridad',price: 1600,pictureUrl: 'uploads/products/zapato.jpg'}      
            ]),
            2000);
            })}


const ItemListContainer = (props) => {

    let [ ItemsArray, cambioState ] = useState([]) 

    useEffect(() => {
        //singleItem()
        fetch(URL_API_PRODUCTS)
        .then(response => response.json())
        .then((data) => {
            let aux = data.filter((producto) => producto.destacado);
            cambioState(aux);
            console.log(ItemsArray)
        })
    }, []);

    return (
            <>
            <ItemCount stock="4" initial="1" onAdd={() =>{}} />
            <ItemList items={ItemsArray} />
            </>   
            
    )
}

export default ItemListContainer;