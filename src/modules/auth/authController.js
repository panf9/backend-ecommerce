export class AuthController {
  constructor(authService){
    this.authService = authService
  }

  async login(req, res){
    const user = await this.authService.signIn(req.body)
    // Validar que el usuario exista y esté activo
    if (!user){
      return res.status(404).json({'message': 'Usuario no encontrado'})
    }
    // Validar la contraseña
    res.json({})
  }
}