const Item = () => {

    let Items = [] // creo array vacio para pushear luego en el then la respuesta

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
        Items.push({response})
    })
    singleItem.catch((err) => {console.log('error')})


    return (
            <>         
            <section>

            <p></p>
            {console.log(Items)}
            
                
            </section>
            
            </>    
            
    )
}

export default Item;