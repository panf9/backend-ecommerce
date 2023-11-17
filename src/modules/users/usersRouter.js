import { models } from "../../infrastructure/models"
import { UserService } from "./usersService"
import { UserPasswordService } from "./usersPasswordService"
import { UserController } from "./usersController"

export class UserRouter {
    constructor(){
        this.servicePassword = new UserPasswordService()
        this.service = new UserService(models, this.servicePassword)
        this.controller = new UserController(this.service)
    }

    routers() {
        return [
            {
                path: "/users",
                method: "get",
                handler: (req, res) => this.controller.getAllUsers(req, res)
            },
            {
                path: "/users",
                method: "post",
                handler: (req, res) => this.controller.createUser(req, res)
            },
            {
                path: "/users/:id",
                method: "get",
                handler: (req, res) => this.controller.getUserById(req, res)
            },
            {
                path: "/users/:id",
                method: "patch",
                handler: (req, res) => this.controller.updateUser(req, res)
            },
            {
                path: "/users/:id",
                method: "delete",
                handler: (req, res) =>this.controller.deleteUser(req, res)
            }
        ]
    }

}