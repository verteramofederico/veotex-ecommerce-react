const Item = (props) => {

    return (
            <>         
            <h3>{props.item.title}</h3> 
            <p>{props.item.description}</p>
            <h5>${props.item.price}</h5>            
            </>    
            
    )
}

export default Item;