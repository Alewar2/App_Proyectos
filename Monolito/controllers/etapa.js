const { request, response } = require('express');
const Etapa= require('../models/etapa');



/**
 * crea una etapa
 */
const createEtapa = async (req = request, res = response) => {
    try {
     const { nombre } = req.body
     
     const etapaBD = await Etapa.findOne({ nombre });
     if(etapaBD){// ya existe
         return res.status(400).json({msg: 'Ya existe esta etapa'});
     }
     
     const datos = {
         nombre,
     }
     const etapa = new Etapa(datos); 
     await etapa.save();
     return res.status(201).json(etapa);

    }catch(e) {
        return res.status(500).json({msj: e})
    }
}

// Consultar todas las etapas


const getEtapa = async (req, res = response) => {
    try {
        const etapaBD = await Etapa.find()
        return res.json(etapaBD)
    }catch(e) {
        return res.status(500).json({msj: e})
    }
 }

 /**
 * Consultar etapas por id
 */
const getEtapaPorId = async (req = request, res = response) => {
    try {
    const { id } = req.params
    const query = {_id: id}
    const etapaBD = await Etapa.findOne(query)
    return res.json(etapaBD)
}catch(e) {
    return res.status(500).json({msj: e})
    }
}

/**
 * Actualiza por su ID
 */
const updateEtapaById = async (req = request, res = response) => {
    try {
        const { id } = req.params
        const { nombre } = req.body
        const data = {
            nombre: nombre,
            fechaActualizacion: new Date ()
        }
        const etapa = 
            await Etapa.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(etapa);
    }catch(e) {
        return res.status(500).json({msj: e})
        }
}

module.exports = { 
    createEtapa,
    getEtapa,
    getEtapaPorId,
    updateEtapaById
};