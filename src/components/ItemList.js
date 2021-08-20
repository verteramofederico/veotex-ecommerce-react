import Item from './Item';


const ItemList = () => {

    function itemList(items) {
        items.map(item => <li>{item.description}</li>)
    }

    return (
            <>     
            <p>prueba</p> 
            <ul>{ItemList}</ul>                 

            </>    
            
    )
}

export default ItemList;