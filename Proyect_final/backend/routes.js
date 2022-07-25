const express = require('express')
const routes = express.Router()
const bcrypt = require('bcrypt')
const saltRounds = 10

routes.get("/api/registros", (req, res)=>{
    req.getConnection((err, conn)=>{
        const sqlGet = "SELECT * FROM plant_data";
        conn.query(sqlGet, (error, result)=>{
            res.send(result);
        })
    })
})

routes.post('/api/login', (req, res) => {
    const email = req.body.email;
    const pass = req.body.pass;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM user WHERE email = ? AND pass = ?', [email, pass], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                if (result) {
                    res.send(result)
                } else {
                    res.send({ message: 'Usuario o contrasenia incorrectos' })
                }
            }
        })
    })
})

module.exports = routes