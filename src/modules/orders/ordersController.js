export class OrderController{
  // Creamos el constructor de la clase
  constructor(ordersService) {
      this.orderService = ordersService
  }

  // Creamos los métodos de la clase
  async getAllOrders(req, res){
    console.log(req);
    return res.json( await this.orderService.getAll())
  }

  async getOrderByUserId(req, res){
    // console.log(req.params);
    const userID = req.params.user_id
    const order = await this.orderService.getByUserId(parseInt(userID))

    if (!order){
      return res.status(404).json({'message': 'Pedido no encontrada'})
    } 
    return res.json(order)
  }

  async getOrderById(req, res){
    console.log(req.params);
    const orderID = req.params.id
    const userID = req.params.user_id
    const order = await this.orderService.getById(parseInt(orderID), parseInt(userID))

    if (!order){
      return res.status(404).json({'message': 'Pedido no encontrada'})
    } 
    return res.json(order)
  }

  async createOrder(req, res){
    console.log(req);
    const order = await this.orderService.create(req.body)
    res.status(201).json(order)
  }

  async updateOrder(req, res){
    const orderID = req.params.id
    const order = await this.orderService.update(parseInt(orderID), req.body)

    if (!order) return res.status(404).json({'message': 'Pedido no encontrada'})
    // Vamos a reemplazar el nombre con lo q nos llega en e body sino lo dejamos con el mismo nombre
    res.json(order)
  }

  async deleteOrder(req, res){
    const orderID = req.params.id
    const deleted = await this.orderService.delete(parseInt(orderID))
    if (!deleted){
      return res.status(404).json({'message': 'Order no encontrado'})
    }
    res.status(404).send("")
  }
}
