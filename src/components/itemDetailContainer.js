
import ItemDetail from './ItemDetail'; 
import {useState, useEffect} from "react"

const singleItem = () =>{
    return new Promise((resolve, reject) => {
    setTimeout(
        () => 
        resolve([
            {id: 3,title: 'camisa',destacado: false, description: 'camisa mangas',price: 1600,pictureUrl: 'uploads/products/camisa.jpg'},
            ]),
            2000);
            })}


const ItemListContainer = (props) => {

    let [ productItem, cambioState ] = useState([]) 

    useEffect(() => {
        singleItem().then((data) => {
            let aux = data[0]
            cambioState(aux);
            console.log(productItem)
        })
    }, []);

    return (
            <>
            <ItemDetail items={productItem} />
            </>   
            
    )
}

export default ItemListContainer;