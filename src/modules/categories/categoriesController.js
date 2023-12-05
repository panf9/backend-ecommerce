export class CategoryController {
    constructor(categoryService){
      this.categoryService = categoryService
    }
  
    // AHora vamos a crear todos nuestros métods.
    async getAllCategories(req, res){
      return res.json(await this.categoryService.getAll())
    }
  
    async getCategoryById(req, res){
      const categoryID = req.params.id 
      const category = await this.categoryService.getById(parseInt(categoryID))
  
      if ( !category ){
        return res.status(404).json({'message': 'Categoría no encontrado'})
      }
      return res.json(category)
    }
  
    async createCategory(req, res){
      const category = await this.categoryService.create(req.body)
      res.status(201).json(category)
    }
  
    async updateCategory(req, res){
      const categoryID = req.params.id 
      const category = await this.categoryService.update(parseInt(categoryID), req.body)
  
      if ( !category ){
        return res.status(404).json({'message': 'Categoría no encontrado'})
      }
  
      res.json(category)
    }
  
    async deleteCategory(req, res){
      const categoryID = req.params.id 
      const deleted = await this.categoryService.delete(parseInt(categoryID)) 
  
      if ( !deleted ){
        return res.status(404).json({'message': 'Category no encontrado'})
      }
      res.status(404).send("")
    }
  }