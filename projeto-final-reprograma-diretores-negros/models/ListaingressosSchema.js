const mongoose = require('mongoose');
const { FilmesSchema } = require('./ListafilmesSchema')
const Schema = mongoose.Schema;
const IngressosSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nome: { type: String, required: true },
  email: { type: String, require: true},
  filmes: [FilmesSchema],
  senha: { type: String}
})

const ingressosModel = mongoose.model('ingressos', IngressosSchema);

module.exports = ingressosModel;