import "./item.css"

const Item = (props) => {

    return (
            <article className="itemDetail">
            {props.items.length == 0 ? (<h1>Cargando...</h1>
                ) : (
                    <>
                    {console.log(props.items)}                
                    <h3 className="itemTitle">{props.items.title}</h3> 
                    <p className="itemDescription">{props.items.description}</p>
                    <h5 className="itemPrice">${props.items.price}</h5>
                    </>                                    
                )   }
            </article>
    )
}

export default Item;