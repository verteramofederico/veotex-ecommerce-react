import Item from './Item';


const ItemList = (props) => {

    function itemList(props) {
        props.ItemsArray.map(item => <li>{item.description}</li>)
    }

    return (
            <>     
            <Item item/>            

            </>    
            
    )
}

export default ItemList;