import { OrderInterface } from "./ordersInterface"
export class OrderService extends OrderInterface {
  constructor(models) {
  // constructor(models, passwordService) {
    super()
    this.orderModel = models.orders
    this.userModel = models.users
    // this.passwordService = passwordService
    // Si queremos agregas más solo debenos de declararlos aquí. por ejemplos roles
  }

  // sequelize.org/docs/v6/core-concepts/model-querying-finders/
  async getAll(){
    return await this.orderModel.findAll({
      attributes: {
        exclude: ["password"]
      },
      where:{
        status: true
      },
      order: [['id', 'ASC']],
      include: {
        model: this.userModel,
        attributes:{
          exclude: ["status", "createdAt","updatedAt", "password"]
        }
      }
    })
  }

  async getById(id, user_id){
    return await this.orderModel.findOne({where: {id: id, user_id: user_id}}) // También puede ir where: {id = id}
  }
 
  async getByUserId(user_id){
    return await this.orderModel.findAll({where: {user_id: user_id}}) // También puede ir where: {id = id}
  }

  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  async create(body){
    return await this.orderModel.create(body)
  }

  async update(id, body){
    const order = await this.getById(id)
    if (order){
      await order.update(body)
    }
    return order
  }

  async delete(id){
    const order = await this.getById(id)
    if (order){
      await order.destroy()
    }
    return order
  }
}