
import React, {useState} from 'react';
import './Login.css'
import {auth} from "./firebase";
import {Link, useHistory} from "react-router-dom";
function Login() {
    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const signIn=e=>{
        e.preventDefault();
        //firebase iniciar sesion
    }
    const register=e=>{
        e.preventDefault();
        //firebase registrar
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login'> 
         <Link to= '/'>
            <img className='login_logo' src="/imagenes/logo.png" alt=""/>
            </Link>

            <div className="login_container">
                <h1>Iniciar sesion</h1>
                <form action="">
                    <h5>Correo</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />
                    <h5>Contraseña</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className="login_signInButton">Iniciar Sesion</button>
                    <p>Al iniciar aceptas los terminos y condiciones de nuestro sitio web</p>
                    <button onClick={register} className="login_registerButton">Crear tu Cuenta</button>
                    </form>
                
            </div>

        </div>
    )
}

export default Login 
 