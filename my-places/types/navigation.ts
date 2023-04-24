import { MapLocation } from './index';
import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
export type RootStackList ={
	AllPlaces: undefined,
	AddPlace?: {
		location?:MapLocation
	},
	PlaceDetails:{
		id: string
	},
	Map: undefined
}

export type NavigationStack<RouteName extends keyof RootStackList> =  NavigationProp<RootStackList, RouteName>
export type RouteStack<RouteName extends keyof RootStackList> =  RouteProp<RootStackList, RouteName>
export type RootStack<RouteName extends keyof RootStackList> ={
	navigation: NavigationStack<RouteName>,
	route:RouteStack<RouteName>
}