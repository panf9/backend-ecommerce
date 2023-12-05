export class ProductController{
    // Creamos el constructor de la clase
    constructor(productsService) {
        this.productsService = productsService
    }
  
    // Creamos los métodos de la clase
    async getAllProducts(req, res){
        return res.json( await this.productsService.getAll())
    }
  
    async getProductById(req, res){
      // console.log(req.params);
      const productID = req.params.id
      const product = await this.productsService.getById(parseInt(productID))
  
      if (!product){
        return res.status(404).json({'message': 'Producto no encontrado'})
      } 
      return res.json(product)
    }
  
    async createProduct(req, res){
      const product = await this.productsService.create(req.body)
      res.status(201).json(product)
    }
  
    async updateProduct(req, res){
      const productID = req.params.id
      const product = await this.productsService.update(parseInt(productID), req.body)
  
      if (!product) return res.status(404).json({'message': 'Producto no encontrado'})
      // Vamos a reemplazar el nombre con lo q nos llega en e body sino lo dejamos con el mismo nombre
      res.json(product)
    }

    async deleteProduct(req, res){
      const productID = req.params.id
      const deleted = await this.productsService.delete(parseInt(productID))
      if (!deleted){
        return res.status(404).json({'message': 'Producto no encontrado'})
      }
      res.status(404).send("")
    }
  }