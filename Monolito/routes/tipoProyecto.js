const { Router } = require('express');

const {
    createTipoProyecto, 
    getTiposProyectos,  
    getTipoProyectoPorId,
    updateTipoProyectoById,
} = require('../controllers/tipoProyecto');

const router = Router();


/**
 * Obtiene todos
 */
router.get('/', getTiposProyectos);

/**
 * Obtiene un tipos de equipos por id
 */
 router.get('/:id', getTipoProyectoPorId);

/**
 * Crear un tipos de equipos
 */
router.post('/', createTipoProyecto);

/**
 * Actualiza un tipos de equipos por id
 */
router.put('/:id', updateTipoProyectoById);

/**
 * Actualiza una parte del tipos de equipos
 */
/*router.patch('/:id', (req, res) => {
    res.json({});
});*/

/**
 * Borra un tipos de equipos por id
 */
 //router.delete('/:id', deleteTipoEquipoByID);

module.exports = router;