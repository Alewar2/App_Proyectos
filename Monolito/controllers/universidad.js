const { request, response } = require('express');
const Universidad= require('../models/universidad');



/**
 * crea una univesidad
 */
const createUniversidad = async (req = request, res = response) => {
    try {
     const { nombre, direccion, telefono } = req.body
     
     const universidadBD = await Universidad.findOne({ nombre, direccion, telefono });
     if(universidadBD){// ya existe
         return res.status(400).json({msg: 'Ya existe esta universidad'});
     }
     
     const datos = {
         nombre,
         direccion,
         telefono
     }
     const universidad = new Universidad(datos); 
     await universidad.save();
     return res.status(201).json(universidad);

    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

// Consultar todas las universidades


const getUniversidad = async (req, res = response) => {
    try {
        const universidadBD = await Universidad.find()
        return res.json(universidadBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
 }

 /**
 * Consultar por Id
 */
const getUniversidadPorId = async (req = request, res = response) => {
    try {
    const { id } = req.params
    const query = {_id: id}
    const universidadBD = await Universidad.findOne(query)
    return res.json(universidadBD)
}catch(e) {
    return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateUniversidadById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { nombre, direccion, telefono } = req.body
        const data = {
            nombre: nombre,
            direccion: direccion,
            telefono: telefono,
            fechaActualizacion: new Date ()
        }
        const universidad = 
            await Universidad.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(universidad);
    }catch(e) {
        return res.status(500).json({msj: e})
        }
}

module.exports = { 
    createUniversidad, 
    getUniversidad,  
    getUniversidadPorId,
    updateUniversidadById,
};