const { Router } = require('express');
const { 
    createProyecto,
    getProyectos, 
    getProyectoByID
    } = require('../controllers/proyecto');

const router = Router();

/**
 * Obtiene todos los proyectos
 */
router.get('/', getProyectos);

/**
 * Obtiene un proyecto por id
 */
router.get('/:id', getProyectoByID);

/**
 * Crear un proyecto
 */
router.post('/', createProyecto);

/**
 * Actualiza un inventario por id
 */
//router.put('/:id', updateInventario);


module.exports = router;