export interface IPlace{
	id:string,
	title: string,
	imageUrl: string,
	address: string,
	location:string
}

export default class Place implements IPlace {
	id: string
	title: string
	imageUrl: string
	address: string
	location: string
	constructor(
		title:string,
		imageUrl:string, 
		address:string, 
		location:string,
	){
		this.id = new Date().toString() + Math.random.toString()
		this.title = title,
		this.imageUrl= imageUrl,
		this.address = address,
		this.location = location
	}
	
}