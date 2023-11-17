import { models } from "../../infrastructure/models"
import { AuthService } from "./authService"
import { AuthController } from "./authController"

export class AuthRouter {
    constructor(){
        this.model = models.users
        this.service = new AuthService(this.model)
        this.controller = new AuthController(this.service)
    }

    routers() {
        return [
            {
                path: "/auth/signin",
                method: "post",
                handler: (req, res) => this.controller.login(req, res)
            }
        ]
    }
}