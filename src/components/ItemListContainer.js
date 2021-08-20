import ItemCount from './ItemCount';
import ItemList from './ItemList';


const Main = (props) => {

    let ItemsArray = [] // creo array vacio para pushear luego en el then la respuesta

    const singleItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('aqui es el pedido al servidor')
            resolve({
                id: 2,
                title: 'pantalon',
                description: 'pantalon largo',
                price: 1900,
                pictureUrl: 'uploads/products/pantalon.jpg'
            })
        }, 2000)
    })

    singleItem.then((response) => {        
        ItemsArray.push({response})
    })
    singleItem.catch((err) => {console.log('error')})

    return (
            <>         
            <section className="jumbotron">
                <h1 className="text-center">{props.greeting}</h1> 
                
            </section>
            
            <ItemCount stock="4" initial="1" onAdd={() =>{}} /> 
            <ItemList ItemsArray/>
            </>    
            
    )
}

export default Main;