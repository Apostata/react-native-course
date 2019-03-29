import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = async () =>{
    var sources = []
    // Promise.all([
        sources[0] = await Icon.getImageSource('md-map', 30),
        sources[1] = await Icon.getImageSource('ios-share-alt', 30)
        sources[2] = await Icon.getImageSource('ios-menu', 30)
    // ]).then( sources => {
        Navigation.startTabBasedApp({
            tabs:[
                {
                    screen: 'navigation.FindPlacesScreen',
                    label:"Find Places",
                    title:"Find Places!",
                    icon: sources[0],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                },
                {
                    screen: 'navigation.SharePlacesScreen',
                    label:"Share Places",
                    title:"Share Places!",
                    icon: sources[1],
                    navigatorButtons:{
                        leftButtons:[
                            {
                                icon: sources[2],
                                title: 'Menu',
                                id: 'sideDrawerToggle'
                            }
                        ]
                    }
                }
            ],
            drawer:{
                left:{
                    screen: "navigation.SideDrawerScreen"
                }
            }
        });
    // });
};

export default startMainTabs;