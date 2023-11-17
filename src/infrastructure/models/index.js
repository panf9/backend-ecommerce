import path from "path"
import fs from "fs"
import { Sequelize } from "sequelize"
import config from "../../config/sequelizeConfig"
import { log } from "console"

const models = {}
const sequelize = new Sequelize(config.development)

const modulesDir = path.join(__dirname, "..", "..", "modules")

const modulesFolders = fs.readdirSync(modulesDir).filter(folder => fs.statSync(path.join(modulesDir, folder)).isDirectory())

modulesFolders.forEach( folder => {
    // Obtenemos la dirección física del archivo
    const routeFile = path.join(modulesDir, folder, `${folder}Model.js`)
    // Pero nosotros necesitamos obtener la dirección de importación, para ellos aplicamos lo siguiente
    if (fs.existsSync(routeFile)){
        const importModel = require(path.resolve(routeFile)) // Con esto obtenemos la direc. de importación
        // models.push(ruteFile)
        // models[folder] = routeFile
        models[folder] = importModel.default.init(sequelize) // Con esto importamos el userModel 
    }
})

Object.values(models)
    .filter(model => typeof model.associate === 'function')
    .forEach(model => model.associate(models))

// console.log("Models ", models)
export { models, sequelize }
