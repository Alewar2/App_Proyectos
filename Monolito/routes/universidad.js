const { Router } = require('express');

const { 
    createUniversidad, 
    getUniversidad,  
    getUniversidadPorId,
    updateUniversidadById
} = require('../controllers/universidad');

const router = Router();


/**
 * Obtiene todas
 */
router.get('/', getUniversidad);

/**
 * Obtiene universidades por id
 */
 router.get('/:id', getUniversidadPorId);

/**
 * Crear universidades
 */
router.post('/', createUniversidad);

/**
 * Actualiza universidades por id
 */
router.put('/:id', updateUniversidadById);

module.exports = router;