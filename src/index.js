
import "dotenv/config"
import "./infrastructure/models/index"
import routes from  "./infrastructure/routers"
import { ExpressConfig } from "./config/expressConfig"

const express = new ExpressConfig()
routes(express.app)

express.listen()

