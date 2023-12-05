import { Model, DataTypes, DATE } from "sequelize"

export default class UserModel extends Model {
  // https://sequelize.org/docs/v6/core-concepts/model-basics/
  static associate(models){
    this.belongsTo(models.roles, {
      foreignKey: 'rol_id',
      targetKey: 'id'
    })
    this.hasMany(models.orders, {
      foreignKey: 'user_id'
    })
  }

  static init(sequelize){
    return super.init(
      {
        name: {
            // https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
            type: DataTypes.STRING
        },
        last_name: {
          type: DataTypes.STRING
        },
        username: {
          type: DataTypes.STRING
        },
        email: {
          type: DataTypes.STRING
        },
        password: {
          type: DataTypes.STRING
        },
        rol_id: {
          type: DataTypes.INTEGER,
          default: 3
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
      },
      {
        sequelize,
        tableName: "users", // Le decimos que nuestra tabla tendrá el numbre users
        modelName: "users" // Este es el nombre del módulo (la carpeta "users")
      }
    )
  }
}