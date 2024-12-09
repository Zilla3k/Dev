import env from './env.js'
import { LoginController } from './controllers/login.js' // faltante .js
import { Jwt } from './utils/jwt.js'
import { Encrypt } from './utils/encrypt.js'
import BancoDeDados from './db/banco-de-dados.js'
import { authMiddleware } from './controllers/auth.js'

const bancoDeDados = new BancoDeDados()
const encrypt = new Encrypt()
const jwt = new Jwt({ secret: env.JWT_SECRET })

export default (router) => {
    const controlladorLogin = new LoginController({ bancoDeDados, jwt, encrypt })
    router.post('/login',(req, res) => controlladorLogin.handle(req, res));

    router.get('/produtos', authMiddleware(jwt), async (req, res) => {
        try {
            const produtos = await bancoDeDados.get('produtos')
            res.json(produtos)
        } catch (err) {
            res.status(500).json({ erro: 'Erro ao obter produtos' })
        }
    })
}