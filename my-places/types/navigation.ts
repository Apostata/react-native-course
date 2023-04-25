import { RouteProp } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import Place from '../models/place-model';
import { MapLocation } from './location';
export type RootStackList ={
	AllPlaces?: {
		place?:Place
	},
	AddPlace?: {
		location?:MapLocation
	},
	PlaceDetails:{
		id: string
	},
	Map?: {
		location?:MapLocation
	}
}

export type NavigationStack<RouteName extends keyof RootStackList> =  NavigationProp<RootStackList, RouteName>
export type RouteStack<RouteName extends keyof RootStackList> =  RouteProp<RootStackList, RouteName>
export type RootStack<RouteName extends keyof RootStackList> ={
	navigation: NavigationStack<RouteName>,
	route:RouteStack<RouteName>
}