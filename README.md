# POC Pwa Studio

## Documentação oficial
https://developer.adobe.com/commerce/pwa-studio/

## Requisitos

1. Nodejs versão 20
2. Yarn versão 1

## Instalação

1. Rode o comando ``yarn create @magento/pwa``
2. Abrirá um prompt para responder algumas perguntas para a instalação, nas perguntas abaixo deve escolher a opção que definimos aqui:
    1. Project root directory: poc-pwa
    2. Short name of the project to put in the package.json "name" field: poc-pwa
    3. Name of the author to put in the package.json "author" field: Heitor Dias <heitor.dias@magesimple.com.br>
    4. Which template would you like to use to bootstrap pwa-2609? : @magento/venia-concept 
    5. Magento instance to use as a backend: Other
    6. URL of a Magento instance to use as a backend: https://venia.magento.com
    7. Braintree API token to use to communicate with your Braintree instance: pode deixar o padrão
    8. NPM package management client to use: yarn
    9. Install package dependencies with yarn after creating project: yes
3. Serão exibidos vários warnings que podem ser ignorados
4. Quando terminar a instalação, entrar no diretório do projeto "poc-pwa"
5. Rodar o seguinte comando: ``export NODE_OPTIONS=--openssl-legacy-provider && yarn run buildpack create-custom-origin .``
6. Modificar o arquivo package.json:
    1. Em scripts->watch, modificar para: "export NODE_OPTIONS=--openssl-legacy-provider && webpack-dev-server --progress --color --env.mode development"
6. No arquivo .env gerado, modificar as seguintes configurações
    1. MAGENTO_BACKEND_EDITION=MOS
    2. STORE_VIEW_CODE=food
7. Rodar o comando ``yarn watch``
    