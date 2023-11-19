const { request, response } = require('express');
const Cliente= require('../models/cliente');

/**
 * crea un cliente
 */

const createCliente = async (req = request, res = response) => {
    try {
     const { nombre, email } = req.body
     
     const clienteBD = await Cliente.findOne({ nombre, email });
     if(clienteBD){// ya existe
         return res.status(400).json({msg: 'Ya existe este cliente'});
     }
     
     const datos = {
         nombre,
         email,
     }
     const cliente = new Cliente(datos); 
     await cliente.save();
     return res.status(201).json(cliente);

    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

/**
 * consultar todos los clientes
 */

const getClientes = async (req, res = response) => {
    try {
        const clienteBD = await Cliente.find()
        return res.json(clienteBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
 }

 // Consultar por Id 

 const getClientePorId = async (req = request, res = response) => {
    try {
    const { id } = req.params
    const query = {_id: id}
    const clienteBD = await Cliente.findOne(query)
    return res.json(clienteBD)
}catch(e) {
    return res.status(500).json({msj: e})
    }
}

const updateClienteById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { nombre, email } = req.body
        const data = {
            nombre: nombre,
            email: email,
            fechaActualizacion: new Date ()
        }
        const cliente = 
            await Cliente.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(cliente);
    }catch(e) {
        return res.status(500).json({msj: e})
        }
}




module.exports = { 
   createCliente,
   getClientes,
   getClientePorId,
   updateClienteById
}