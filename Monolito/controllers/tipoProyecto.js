
const { request, response } = require('express');
const TipoProyecto= require('../models/tipoProyecto');



/**
 * crea un tipo de eqipo
 */
const createTipoProyecto = async (req = request, res = response) => {
    try {
     const { nombre } = req.body
     
     const tipoProyectoBD = await TipoProyecto.findOne({ nombre });
     if(tipoProyectoBD){// ya existe
         return res.status(400).json({msg: 'Ya existe tipo proyecto'});
     }
     
     const datos = {
         nombre,
     }
     const tipoProyecto = new TipoProyecto(datos); 
     await tipoProyecto.save();
     return res.status(201).json(tipoProyecto);

    }catch(e) {
        return res.status(500).json({msj: e})
    }
}
    
// Consultar todos los proyectos


const getTiposProyectos = async (req, res = response) => {
    try {
        const tiposProyectosBD = await TipoProyecto.find()
        return res.json(tiposProyectosBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
 }

/**
 * Consultar por Id
 */
const getTipoProyectoPorId = async (req = request, res = response) => {
    try {
    const { id } = req.params
    const query = {_id: id}
    const tipoProyectoBD = await TipoProyecto.findOne(query)
    return res.json(tipoProyectoBD)
}catch(e) {
    return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateTipoProyectoById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { nombre } = req.body
        const data = {
            nombre: nombre,
            fechaActualizacion: new Date ()
        }
        const tipoProyecto = 
            await TipoProyecto.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(tipoProyecto);
    }catch(e) {
        return res.status(500).json({msj: e})
        }
}

/**
 * Borrar un tipo de equipo por su ID
 */
const deleteTipoEquipoByID = async (req = request, res = response) => {
    // try- catch
  /*  const id = req.params.id;
    const tipoEquipo = await TipoEquipo.findByIdAndDelete(id);
    res.status(204).json(tipoEquipo);*/
}




module.exports = { 
    createTipoProyecto, 
    getTiposProyectos,  
    getTipoProyectoPorId,
    updateTipoProyectoById,
};