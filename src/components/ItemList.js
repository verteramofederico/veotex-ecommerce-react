import Item from './Item'


const ItemList = (props) => {
    console.log(props.ItemsArray)

    return (            
            props.ItemsArray.length == 0 ? (<h1>Cargando...</h1>
            ) : (                
                    props.ItemsArray.map(item => 
                        <Item {item} />)                                    
            )

    )
}

export default ItemList;