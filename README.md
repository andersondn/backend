# Backend do desafio IPDV

## Live preview
Caso tenha algum problema na instalação do projeto, estou disponibilizando um link onde vocês poderão testar tanto o back quanto o front.

[https://ipdv-frontend.vercel.app](https://ipdv-frontend.vercel.app`)

### Login: 
```
email: admin@admin.com
senha: 123456
```


## Instalação e execução

```sh
yarn install
yarn start
```
ou 

```sh
yarn install
yarn build
yarn server
```

*A porta padrão está definida para ```4000``` mas pode ser alterada no arquivo ```.env```

## Banco de dados
Esse projeto está utilizando o SQLITE, seu schema foi gerado através de migrations localizadas no diretório:
```/src/src/database/migrations```
O arquivo do SQLITE pode ser consultado em: ```/src/src/database/db.sqlite3```

## Libs utilizadas:
 - Express
 - Celebrate
 - bcrypt
 - cors
 - dotenv
 - jsonwebtoken
 - knex
 - sqlite3
 - tsyringe