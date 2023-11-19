const { Router } = require('express');

const { 
    createCliente,
    getClientes,
    getClientePorId,
    updateClienteById
} = require('../controllers/cliente');

const router = Router();


/**
 * Obtiene todos
 */
router.get('/', getClientes);

/**
 * Obtiene un tipos de equipos por id
 */
 router.get('/:id', getClientePorId);

/**
 * Crear un tipos de equipos
 */
router.post('/', createCliente);

/**
 * Actualiza un tipos de equipos por id
 */
router.put('/:id', updateClienteById);

module.exports = router;