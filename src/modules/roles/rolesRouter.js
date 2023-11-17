import { models } from "../../infrastructure/models"
import { RoleService } from "./rolesService"
import { RoleController } from "./rolesController"

export class RoleRouter {
  constructor(){
    this.model = models.roles
    this.service = new RoleService(this.model)
    this.controller = new RoleController(this.service)
  }

  routers() {
    return [
      {
        path: "/roles",
        method: "get",
        handler: (req, res) => this.controller.getAllRoles(req, res)
      },
      {
        path: "/roles",
        method: "post",
        handler: (req, res) => this.controller.createRole(req, res)
      },
      {
        path: "/roles/:id",
        method: "get",
        handler: (req, res) => this.controller.getRoleById(req, res)
      },
      {
        path: "/roles/:id",
        method: "patch",
        handler: (req, res) => this.controller.updateRole(req, res)
      },
      {
        path: "/roles/:id",
        method: "delete",
        handler: (req, res) => this.controller.deleteRole(req, res)
      },
    ];
  }
}