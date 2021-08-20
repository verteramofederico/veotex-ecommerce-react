import {useState} from "react"

const ItemCount = (props) => {

    const [ contador, setContador ] = useState(props.initial) 

    function aumentar () {
        if (props.stock == 0) {
            console.log("no hay stock")
            }
        if (contador < props.stock) {
            setContador(contador + 1)
            } } 

    function disminuir () {
        if (props.stock == 0) {
            console.log("no hay stock")
            }
        if (contador > 1) {
            setContador(contador - 1)
            } } 

    function agregar () {
        console.log("agregado")
    }

    return (
        <section>

        <button onClick={disminuir}>Restar</button>
        <input type="text" name="name" value={contador} />
        <button onClick={aumentar}>Sumar</button>
        

        <div>
        <button onClick={agregar} >Enviar</button>
        </div>
        
        </section>
    )
}

export default ItemCount;