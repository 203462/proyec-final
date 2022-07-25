import './assetss/css/Login.css'
import Nav from './Nav'
import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { TablaDatos } from './TablaDatos'

export default function Regis_All() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://localhost:3001/api/datos')
      .then((r) => r.json())
      .then((data) => {
        setData(data)
      })
  }, [])


  return (
    <div>
      <Nav />
      <div className='container'>

        <div style={{ marginTop: "150px" }}>
          <TablaDatos data={data} />
        </div>

      </div>
    </div>
  )
}