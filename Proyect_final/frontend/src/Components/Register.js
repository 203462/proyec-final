import React, { useEffect } from "react";
import axios from "axios";
import { useState } from 'react';
import './assetss/css/Login.css'

export default function Register() {

     useEffect(() => {
          document.title = 'Login'
     }, []);

     const [email, setEmail] = useState();
     const [pass, setPass] = useState();


     const register = () => {
          axios.post("http://localhost:3001/register", {
               email: email,
               pass: pass,
          }).then((response) => {
               window.location.href = 'http://localhost:3000/Login'
          });
     };

     return (
          <div>
               <div className="sidenav">
                    <div className="login-main-text">
                         <h2>NeoSoft</h2>
                         <h2>Página de registro</h2>
                    </div>
               </div>
               <div className="main">
                    <div className="col-md-6 col-sm-12">
                         <div className="login-form">
                              <form>
                                   <div className="form-group">
                                        <label>Nuevo usuario</label>
                                        <input type="text" id='user' className="form-control" placeholder="Nombre del usuario" onChange={e => setEmail(e.target.value)} />
                                   </div>
                                   <div className="form-group">
                                        <label>Nueva contraseña</label>
                                        <input type="password" id='password' className="form-control input_pass" placeholder="Contraseña" onChange={e => setPass(e.target.value)} />
                                   </div>
                                   <br />
                                   <button onClick={register} type="submit" className="btn btn-black">Registrar</button>
                              </form>
                         </div>
                    </div>
               </div>
          </div >
     )

}