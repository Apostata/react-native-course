import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = () =>{
    Promise.all([
        Icon.getImageSource('md-map', 30),
        Icon.getImageSource('ios-share-alt', 30)
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
};

export default startMainTabs;