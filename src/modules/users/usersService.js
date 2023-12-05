import { userInterface } from "./usersInterface"
export class UserService extends userInterface {
  constructor(models, passwordService) {
    super()
    this.userModel = models.users
    this.roleModel = models.roles
    this.passwordService = passwordService
    // Si queremos agregas más solo debenos de declararlos aquí. por ejemplos roles
  }

  // sequelize.org/docs/v6/core-concepts/model-querying-finders/
  async getAll(){
    return await this.userModel.findAll({
      where:{
        status: true
      },
      order: [['id', 'ASC']],
      include: {
        model: this.roleModel,
        attributes:{
          exclude: ["status", "createdAt","updatedAt"]
        }
      }
    })
  }

  async getById(id){
    return await this.userModel.findOne({where: id }) // También puede ir where: {id = id}
  }

  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  async create(body){
    const hashPassword = await this.passwordService.hashPassword(body.password)
    body.password = hashPassword
    return await this.userModel.create(body)
  }

  async update(id, body){
    const user = await this.getById(id)
    if (user){
      if ('password' in body ){
        // Encriptar la contraseña
        const hashPassword = await this.passwordService.hashPassword(body.password)
        body.password = hashPassword
      }
      await user.update(body)
    }
    return user
  }

  async delete(id){
    const user = await this.getById(id)
    if (user){
      await user.destroy()
    }
    return user
  }
}