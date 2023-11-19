const { Router } = require('express');

const { 
    createEtapa,
    getEtapa,
    getEtapaPorId,
    updateEtapaById
} = require('../controllers/etapa');

const router = Router();


/**
 * Obtiene todos
 */
router.get('/', getEtapa);

/**
 * Obtiene un etapas por su id
 */
 router.get('/:id', getEtapaPorId);

/**
 * Crear etapas
 */
router.post('/', createEtapa);

/**
 * Actualiza etapas por id
 */
router.put('/:id', updateEtapaById);

module.exports = router;