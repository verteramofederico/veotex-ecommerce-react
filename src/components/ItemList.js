import Item from './Item'


const ItemList = (props) => {
    console.log(props.items)

    return (      
            props.items.length == 0 ? (<h1>Cargando...</h1>
            ) : (                
                    props.items.map(item => 
                        <Item item={item} />)                                    
            )

    )
}

export default ItemList;