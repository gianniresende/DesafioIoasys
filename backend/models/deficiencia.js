const { Schema, model } = require('mongoose');

const DefSchema = new Schema({
    grupoPertencente: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    caracteristicas: [{
        type: String,
        required: false
    }],
    tecnicasEnsino: [{
        type: String,
        required: false
    }],
    especialistas: [{
        type: String,
        required: true,
    }],
    associacoes: [{
        type: String,
        required: true,
    }],
    gruposApoio: [{
        type: String,
        required: true,
    }],
});

module.exports = model('Deficiencia', DefSchema);