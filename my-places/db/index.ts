import * as SQLite from 'expo-sqlite'
import Place from '../models/place-model'

const database = SQLite.openDatabase('places.db')

export const init =()=>{
	const  promise = new Promise((resolve, reject)=>{
		database.transaction((tx)=>{
			tx.executeSql(`
				CREATE TABLE IF NOT EXISTS places (
					id INTEGER PRIMARY KEY NOT NULL,
					title TEXT NOT NULL,
					imageUrl TEXT NOT NULL,
					address TEXT NOT NULL,
					latitude REAL NOT NULL,
					longitude REAL NOT NULL
				)`
			,[],
			()=>{
				resolve(true)
				return true
			}, // SUCESS CALLBACK
			(_, error)=>{
				reject(error)
				return false
			}, // ERROR CALLBACK
			)
		})
	})
	return promise
}

export const insertPlace = (place:Place)=>{
	const  promise = new Promise((resolve, reject)=>{
		database.transaction((tx)=>{
			tx.executeSql(`
				INSERT INTO places (title, imageUrl, address, latitude, longitude) 
				VALUES (?, ?, ?, ?, ?)
				`,[
					place.title, 
					place.imageUrl, 
					place.address, 
					place.location.latitude, 
					place.location.longitude
				], 
				(_, result)=>{
					console.log(result)
					resolve(result)
					return true
				},
				(_, error)=>{
					resolve(error)
					return false
				},
			)
		})
	})
	return promise
}

export const fetchPlaces = ()=>{
	const  promise = new Promise((resolve, reject)=>{
		database.transaction((tx)=>{
			tx.executeSql(`
				SELECT * FROM places
			`,[],
			(_, result)=>{
				console.log(result)
				const places:Place[] =[]
				for(const row of result.rows._array){
					places.push(
						new Place(
							row.title, 
							row.imageUrl, 
							{
								coords:{
									latitude:row.latitude, 
									longitude: row.longitude
								}, 
								address: row.address
							},
							row.id
						)
					)
				}
				resolve(places)
			},
			(_, error)=>{
				reject(error)
				return false
			},
			)
		})
	})
	return promise
}

export const fetchPlaceById = (id:string)=>{
	const  promise = new Promise((resolve, reject)=>{
		database.transaction((tx)=>{
			tx.executeSql(`
				SELECT * FROM places WHERE id = ?
			`,[id],
			(_, result)=>{
				console.log(result)	
				const row = result.rows._array[0] 			
				resolve(new Place(
					row.title, 
					row.imageUrl, 
					{
						coords:{
							latitude:row.latitude, 
							longitude: row.longitude
						}, 
						address: row.address
					},
					row.id
				)
			)
			},
			(_, error)=>{
				reject(error)
				return false
			},
			)
		})
	})
	return promise
}