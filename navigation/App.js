import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/Screens/Auth/Auth';
import FindPlacesScreen from './src/Screens/FindPlaces/FindPlaces';
import SharePlacesScreen from './src/Screens/SharePlaces/SharePlaces';
//registrer screens
Navigation.registerComponent('navigation.AuthScreen', () => AuthScreen);
Navigation.registerComponent('navigation.FindPlacesScreen', () => FindPlacesScreen);
Navigation.registerComponent('navigation.SharePlacesScreen', () => SharePlacesScreen);

//start a app Navigation
Navigation.startSingleScreenApp({
  screen:{
    screen: "navigation.AuthScreen",
    title: "Auth"
  }
});