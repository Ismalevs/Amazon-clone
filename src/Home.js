import React from 'react'
import './Home.css';
import Product from "./Product";
function Home() {
    return (
        <div className="home">
           <div className="home_container">
            <img className="home_image" src="/imagenes/banner.png" alt=""/>

            <div className="home_row"><Product id={12233} title="Libros destacados" price={199.99} image="/imagenes/libro.jpg" rating={4}  /> 
            <Product id={22333} title="Bocina" price={2199.99} image="/imagenes/bocina.jpg" rating={3}/>     </div>

            <div className="home_row"><Product id={34323} title="Bascula" price={599.99} image="/imagenes/bas.jpg" rating={4}/> <Product title="Cargador Inalambrico" price={99.99} image="/imagenes/inalambrico.jpg" rating={3}/> <Product title="Cargador Iphone USB" price={199.99} image="/imagenes/usb.webp" rating={4}/>   </div>
            <div className="home_row"><Product id={53104} title="Televison LG V2" price={5199.99} image="/imagenes/tele2.jfif" rating={4}/>   </div>
        </div>
        </div>
    )
}

export default Home
