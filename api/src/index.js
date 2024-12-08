import dotenv from 'dotenv'
import express, { Router } from 'express'
import BancoDeDados from './db/banco-de-dados.js'
import bodyParser from 'body-parser'
import env from './env.js'
import configRotas from './rotas.js'

// Cross-Origin Request Blocked
import cors from 'cors'

dotenv.config()
BancoDeDados
    .init()
    .then(() => {
        console.log('🚀 Banco de dados inicializado com sucesso!')
        const BASE_API = '/api/v1'
        const router = Router()
        const porta = env.PORTA
        const app = express()
        app.use(cors({origin: 'http://localhost:5173'}))
        app.use(bodyParser.json())
        app.use(BASE_API, router)
        configRotas(router)
        app.listen(porta, () => console.log(`🚀 Servidor rodando na porta ${porta}`))
    })
    .catch(err => console.log('❌ Erro ao inicializar o banco de dados:', err))