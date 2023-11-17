export default {
    development: {
        username: process.env.DB_USER,
        password: process.env.BD_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: process.env.DB_DRIVER,
        timezone: process.env.TZ, //Configuramos la zona horaria
        define: { // aquí habilitamos la opción de underscored y los campos de auditoría con un formato diferente.
            underscored: true,
            timestamps: true, 
            createAd: "created_at", //Aquí renombramos las formas para crear los nombres en mi tabla a nuestar manera
            updateAt: "updated_at"
        }
    }
}