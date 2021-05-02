import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id,title,image,price,rating}) {
   const[{basket},dispatch]=useStateValue();
    console.log('Esta es la canasta>>>',basket);

    const addToBasket=()=>{
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                  id:id,
                  title:title,  
                  image:image,
                  price:price
                }
            })
    }
    return (
        <div className="product">
            <div className="product_info"></div>
            <p>{title}</p>
            <p className="product_price"><small>$</small> <strong>{price}</strong></p>
            <div className="product_rating">{Array(rating).fill().map((_, i)=>(<p>⭐</p> ))}    </div>
                <img src={image} alt=""/>
                {/* /imagenes/libro.jpg */}
                <button onClick={addToBasket}>Agregar a carrito</button>


        </div>
    )
}

export default Product
