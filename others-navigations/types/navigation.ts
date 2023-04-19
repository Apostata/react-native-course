import { NavigationProp, RouteProp, DrawerActionHelpers } from "@react-navigation/native";

export type rootDrawerList = {
	Welcome: undefined;
	User: undefined
  }
  
export type routeRootDrawer<RouteName extends keyof rootDrawerList> =  RouteProp<rootDrawerList, RouteName>
export type navigationRootDrawer<RouteName extends keyof rootDrawerList> = NavigationProp<rootDrawerList, RouteName>

export type RootDrawer<RouteName extends keyof rootDrawerList> = {
	navigation:navigationRootDrawer<RouteName>,
	route: routeRootDrawer< RouteName>
}
