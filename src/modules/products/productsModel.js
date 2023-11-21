import { Model, DataTypes, DATE } from "sequelize"

export default class UserModel extends Model {
  // https://sequelize.org/docs/v6/core-concepts/model-basics/
  static associate(models){
    this.belongsTo(models.categories, {
      foreignKey: 'cat_id',
      targetKey: 'id'
    })
  }

  static init(sequelize){
    return super.init(
      {
        name: {
            // https://sequelize.org/docs/v6/core-concepts/model-basics/#data-types
            type: DataTypes.STRING
        },
        brand: {
          type: DataTypes.STRING
        },
        sku: {
          type: DataTypes.STRING
        },
        condition: {
          type: DataTypes.STRING
        },
        sotck: {
          type: DataTypes.INTEGER
        },
        desciption_short: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        symbol: {
          type: DataTypes.STRING
        },
        price: {
          type: DataTypes.INTEGER
        },
        price_desc: {
          type: DataTypes.INTEGER
        },
        price_desc: {
          type: DataTypes.INTEGER
        },
        image_1: {
          type: DataTypes.STRING
        },
        image_2: {
          type: DataTypes.STRING
        },
        image_3: {
          type: DataTypes.STRING
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
      },
      {
        sequelize,
        tableName: "products", // Le decimos que nuestra tabla tendrá el numbre users
        modelName: "products" // Este es el nombre del módulo (la carpeta "users")
      }
    )
  }
}