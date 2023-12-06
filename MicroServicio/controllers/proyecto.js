
const { request, response } = require('express');
const Proyecto = require('../models/proyecto');
const Cliente = require('../models/cliente');
const TipoProyecto = require('../models/tipoProyecto');
const Universidad = require('../models/universidad');
const Etapa = require('../models/etapa');


/**
 * crea un Proyecto
 */
const createProyecto = async (req = request, res = response) => {
    console.log("Peticion createProyecto")
    try{
        const data = req.body
         const { cliente, tipoProyecto, universidad, etapa} = data ;

         //data Cliente
         const clienteBD = await Cliente.findOne({
             _id: cliente._id
         })
         if(!clienteBD){
             return res.status(400).json({
                 msj: 'Cliente no existe'
             })
         }

         //Data Tipo Proyecto
         const tipoProyectoBD = await TipoProyecto.findOne({
             _id: tipoProyecto._id
         })
         if(!tipoProyectoBD){
             return res.status(400).json({
                 msj: 'No existe este tipo de proyecto'
             })
         }

         //Data Universidad
         const universidadBD = await Universidad.findOne({
            _id: universidad._id
        })
        if(!universidadBD){
            return res.status(400).json({
                msj: 'No existe la universidad'
            })
        }

        //Data Etapa
        const etapasBD = await Etapa.findOne({
            _id: etapa._id
        })
        if(!etapasBD){
            return res.status(400).json({
                msj: 'No existe esta etapa de proyecto'
            })
        }
         // TAREA: Validar 
 
         const proyecto = new Proyecto(data);
         await proyecto.save();
         return res.status(201).json(proyecto);
     }catch(e){
         return res.status(500).json({
             error: e
         });
     }
 }

/**
 * Consultar todos los proyectos
 */
const getProyectos = async (req, res = response) => {
    console.log("Peticion getProyectos")
    try{
        const proyectosBD = await Proyecto.find()
        .populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
        .populate({
            path: 'universidad'
        })
        .populate({
            path: 'etapa'
        }) 
        return res.json(proyectosBD);
    }catch(e){
        return res.status(500).json({ msj: "Fallo al obtener" })
    }
}

/**
 * Consultar todos inventarios
 */
 const getProyectoByID = async (req = request, res = response) => {
    console.log("Peticion getProyectoByID")
    try{
        const { id } = req.params;
        const query = { _id: id};
        const proyectoBD = await Proyecto.findOne().populate({
            path: 'numero',
            path: 'titulo',
            path: 'fechaIniciacion',
            path: 'fechaEntrega',
        }).populate({
            path: 'cliente'
        })
        .populate({
            path: 'tipoProyecto'
        })
        .populate({
            path: 'universidad'
        })
        .populate({
            path: 'etapa'
        }) 
        // TODO: personalizar error de no encontrado
        res.json(proyectoBD);
    }catch(e){
        return res.status(500).json({
            error: e
        })
    }
}



const updateInventario = async (req = request, res = response) => {
   /* try{
        const { id } = req.params;
        const data = req.body;// destructuring, spread (...)
    
        const inventarioBD = await Inventario.findOne({ _id: id});
       // TODO: VALIDAR QUE EXISTEN Y ESTAN ACTIVOS: ESTADO, USUARIO, MARCA, ...
       if(!inventarioBD){
        return res.status(400).json({
            msj: 'No existe este inventario'
        });
       } 
        const inventario = await Inventario.findByIdAndUpdate(id, data, {new : true});
        res.status(201).json(inventario);
    }catch(e){
        return res.status(500).json({
            error: e
        });
    }*/
}

module.exports = { createProyecto, getProyectos, getProyectoByID };