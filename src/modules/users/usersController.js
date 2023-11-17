export class UserController{
  // Creamos el constructor de la clase
  constructor(userService) {
      this.userService = userService
  }

  // Creamos los métodos de la clase
  async getAllUsers(req, res){
      return res.json( await this.userService.getAll())
  }

  async getUserById(req, res){
    // console.log(req.params);
    const userID = req.params.id
    const user = await this.userService.getById(parseInt(userID))

    if (!user){
      return res.status(404).json({'message': 'Usuario no encontrado'})
    } 
    return res.json(user)
  }

  async createUser(req, res){
    const user = await this.userService.create(req.body)
    res.status(201).json(user)
  }

  async updateUser(req, res){
    const userID = req.params.id
    const user = await this.userService.update(parseInt(userID), req.body)

    if (!user) return res.status(404).json({'message': 'Usuario no encontrado'})
    // Vamos a reemplazar el nombre con lo q nos llega en e body sino lo dejamos con el mismo nombre
    res.json(user)
  }

  async deleteUser(req, res){
    const userID = req.params.id
    const deleted = await this.userService.delete(parseInt(userID))
    if (!deleted){
      return res.status(404).json({'message': 'Usuario no encontrado'})
    }
    res.status(404).send("")
  }
}

/**
 * export { userController }
 * import { userController } from "./userController.js"
 * ----------------------------------------------------
 * 
 * export default userController
 * import userC from "./userController.js"
 * 
 * const userController = new userC()
 * ----------------------------------------
 * 
 * export default new userController
 * import userController from "./userController.js"
 * 
 * userController.createUSer()
 * 
*/
// export default new userController