const { connect } = require('../models/Repository')
const { ingressosModel } = require('../models/ListaingressosSchema')

connect()


const getAll = (request, response) => {
  ingressosModel.find((error, ingressos) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(ingressos)
  })
}
const addCadastro = (request, response) => {
  //testar a criação de um novo cadastro igual criar um treinador
  // if (!request.body.senha) {
  //   return response.status(400).send('bota a senha aí')
  // }
  // const senhaCriptografada = bcrypt.hashSync(request.body.senha)
  // request.body.senha = senhaCriptografada
  const novoCadastro = new ingressosModel(request.body)

  novoCadastro.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoCadastro)
  })
}
const addIngresso = async (request, response) => {
  //testar vincular um filme a um cadastro igual vincular um pokemon ao treinador
    const filmeId = request.params.filmeId
    const ingresso = request.body
    const options = { new: true }
    const novoIngresso = new ingressosModel(ingresso)
    const filmes = await filmesModel.findById(filmeId)
  
    filmes.ingressos.push(novoIngresso)
    filmes.save((error) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      return response.status(201).send(filmes)
    })
  }

// const getById = (request, response) => {
//   const id = request.params.id

//   return ingressosModel.findById(id, (error, pokemon) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     if (pokemon) {
//       return response.status(200).send(pokemon)
//     }

//     return response.status(404).send('Pokémon não encontrado.')
//   })
// }

// const add = (request, response) => {
//   const novoPokemon = new ingressosModel(request.body)

//   novoPokemon.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(201).send(novoPokemon)
//   })
// }

// const remove = (request, response) => {
//   const id = request.params.id

//   ingressosModel.findByIdAndDelete(id, (error, pokemon) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     if (pokemon) {
//       return response.status(200).send(id)
//     }

//     return response.status(404).send('Pokémon não encontrado.')
//   })
// }

// const update = (request, response) => {
//   const id = request.params.id
//   const pokemonUpdate = request.body
//   const options = { new: true }

//   ingressosModel.findByIdAndUpdate(
//     id,
//     pokemonUpdate,
//     options,
//     (error, pokemon) => {
//       if (error) {
//         return response.status(500).sned(error)
//       }

//       if (pokemon) {
//         return response.status(200).send(pokemon)
//       }

//       return response.status(404).send('Pokémon não encontrado.')
//     }
//   )
// }

// const treinar = async (request, response) => {
//   const id = request.params.id
//   const options = { new: true }
//   const pokemon = await ingressosModel.findById(id, 'nivel')
//   const novoNivel = calcularNivel(request.body.inicio, request.body.fim, pokemon.nivel)

//   ingressosModel.findByIdAndUpdate(
//     id,
//     { nivel: novoNivel },
//     options,
//     (error, pokemon) => {
//       if (error) {
//         return response.status(500).send(error)
//       }

//       if (pokemon) {
//         return response.status(200).send(pokemon)
//       }

//       return response.status(404).send('Pokémon não encontrado')
//     }
//   )
// }

module.exports = {
  getAll,
  addCadastro,
  addIngresso
//   getById,
//   add,
//   remove,
//   update,
//   treinar
}