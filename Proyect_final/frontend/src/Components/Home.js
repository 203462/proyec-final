
import './assetss/css/Login.css'
import Nav from './Nav'
export default function Home() {
     return (
          <div>
               <Nav />
               <div>
               <div className="position-relative overflow-hidden p-3 p-md-5 m-md-5 text-center bg-light">
                         <div className="col-md-5 p-lg-5 mx-auto my-5">
                              <h1 className="display-4 fw-normal">NeoSoft</h1>
                              <p className="lead fw-normal">Proyecto Integrador</p>
                              <a className="btn btn-outline-secondary" href="Regis_all">Todos los registros</a>
                              <br/><br/>
                              <a className="btn btn-outline-secondary" href="Last_regis">Último registro</a>
                              <br/><br/>
                              <a className="btn btn-outline-secondary" href="Calculos">Datos estadisticos</a>
                              <br/><br/>
                            
                         </div>
                         <div className="product-device shadow-sm d-none d-md-block"></div>
                         <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    </div>
               </div>
          </div>
     )
}