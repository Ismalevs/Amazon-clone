import SearchIcon from '@material-ui/icons/Search';
import React from 'react'
import './Header.css';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom"; 
import { useStateValue } from './StateProvider';
function Header() {
    const[{basket},dispatch]=useStateValue();
    return (
        <div className="header">
           <Link to="/">  
         <img className="header_logo "  src="/imagenes/amazone.png" alt=""/>
       
         </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/> 
            </div>

            <div className="header_nav"></div>
            <Link to='/login'>
                <div className='header_option'>
                    <span className="header_optionLineOne">Bienvenido Invitado</span>
                    <span className="header_optionLinetwo">Iniciar Sesion</span>
                
                </div>
                </Link>
                    <div className='header_option'>
                    <span className="header_optionLineOne">Devoluciones</span>
                    <span className="header_optionLinetwo">y pedidos</span>
                </div>
                        <div className='header_option'>
                        <span className="header_optionLineOne">tu</span>
                    <span className="header_optionLinetwo">prime</span>
                            </div>
                       <Link to="/checkout">         
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header_optionLinetwo header_basketCount">{basket?.length}</span>
                         
                    </div>
                    </Link>
        </div>
    )
}

export default Header
