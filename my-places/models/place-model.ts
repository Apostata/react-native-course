import { MapLocation } from './../types/location';
export interface IPlace{
	id:string,
	title: string,
	imageUrl: string,
	address: string,
	location:{latitude:number, longitude:number}
}

export default class Place implements IPlace {
	id: string
	title: string
	imageUrl: string
	address: string
	location: {latitude:number, longitude:number}
	constructor(
		title:string,
		imageUrl:string, 
		location:{coords:MapLocation, address:string},
		id?:string
	){
		const {address:newAddress, coords} = location
		this.id = id || new Date().toString() + Math.random.toString()
		this.title = title,
		this.imageUrl= imageUrl,
		this.address = newAddress,
		this.location = {...coords}
	}
	
}