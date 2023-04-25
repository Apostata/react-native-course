export type GeoCodeResponse = {
	results : [
	   {
		  formatted_address : string
	   }
	   
	],
}

export type MapLocation = {
	latitude: number,
	longitude:number
}

export type GeolocationType ={
	coords: MapLocation,
	address:string
}