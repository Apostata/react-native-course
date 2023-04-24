
import {GOOGLE_MAP_API_KEY, MAP_INITIAL_LATITUDE, MAP_INITIAL_LONGITUDE} from "@env"

export const getMapImagePreviewUrl = (lat:number,lng:number) =>{
	const ImagePreview = `https://maps.googleapis.com/maps/api/staticmap?
	center=${lat},${lng}&
	zoom=13&size=400x200&maptype=roadmap&
	markers=color:red%7Clabel:S%7C${lat},${lng}&
	key=${GOOGLE_MAP_API_KEY}`
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