
import "dotenv/config"
import "./infrastructure/models/index"
import { ExpressConfig } from "./config/expressConfig"
import { UserRouter } from './modules/users/usersRouter'
import { RoleRouter } from "./modules/roles/rolesRouter"
import { AuthRouter } from "./modules/auth/authRouter"

const express = new ExpressConfig()

const userRouter = new UserRouter()
const roleRouter = new RoleRouter()
const authRouter = new AuthRouter()

express.setRouters(userRouter.routers())
express.setRouters(roleRouter.routers())
express.setRouters(authRouter.routers())

express.listen()





/*
// Obtener los usuarios -> localhost:3000/users - GET
express.app.get('/users', (req, res) => userController.getAllUsers(req, res))


// Creación de usuarios -> localhost:3000/users - POST
express.app.post('/users', (req, res) => userController.createUser(req, res))


// Obtener usuario por id -> localhost:3000/users/:id - GET
express.app.get('/users/:id', (req, res) => userController.getUserById(req, res))


// Modificamos el usuario por su ID-> localhost:3000/users/:id - PATCH
express.app.patch('/users/:id', (req, res) => userController.updateUser(req, res))


// Eliminamos el usuario por su ID -> localhost:3000/users - DELETE
express.app.delete('/users/:id', (req, res) =>userController.deleteUser(req, res))
*/
