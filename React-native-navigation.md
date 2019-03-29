# React native navigation plugin

* Usada a versão 1.

versão 2 com problemas nas bottomTags

## Integrando ao React Native

### no arquivo index.js:
````
import App from './App';
````
### no arquivo App.js:

````
import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/Screens/Auth/Auth';

//registrer screens
Navigation.registerComponent('navigation.AuthScreen', () => AuthScreen);

//start a app Navigation
Navigation.startSingleScreenApp({
  screen:{
    screen: "navigation.AuthScreen",
    title: "Auth"
  }
});
````

## integtrando com o Redux

import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from './src/store/configStore';

import AuthScreen from './src/Screens/Auth/Auth';

//registrer screens
Navigation.registerComponent('navigation.AuthScreen', () => AuthScreen, store, Provider);

//start a app Navigation
Navigation.startSingleScreenApp({
  screen:{
    screen: "navigation.AuthScreen",
    title: "Auth"
  }
});

### Single page navigation
Navigation.startSingleScreenApp({
  screen:{
    screen: "{id unico do componenete}",
    title: "{Componente}"
  }
});

### tabs navigation (Android é obrigatório colocar icones)
Promise.all([
    sources[0] = await Icon.getImageSource('md-map', 30),
    sources[1] = await Icon.getImageSource('ios-share-alt', 30)
]).then( sources => {
    Navigation.startTabBasedApp({
        tabs:[
            {
                screen: 'navigation.FindPlacesScreen',
                label:"Find Places",
                title:"Find Places!",
                icon: sources[0]
            },
            {
                screen: 'navigation.SharePlacesScreen',
                label:"Share Places",
                title:"Share Places!",
                icon: sources[1]
            }
        ]
    });
});

## Comandos
`this.props.navigator.pop(); ` volta para ultima página navegada
`this.props.navigator.popToRoot(params={})` volta para a página inicial
é possivel até abrir um Modal com o React native navigation