// min 1:45:00
import { AuthorizationNotFound } from "../modules/auth/AuthException"
import { verifyToken } from "../utils/jwtUtil"

export const isAutenticated = (req, res, next) => {
  try {
    // Leemos el Bearer enviado desde el thunderclient
    const { authorization } = req.headers
    // console.log("Autorización: ", req.headers);
    if (!authorization) {
      throw new AuthorizationNotFound
    }
    const accessToken = authorization.split(" ")[1]
    console.log("Access Token",accessToken);
    verifyToken(accessToken)
    next()
  } catch(e){
    return res.status(e.code || 403).json({message: e.message})
  }
}

// 1º isAutenticated <- Request
// 2º Funcionalidad de la ruta <- Request