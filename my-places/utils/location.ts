import { GeoCodeResponse } from './../types/location';

import {GCP_KEY, MAP_INITIAL_LATITUDE, MAP_INITIAL_LONGITUDE} from "@env"

export const getMapImagePreviewUrl = (lat:number,lng:number) =>{
	const ImagePreview = `https://maps.googleapis.com/maps/api/staticmap?
	center=${lat},${lng}&
	zoom=13&size=400x200&maptype=roadmap&
	markers=color:red%7Clabel:S%7C${lat},${lng}&
	key=${GCP_KEY}`
	return ImagePreview
}

export const getInitialCoords = ()=>{
	const latitude = +`${MAP_INITIAL_LATITUDE}`
	const longitude = +`${MAP_INITIAL_LONGITUDE}`
	return {
		latitude: latitude,
		longitude: longitude
	}
}

export const getAddressByCoors = async (lat:number, lng:number) :Promise<string>=> {
	const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GCP_KEY}`
	const response = await fetch(url)

	if(!response.ok) {
		throw new Error('Failed to fetch address!')
	}
	const data :GeoCodeResponse= await response.json()
	const address = data.results[0].formatted_address
	return address
}