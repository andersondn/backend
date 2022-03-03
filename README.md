# Backend do desafio IPDV


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