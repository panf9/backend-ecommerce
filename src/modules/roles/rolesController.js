export class RoleController {
  constructor(roleService){
    this.roleService = roleService
  }

  // AHora vamos a crear todos nuestros métods.
  async getAllRoles(req, res){
    return res.json(await this.roleService.getAll())
  }

  async getRoleById(req, res){
    const roleID = req.params.id 
    const role = await this.roleService.getById(parseInt(roleID))

    if ( !role ){
      return res.status(404).json({'message': 'Rol no encontrado'})
    }
    return res.json(role)
  }

  async createRole(req, res){
    const role = await this.roleService.create(req.body)
    res.status(201).json(role)
  }

  async updateRole(req, res){
    const roleID = req.params.id 
    const role = await this.roleService.update(parseInt(roleID), req.body)

    if ( !role ){
      return res.status(404).json({'message': 'Rol no encontrado'})
    }

    res.json(role)
  }

  async deleteRole(req, res){
    const roleID = req.params.id 
    const deleted = await this.roleService.delete(parseInt(roleID)) 

    if ( !deleted ){
      return res.status(404).json({'message': 'Role no encontrado'})
    }
    res.status(404).send("")
  }

}