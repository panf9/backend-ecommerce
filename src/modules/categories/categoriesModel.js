import { Model, DataTypes } from "sequelize"

export default class CategoryModel extends Model {
  static associate(models){
    this.hasMany(models.products, {
      foreignKey: 'cat_id'
    })
  }

  static init(sequelize){
    return super.init(
      {
        name: {
          // https://sequelize.org/docs/v7/models/data-types/
          type: DataTypes.STRING
        },
        ninkename: {
          type: DataTypes.STRING
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
      },
      {
        sequelize,
        tableName: "categories",
        modelName: "categories"
      }
    )
  }
}