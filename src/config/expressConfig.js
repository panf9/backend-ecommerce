import express from "express"
import bodyParser from "body-parser"

export class ExpressConfig {
    constructor() {
        this.port = process.env.PORT
        this.app = express()
        this._setMiddleware()
    }

    _setMiddleware(){
        this.app.use(bodyParser.json())
    }

    // setRouters(routers) {
    //     routers.forEach(router => {
    //         this.app[router.method](router.path, router.handler)
    //     });
    // }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Express is running on ${this.port}`);
        })
    }
}