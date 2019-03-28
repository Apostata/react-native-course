import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux'
import store from './src/store/configStore';

import AuthScreen from './src/Screens/Auth/Auth';
import FindPlacesScreen from './src/Screens/FindPlaces/FindPlaces';
import SharePlacesScreen from './src/Screens/SharePlaces/SharePlaces';
import PlaceDetailScreen from './src/Screens/PlaceDetail/PlaceDetail';
//registrer screens
Navigation.registerComponent('navigation.AuthScreen', () => AuthScreen, store, Provider);
Navigation.registerComponent('navigation.FindPlacesScreen', () => FindPlacesScreen, store, Provider);
Navigation.registerComponent('navigation.SharePlacesScreen', () => SharePlacesScreen, store, Provider);
Navigation.registerComponent('navigation.PlaceDetailScreen', () => PlaceDetailScreen);

//start a app Navigation
Navigation.startSingleScreenApp({
  screen:{
    screen: "navigation.AuthScreen",
    title: "Auth"
  }
});s