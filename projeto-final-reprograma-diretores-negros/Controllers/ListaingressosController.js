const { connect } = require('../models/Repository')
const { ingressosModel } = require('../models/ListaingressosSchema')

connect()


const getAll = (request, response) => {
  ingressosModel.find((error, pokemons) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(pokemons)
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
//   getById,
//   add,
//   remove,
//   update,
//   treinar
}