import { AuthInterface } from "./authInterface";

export class AuthService extends AuthInterface{
  constructor(userModel, passwordService, userService){
    super()
    this.userModel = userModel
    this.passwordService = passwordService
    this.userService = userService
  }

  // Creamos un método interno
  async _getByUsername(email){
    return await this.userModel.findOne({where: {email: email} })
  }

  async signIn(body){
    const { email, password } = body
    const user = await this._getByUsername(email)
    if (user){
      const validatePassword = await this.passwordService.validatePassword(user.password, password)
      if (!validatePassword){
        return false
      }
    }
    return user

  }

  async signUp(body) {
    return await this.userService.create(body)
  }

  async refreshToken(identity) {
    return await this.userService.getById(identity)
  }

  resetPassword(body){}
}
