# Clima Tempo
Seja bem-vindo ao Clima Tempo! 
Esse projeto foi criado sem fins comerciais, apenas para testar a habilidade com desenvolvimento de aplicações React Native.
O desafio foi criar um aplicativo que mostre o clima de acordo com a geolocalização e persista a informação offline.

### Arquitetura
A arquitetura é baseada no isolamento das ações e das lógicas por página e/ou componente, facilitando a busca e manutenção no projeto.

```
 App.js
  /src
    /pages
      /Home
        /components
          index.js
          styles.js
          Home.js
        /store
          reducer.js
          constants.js
          actions.js
          services.js
          thunk.js
    /components
      /Container
        Container.js
        styles.js
        index.js
```

### Desenvolvimento / Análise
Para iniciar o desenvolvimento ou análise, é necessário clonar o projeto do GitHub em um diretório de sua preferência. 

```
cd "diretório que você preferir"
git clone https://github.com/lucasfalcaoo/fake-youtube.git
```

Instale as bibliotecas utilizadas no projeto com ``yarn`` ou ``npm install``. Após a instalação, execute o comando para rodar localmente.
No caso, ou ``yarn start`` ou ``npm start``

Dica: Para ficar atento a todas as ações executadas na página, inspecione o navegador e vá até a aba "Console"!

### Funcionalidades
Para ter uma experiência personalizada o usuário deverá entrar com sua conta Google. Como o projeto não foi verificado pelo Google (afinal é só um teste) é necessário executar um pequeno passo-a-passo:

Passo 1:
Ao surgir o aviso de segurança, basta clicar no botão "Avançado", como mostra a imagem:

![Primeiro passo](https://github.com/lucasfalcaoo/fake-youtube/blob/master/src/assets/first-step.jpeg)

Passo 2:
Em seguida clique em "Acessar Fake Youtube (não seguro)", veja abaixo:

![Primeiro passo](https://github.com/lucasfalcaoo/fake-youtube/blob/master/src/assets/second-step.jpeg)

Passo 3:
Por fim, aceite todas as permissões e seu acesso está liberado :)

### Teste unitário
Os componentes possuem configurações para testes unitários através do Jest + Enzyme, basta executar o comando ``yarn test`` ou ``npm test``

### Bibliotecas e pré-requisitos
#### Bibliotecas
- React Hooks (https://pt-br.reactjs.org/docs/hooks-intro.html)
- React Icons (https://react-icons.github.io/react-icons/)
- React Google Login (https://github.com/anthonyjgrove/react-google-login)
- Typescript (https://www.typescriptlang.org/docs/handbook/react.html)
- SASS (https://create-react-app.dev/docs/adding-a-sass-stylesheet/)
- Axios (https://github.com/axios/axios)
- Enzyme (https://enzymejs.github.io/enzyme/)
- Moment (https://momentjs.com/docs/)

#### Pré-requisitos
- Conexão com a internet (é claro)
- NodeJS
- Yarn
- Algum editor de texto, com ESLint e Prettier configurados

### Site em produção
Para acessar o aplicativo em ambiente de produção acesse: https://vibrant-jepsen-a36e52.netlify.app/

### Obrigado
