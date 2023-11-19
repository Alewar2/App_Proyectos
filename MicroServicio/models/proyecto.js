const {Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero:{
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Numero ya existe']
    },
    titulo: {
        type:  String,
        required: [true, 'Ingrese un titulo'],
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'Ingrese la fecha de inicio']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'Ingrese la fecha de entrega el proyecto']
    },
    valor: {
        type: Number,
        required: [true, 'Ingrese el valor']
    },

    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    },
    etapa: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        Required: true
    }
  
})

module.exports = model('Proyecto', ProyectoSchema)