import ItemCount from './ItemCount';

const Main = (props) => {
    return (
            <>         
            <section className="jumbotron">
                <h1 className="text-center">{props.greeting}</h1> 
                
            </section>
            
            <ItemCount stock="4" initial="1" onAdd={() =>{}} /> 
            </>    
            
    )
}

export default Main;