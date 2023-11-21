import { Router } from "express"
import { models } from "../../infrastructure/models"
import { ProductService } from "./productsService"
import { ProductController } from "./productsController"

class UserRouter {
  constructor(){
    this.router = Router()
    this.service = new ProductService(models)
    this.controller = new ProductController(this.service)
  }

  init() {
    // La manera global de llamar al middleware
    // this.router.use(isAutenticated)
    return this.router.
    get("/", (req, res) => this.controller.getAllProducts(req, res)).
    post("/", (req, res) => this.controller.createProduct(req, res)).
    get("/:id", (req, res) => this.controller.getProductById(req, res)).
    patch("/:id", (req, res) => this.controller.updateProduct(req, res)).
    delete("/:id", (req, res) => this.controller.deleteProduct(req, res))
  }
}

export default new UserRouter()