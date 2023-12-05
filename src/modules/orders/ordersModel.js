import { Model, DataTypes, DATE } from "sequelize"

export default class OrderModel extends Model {
  // https://sequelize.org/docs/v6/core-concepts/model-basics/
  static associate(models){
    this.belongsTo(models.users, {
      foreignKey: 'user_id',
      targetKey: 'id'
    })
  }

  static init(sequelize){
    return super.init(
      {
        order: {
            // https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
            type: DataTypes.TEXT
        },
        user_id: {
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
        tableName: "orders", // Le decimos que nuestra tabla tendrá el numbre orders
        modelName: "orders" // Este es el nombre del módulo (la carpeta "orders")
      }
    )
  }
}