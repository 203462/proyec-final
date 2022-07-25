import './assetss/css/Login.css'
import Nav from './Nav'
import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Regis_All(){
               const [data, setData]= useState([]);
               const loadData = async ()=>{
                              const response = await axios.get("http://localhost:3001/api/registros");
                              setData(response.data);
               };

               useEffect(()=>{
                              loadData();
               })
               
               return(
                              <div>
                                             <Nav/>
                                            <div style={{marginTop:"150px"}}>
                                             <table className="styled-table">
                                                            <thead>
                                                                           <tr>
                                                                                          <th style={{textAlign:"center"}}>ID</th>
                                                                                          <th style={{textAlign:"center"}}>Temperatura del aire</th>
                                                                                          <th style={{textAlign:"center"}}>Humedad del aire</th>
                                                                                          <th style={{textAlign:"center"}}>Humedad de suelo</th>
                                                                                          <th style={{textAlign:"center"}}>Fecha</th>
                                                                                          <th style={{textAlign:"center"}}>Estatus de la bomba</th>
                                                                           </tr>
                                                            </thead>
                                                            <tbody>
                                                                         {data.map((item, server)=>{
                                                                           return(
                                                                                  <tr key={(item.id)}>
                                                                                    <th scope="row">{server+1}</th>
                                                                                    <td>{item.air_tem}</td>
                                                                                    <td>{item.hum_air}</td>
                                                                                    <td>{item.hum_floor}</td>
                                                                                    <td>{item.date}</td>
                                                                                    <td>{item.status_bomb}</td>
                                                                                    <td>
                                                                                      <Link></Link>
                                                                                    </td>
                                                                                  </tr>        
                                                                                  
                                                                           )
                                                                         })}  
                                                            </tbody>
                                             </table>
                                            </div>
                                             
                              </div>
               )
}