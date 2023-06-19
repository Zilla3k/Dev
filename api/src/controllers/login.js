export class LoginController {
    constructor({ bancoDeDados, jwt, encrypt }) {
        this.bancoDeDados = bancoDeDados
        this.jwt = jwt
        this.encrypt = encrypt
    }

    async handle(request, response) {
        const { email, senha } = request.body

        if (!email || !senha) {
            return response.status(400).json({ erro: 'Email e senha são obrigatórios' })
        }

        const usuario = await this.bancoDeDados.first('usuarios', { email })

        if (!usuario) {
            return response.status(401).json({ erro: 'Usuário não encontrado' })
        }

        const senhaValida = await this.encrypt.comparePassword(senha, usuario.password)

        if (!senhaValida) {
            return response.status(401).json({ erro: 'Senha inválida' })
        }

        const token = this.jwt.sign({ id: usuario.id })

        return response.status(200).json({ token })
    }
}