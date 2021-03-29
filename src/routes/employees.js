const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', (req, res) => {
    mysqlConnection.query("select * from empleados", (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log("err");
        }
    });
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query("select * from empleados where id= ?", [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log("err");
        }
    });
});

router.post('/', (req, res) => {
    const {id, nombre, salario} = req.body;
    const sql = "INSERT INTO empleados (nombre, salario) VALUES (?, ?)";
    mysqlConnection.query(sql, [nombre, salario], (err, rows, fields) => {
        if (!err) {
            res.json({status: "empleado agregado"});
        } else {
            console.log("err");
        }
    })
});

router.put('/:id', (req, res) => {
    const nvoEmpl = req.body;
    const {id} = req.params;
    const sql = "UPDATE empleados SET ? WHERE id =?";
    console.log(id);
    console.log(nvoEmpl);

    mysqlConnection.query(sql, [nvoEmpl, id], (err, rows, fields) => {
        if (!err) {
            res.json({status: "empleado actualizado"});
        } else {
            console.log("err");
        }
    });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const sql = "DELETE FROM empleados WHERE id =?";
    mysqlConnection.query(sql, [id], (err, rows, fields) => {
        if (!err) {
            res.json({status: "empleado eliminado"});
        } else {
            console.log("err");
        }
    });
});

module.exports = router;