const bannerWelcome = (props) => {

    return (
            <>
            <section className="jumbotron">
                    <h1 className="text-center">{props.greeting}</h1>
            </section>
            </>   
            
    )
}

export default bannerWelcome;