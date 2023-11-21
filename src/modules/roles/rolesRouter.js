import { Router } from "express"
import { models } from "../../infrastructure/models"
import { RoleService } from "./rolesService"
import { RoleController } from "./rolesController"

class RoleRouter {
  constructor(){
    this.router = Router()
    this.model = models.roles
    this.service = new RoleService(this.model)
    this.controller = new RoleController(this.service)
  }

  init() {
    return this.router.
    get("/", (req, res) => this.controller.getAllRoles(req, res)).
    post("/",(req, res) => this.controller.createRole(req, res)).
    get("/:id", (req, res) => this.controller.getRoleById(req, res)).
    patch("/:id", (req, res) => this.controller.updateRole(req, res)).
    delete("/:id", (req, res) => this.controller.deleteRole(req, res))
  }
}

export default new RoleRouter()