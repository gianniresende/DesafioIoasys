const Def = require('../models/deficiencia');

module.exports = {
    // Cadastro de deficiencias provisório
    async store(req, res) {
        try {
            const dados = req.body;
            const def = await Def.create(dados);
            return res.json(def);
        }
        catch (error) {
            console.log(error);
        }
        
    },
    // Listar todas as deficiências ordenadas pelo grupo pertencente
    async getByGroup(req,res) {
        try {
            const data = await Def.find({});
            await data.sort(function (def1, def2) {
                if (def1.grupoPertencente > def2.grupoPertencente) {
                    return 1;
                }
                if (def1.grupoPertencente < def2.grupoPertencente) {
                    return -1;
                }
                return 0;
            })
            return res.json(data);
        }
        catch (error) {
            console.error(error);
        }
    },
    // Lista todas as deficiencias por nome e/ou caracteristicas
    async search(req, res) {
        try {
            const nomeInformado = req.query.nome.toLowerCase();
            const caractInformada = req.query.caract;
            const defs = await Def.find({
                $or: [
                    { nome: { $eq: nomeInformado}},
                    { caracteristicas: {$in: caractInformada}}
                ],
            })
            return res.json(defs);
        }
        catch (error) {
            console.log(error);
        }
    },
    async addEspecialista(req,res) {
        try {
            const {nomeDeficiencia, informacao: info} = req.body;
            nomeDeficiencia.toLowerCase();
            await Def.update({ nome: nomeDeficiencia}, { $push: {especialistas: info}});
            res.status(201).send("Adicionado com sucesso!");
        }
        catch(error) {
            console.log(error);
        }
        
    },
    async addAssociacao(req,res) {
        try {
            const {nomeDeficiencia, informacao: info} = req.body;
            nomeDeficiencia.toLowerCase();
            await Def.update({ nome: nomeDeficiencia}, { $push: {associacoes: info}});
            res.status(201).send("Adicionado com sucesso!");
        }
        catch(error) {
            console.log(error);
        }
    }
};