import { fileURLToPath } from 'node:url'
import { readFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const currentFileUrl = import.meta.url
const currentFilePath = fileURLToPath(currentFileUrl)
const currentDirectory = dirname(currentFilePath)
const pathdb = join(currentDirectory, '../../../db')

export default class BancoDeDados {
    static dictionary = {}

    static async init() {
        this.usuarios = JSON.parse(await readFile(`${pathdb}/usuarios.json`, 'utf-8')) // `${PATHNORMALIZED}/db/usuarios.json`
        this.produtos = JSON.parse(await readFile(`${pathdb}/produtos.json`, 'utf-8'))

        if (!this.usuarios) {
            this.usuarios = []
        }

        if (!this.produtos) {
            this.produtos = []
        }

        BancoDeDados.dictionary = {
            usuarios: this.usuarios,
            produtos: this.produtos
        }

        return this
    }

    async start() {
        if (!this.usuarios || !this.produtos) {
            await BancoDeDados.init()
        }
    }

    async get(table) {
        await this.start()
        return BancoDeDados.dictionary[table]
    }

    async where(table, where) {
        await this.start()
        const data = BancoDeDados.dictionary[table]
        const keys = Object.keys(where)

        return data.filter(item => {
            for (const key of keys) {
                if (item[key] !== where[key]) {
                    return false
                }
            }

            return true
        })
    }

    async first(table, where) {
        await this.start()
        const data = await this.where(table, where)

        return data[0]
    }
}
