import { createContext, useContext, useState } from "react";

type FavoriteContextValue={
	ids:string[],
	addFavorite: (id:string)=>void,
	removeFavorite:(id:string)=>void
}

const FavoriteContext = createContext<FavoriteContextValue>({
	ids:[],
	addFavorite:(id:string)=>{},
	removeFavorite:(is:string)=>{}
})

export const FavoriteContextProvider = ({children}:{children:JSX.Element})=>{
	const [favoriteMeals, setFavoriteMeals] = useState<string[]>([])

	const addFavorite = (id:string)=>{
		setFavoriteMeals((currentFavorites)=>[...currentFavorites, id])
	}

	const removeFavorite = (id:string)=>{
		setFavoriteMeals((currentFavorites)=>currentFavorites.filter((favorite)=>favorite !== id))
	}

	const value = {
		ids: favoriteMeals,
		addFavorite,
		removeFavorite
	}

	return <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
}

export const useContextFavorite = ()=>{
	const context = useContext(FavoriteContext)
	if(!context){
		throw new Error('Favorite context must be within a Favorite context provider!')
	}
	return context
}