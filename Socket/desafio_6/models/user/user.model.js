const Container = require('../../models/container')

class User extends Container {
  constructor (archivo) {
    super(archivo)
  }
  async getBySocketId(socketId) {
    try {
      const { data } = await this.getData()
      const foundData = data.find( element => element.socketId === socketId )
      if(!foundData)
        throw new Error('Elemento no encontrado')
      return foundData
    } catch (error) {
      console.log(`Error al obtener un usuario por su socketId: ${error.message}`)
    }
  }
}

const Users = new User('Users')

module.exports = Users