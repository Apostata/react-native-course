import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
export type RootStackList ={
	AllPlaces: undefined,
	AddPlace: undefined,
	PlaceDetails:{
		id: string
	}
}

export type NavigationStack<RouteName extends keyof RootStackList> =  NavigationProp<RootStackList, RouteName>
export type RouteStack<RouteName extends keyof RootStackList> =  RouteProp<RootStackList, RouteName>
export type RootStack<RouteName extends keyof RootStackList> ={
	navigation: NavigationStack<RouteName>,
	route:RouteStack<RouteName>
}