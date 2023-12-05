import { Router } from "express"
import { models } from "../../infrastructure/models"
import { OrderService } from "./ordersService"
// import { OrderPasswordService } from "./ordersPasswordService"
import { OrderController } from "./ordersController"
import { isAutenticated } from "../../middleware/autenticationMiddleware"

class OrderRouter {
  constructor(){
    this.router = Router()
    // this.servicePassword = new UserPasswordService()
    this.service = new OrderService(models)
    // this.service = new OrderService(models, this.servicePassword)
    this.controller = new OrderController(this.service)
  }

  init() {
    // La manera global de llamar al middleware
    this.router.use(isAutenticated)
    return this.router.
    get("/", (req, res) => this.controller.getAllOrders(req, res)).
    post("/", (req, res) => this.controller.createOrder(req, res)).
    get("/:user_id", (req, res) => this.controller.getOrderByUserId(req, res)).
    get("/:id/:user_id", (req, res) => this.controller.getOrderById(req, res)).
    patch("/:id", (req, res) => this.controller.updateOrder(req, res)).
    delete("/:id", (req, res) => this.controller.deleteOrder(req, res))
  }
}

export default new OrderRouter()