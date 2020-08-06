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
git clone https://github.com/lucasfalcaoo/clima-tempo.git
```

Instale as bibliotecas utilizadas no projeto com ``yarn`` ou ``npm install``. Após a instalação, execute o comando para rodar localmente.
No caso, ou ``yarn start`` ou ``npm start``

Como o projeto foi feito com Expo, um QR Code será gerado na linha de comando. Siga as instruções de acordo com o sistema operacional:

#### Android
1) Baixe o aplicativo Expo (https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR)
2) Abra o aplicativo e clique na aba "Projects"
3) Uma das opções é "Scan QR Code", clique nela
4) Aponte a câmera do celular para o QR Code da linha de comando do seu computador
5) Prontinho, pode usar o app ;)

#### iOS
1) Baixe o aplicativo Expo (https://apps.apple.com/br/app/expo-client/id982107779)
2) Abra a câmera do celular
3) Aponte a câmera para o QR Code da linha de comando do seu computador
4) Prontinho, pode usar o app ;)

Dica: O Reactotron (https://github.com/infinitered/reactotron) também está instalado na aplicação, caso o tenha na sua máquina, basta abrir e apreciar os estados sendo mudados por lá!

### Funcionalidades
Para o aplicativo poder mostrar as informações de acordo com onde você está, aceite os pedidos para compartilhamento da localização. Isso tanto para Android, quanto para iOS!

Para que o carregamento inicial funcione também você deve estar com a internet ligada, depois disso pode desligar que as informações do tempo estão salvas e prontas para serem vistas quando quiser ;)

### Bibliotecas e pré-requisitos
#### Bibliotecas
- Expo (https://docs.expo.io/)
- React Hooks (https://pt-br.reactjs.org/docs/hooks-intro.html)
- Styled Components (https://styled-components.com/docs/basics)
- Axios (https://github.com/axios/axios)
- Redux (https://redux.js.org/introduction/getting-started)
- Redux Persist (https://github.com/rt2zz/redux-persist)
- Redux Thunk (https://github.com/reduxjs/redux-thunk)
- NetInfo (https://github.com/react-native-community/react-native-netinfo)
- AsyncStorage (https://github.com/react-native-community/async-storage)

#### Pré-requisitos
- Conexão com a internet (mas persiste as informações offline)
- NodeJS
- Yarn

### Obrigado
