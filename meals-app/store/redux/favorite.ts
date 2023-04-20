import { createSlice } from "@reduxjs/toolkit";

type FavoriteState ={
	ids:string[]
}

type Action ={type:string, payload:string}

type FavoriteActions={
	addFavorite:(state:FavoriteState, action:Action)=>void
}

const favoriteSlice = createSlice({
	name:'favorite',
	initialState: {
		ids:([] as string[])
	},
	reducers:{
		addFavorite:(state, action:{payload:string, type:string})=>{
			const {payload}= action
			state.ids.push(payload)
		},
		removeFavorite:(state, action)=>{
			const {payload} = action
			state.ids.splice(state.ids.indexOf(payload), 1)
		}
	}	
})

export const addFavorite = favoriteSlice.actions.addFavorite
export const removeFavorite = favoriteSlice.actions.removeFavorite
export default favoriteSlice.reducer