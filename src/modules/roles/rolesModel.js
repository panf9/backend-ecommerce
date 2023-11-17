import { Model, DataTypes } from "sequelize"

export default class RoleModel extends Model {
  static associate(models){
    this.hasMany(models.users, {
      foreignKey: 'rol_id'
    })
  }

  static init(sequelize){
    return super.init(
      {
        name: {
          // https://sequelize.org/docs/v7/models/data-types/
          type: DataTypes.STRING
        },
        status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true
        }
      },
      {
        sequelize,
        tableName: "roles",
        modelName: "roles"
      }
    )
  }
}