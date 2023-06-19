import env from './env.js'
import { LoginController } from './controllers/login'
import { Jwt } from './utils/jwt.js'
import { Encrypt } from './utils/encrypt.js'
import BancoDeDados from './db/banco-de-dados.js'

const bancoDeDados = new BancoDeDados()
const encrypt = new Encrypt()
const jwt = new Jwt({ secret: env.JWT_SECRET })

export default (router) => {
    const controlladorLogin = new LoginController({ bancoDeDados, jwt, encrypt })
    router.post('/login', (req, res) => controlladorLogin.handle(req, res))
}