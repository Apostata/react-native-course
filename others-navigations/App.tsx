import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';
import {Ionicons} from '@expo/vector-icons'
import { rootDrawerList } from './types/navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Drawer = createDrawerNavigator<rootDrawerList>()
const BottomTab = createBottomTabNavigator<rootDrawerList>()

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName='User' screenOptions={{
         headerStyle:{ backgroundColor:'#3c0a6b'},
         headerTintColor:'white',
        drawerActiveBackgroundColor:'#f0e1ff',
        drawerActiveTintColor: '#3c0a6b',
        drawerStyle: {backgroundColor:'#ccc'}
      }}>
        <Drawer.Screen  name='Welcome' component={WelcomeScreen} options={{
          drawerLabel:'Welcome Screen',
          drawerIcon: ({color, size})=><Ionicons name='home' color={color} size={size}/>
        }}/>
        <Drawer.Screen  name='User' component={UserScreen} options={{
          drawerLabel:'Welcome Screen',
          drawerIcon: ({color, size})=><Ionicons name='person' color={color} size={size}/>
        }}/>
      </Drawer.Navigator> */}
      <BottomTab.Navigator initialRouteName='User' screenOptions={{
          headerStyle:{ backgroundColor:'#3c0a6b'},
          headerTintColor:'white',
          tabBarActiveTintColor:'#3c0a6b'
      }}>
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} options={{
          tabBarIcon:({color, size})=><Ionicons name='home' color={color} size={size}/>
        }}/>
        <BottomTab.Screen name='User' component={UserScreen} options={{
          tabBarIcon:({color, size})=><Ionicons name='person' color={color} size={size}/>
        }}/>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
