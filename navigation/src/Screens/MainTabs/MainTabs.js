import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = async () =>{
    var sources = []
    // Promise.all([
        sources[0] = await Icon.getImageSource('md-map', 30),
        sources[1] = await Icon.getImageSource('ios-share-alt', 30)
    // ]).then( sources => {
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
    // });
};

export default startMainTabs;