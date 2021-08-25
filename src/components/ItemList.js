import Item from './Item'
import "./itemList.css"

const ItemList = (props) => {
    console.log(props.items)

    return (
            <section className="itemContainer">    
            {props.items.length == 0 ? (<h1>Cargando...</h1>
            ) : (                
                    props.items.map(item => 
                        <Item item={item} />)                                    
            )}
            </section> 

    )
}

export default ItemList;