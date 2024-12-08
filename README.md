# Teste para desenvolvedores

A empresa TechService está desenvolvendo um sistema Sass, e para a próxima Sprint o seu gestor te apresentou as seguintes atividades:

## Hotfix

### #20231AH Api não está inicializando

[✔] Por algum motivo a api não está funcionando, toda vez que inicia, ela crash

### #20232FH Tela de Login não está funciando

[✔] Até o dia de ontem o login estava funcionando, mas por algum motivo está dando erro 400 no console.

## Fix

### #20233FF

[✔] Quando o usuário digita o texto do input está cinza, porém deve ser branco.

## Features

### #20234AF Criar rota para listar todos os produtos

Deve criar na api uma rota GET para listar todos os itens com filtros, como data de criação, nome, preço e afins.

- A rota deve ser protegida. Apenas usuários autenticados podem obter os itens.

### #20235FF: Tela para listar produtos

Listar todos os produtos que a empresa oferece na tela **dashboard** "/dashboad" em uma tabela, com suas respectivas informações.

- A tela deve conter um NavBar
- O seu gestor te indicou usar o AgGrid ou o @mui/x-data-grid para tabelar os itens. Mas a escolha é sua.

### #20236FF: Logout

Implementar Logout para usuário

___

## Configurações do .env

SECRET='CHAVE_SECRETA'
PORTA=3000

## Observações

- Você deve usar os arquivos json como base de dados que estão na pasta [/db](./db).
- Você pode verificar a implementação do banco de dados [aqui](./api/src/db/banco-de-dados.js).
- Caso seja necessário fique a vontade para implementar mais metódos.
- Deve usar commits semântivos.

## Lembre-se que tudo será avaliado
