const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const FilmesSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  nomeFilme: { type: String, required: true },
  nomeDiretor: { type: String },
  cartaz: { type: String},
  descricao: { type: String },
  dataExibicao: { type: String, required: true},
  horarioSessao: [{type: String, require: true}, {type: String, require: true}, 
    {type: String, require: true}, {type: String, require: true}]
   //colocar o schema dos ingressos?

})

const filmesModel = mongoose.model('filmes', FilmesSchema);

module.exports = {filmesModel, FilmesSchema};