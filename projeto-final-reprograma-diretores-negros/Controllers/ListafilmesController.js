const { connect } = require('../models/Repository')
const {filmesModel} = require('../models/ListafilmesSchema')

connect()


const getAll = (request, response) => {

  filmesModel.find((error, filmes) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(filmes)
  })
}
const getById = (request, response) => {
    const id = request.params.id
  
    return filmesModel.findById(id, (error, filmes) => {
      if (error) {
        return response.status(500).send(error)
      }
  
      if (filmes) {
        return response.status(200).send(filmes)
      }
  
      return response.status(404).send('Id fe filme não encontrado.')
    })
  }
const add = (request, response) => {
  const novoFilme = new filmesModel(request.body)

  novoFilme.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novoFilme)
  })
}
const update = (request, response) => {
    const id = request.params.id
    const filmesUpdate = request.body
    const options = { new: true }
  
    filmesModel.findByIdAndUpdate(
      id,
      filmesUpdate,
      options,
      (error, filmes) => {
        if (error) {
          return response.status(500).sned(error)
        }
  
        if (filmes) {
          return response.status(200).send(filmes)
        }
  
        return response.status(404).send('Filme não encontrado.')
      }
    )
  }
  const remove = (request, response) => {
      const id = request.params.id
    
      filmesModel.findByIdAndDelete(id, (error, filmes) => {
        if (error) {
          return response.status(500).send(error)
        }
    
        if (filmes) {
          return response.status(200).send(id)
        }
    
        return response.status(404).send('Filmes não encontrado nenhuma remoção feita.')
      })
    }
  
  

// const getById = (request, response) => {
//   const id = request.params.id

//   return filmesModel.findById(id, (error, treinador) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     if (treinador) {
//       return response.status(200).send(treinador)
//     }

//     return response.status(404).send('Treinador não encontrado.')
//   })
// }

// const add = (request, response) => {
//   const senhaCriptografada = bcrypt.hashSync(request.body.senha)
//   request.body.senha = senhaCriptografada
//   request.body.grupo = 'comum'
//   const novoTreinador = new filmesModel(request.body)

//   novoTreinador.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(201).send(novoTreinador)
//   })
// }

// const addAdmin = (request, response) => {
//   const senhaCriptografada = bcrypt.hashSync(request.body.senha)
//   request.body.senha = senhaCriptografada
//   request.body.grupo = 'admin'
//   const novoTreinador = new filmesModel(request.body)

//   novoTreinador.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(201).send(novoTreinador)
//   })
// }

// const remove = (request, response) => {
//   const id = request.params.id

//   filmesModel.findByIdAndDelete(id, (error, treinador) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     if (treinador) {
//       return response.status(200).send(id)
//     }

//     return response.status(404).send('Treinador não encontrado.')
//   })
// }

// const update = (request, response) => {
//   const id = request.params.id
//   const treinadorUpdate = request.body
//   const options = { new: true }

//   filmesModel.findByIdAndUpdate(
//     id,
//     treinadorUpdate,
//     options,
//     (error, treinador) => {
//       if (error) {
//         return response.status(500).send(error)
//       }

//       if (treinador) {
//         return response.status(200).send(treinador)
//       }

//       return response.status(404).send('Treinador não encontrado.')
//     }
//   )
// }

// const addPokemon = async (request, response) => {
//   const treinadorId = request.params.treinadorId
//   const pokemon = request.body
//   const options = { new: true }
//   const novoPokemon = new pokemonsModel(pokemon)
//   const treinador = await filmesModel.findById(treinadorId)

//   treinador.pokemons.push(novoPokemon)
//   treinador.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(201).send(treinador)
//   })
// }

// const treinarPokemon = async (request, response) => {
//   const pokemonId = request.params.pokemonId
//   const treinadorId = request.params.treinadorId
//   const treinador = await filmesModel.findById(treinadorId)
//   const pokemon = treinador.pokemons.find(pokemon => pokemon._id == pokemonId)

//   pokemon.nivel = calcularNivel(request.body.inicio, request.body.fim, pokemon.nivel)

//   return treinador.save((error) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     return response.status(200).send(treinador)
//   })
// }

// const getPokemons = async (request, response) => {
//   const treinadorId = request.params.id
//   await filmesModel.findById(treinadorId, (error, treinador) => {
//     if (error) {
//       return response.status(500).send(error)
//     }

//     if (treinador) {
//       return response.status(200).send(treinador.pokemons)
//     }

//     return response.status(404).send('Treinador não encontrado.')
//   })
// }

// const updatePokemon = (request, response) => {
//   const treinadorId = request.params.treinadorId
//   const pokemonId = request.params.pokemonId
//   const options = { new: true }

//   filmesModel.findOneAndUpdate(
//     { _id: treinadorId, 'pokemons._id': pokemonId },
//     {
//       $set: {
//         'pokemons.$.nome': request.body.nome,
//         'pokemons.$.foto': request.body.foto
//       }
//     },
//     options,
//     (error, treinador) => {
//       if (error) {
//         return response.status(500).send(error)
//       }

//       if (treinador) {
//         return response.status(200).send(treinador)
//       }

//       return response.status(404).send('Treinador não encontrado.')
//     }
//   )
// }

// const getPokemonById = async (request, response) => {
//   const treinadorId = request.params.treinadorId
//   const pokemonId = request.params.pokemonId
//   const treinador = await filmesModel.findById(treinadorId)
//   const pokemon = treinador.pokemons.find(pokemon => pokemon._id == pokemonId)

//   return response.status(200).send(pokemon)
// }

// const login = async (request, response) => {
//   const treinadorEncontrado = await filmesModel.findOne({ email: request.body.email })

//   if (treinadorEncontrado) {
//     const senhaCorreta = bcrypt.compareSync(request.body.senha, treinadorEncontrado.senha)

//     if (senhaCorreta) {
//       const token = jwt.sign(
//         {
//           grupo: treinadorEncontrado.grupo
//         },
//         SEGREDO,
//         { expiresIn: 6000 }
//       )

//       return response.status(200).send({ token })
//     }

//     return response.status(401).send('Senha incorreta.')
//   }

//   return response.status(404).send('Treinador não encontrado.')
// }

module.exports = {
  getAll,
  getById,
  add,
  update,
  remove
//   getById,
//   add,
//   addAdmin,
//   remove,
//   update,
//   addPokemon,
//   treinarPokemon,
//   getPokemons,
//   updatePokemon,
//   getPokemonById,
//   login
}