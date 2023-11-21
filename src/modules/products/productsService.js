import { ProductInterface } from "./productsInterface"
export class ProductService extends ProductInterface {
  constructor(models) {
    super()
    this.productModel = models.products
    this.categoryModel = models.categories
    // Si queremos agregas más solo debenos de declararlos aquí. por ejemplos roles
  }

  // sequelize.org/docs/v6/core-concepts/model-querying-finders/
  async getAll(){
    return await this.productModel.findAll({
      where:{
        status: true
      },
      order: [['id', 'ASC']],
      include: {
        model: this.categoryModel,
        attributes:{
          exclude: ["status", "createdAt","updatedAt"]
        }
      }
    })
  }

  async getById(id){
    return await this.productModel.findOne({where: id }) // También puede ir where: {id = id}
  }

  // https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
  async create(body){
    return await this.productModel.create(body)
  }

  async update(id, body){
    const product = await this.getById(id)
    if (product){
      await product.update(body)
    }
    return product
  }

  async delete(id){
    const product = await this.getById(id)
    if (product){
      await product.destroy()
    }
    return product
  }
}