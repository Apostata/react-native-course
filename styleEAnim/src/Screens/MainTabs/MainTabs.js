import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startMainTabs = async () =>{
    var sources = []
    // Promise.all([
        sources[0] = await Icon.getImageSource(Platform.OS === 'android' ? 'md-map' : 'ios-map', 30),
        sources[1] = await Icon.getImageSource(Platform.OS === 'android' ? 'md-share-alt' : 'ios-share', 30)
        sources[2] = await Icon.getImageSource(Platform.OS === 'android' ? 'md-menu' : 'ios-menu', 30)
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
                    },
                }
            ],
            tabsStyle:{//ios
                tabBarSelectedButtonColor: "orange"
            },
            
            drawer:{
                left:{
                    screen: "navigation.SideDrawerScreen"
                }
            },
            appStyle:{//android
                tabBarSelectedButtonColor: "orange"
            }
        });
    // });
};

export default startMainTabs;