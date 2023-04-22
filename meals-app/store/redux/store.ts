import { configureStore } from "@reduxjs/toolkit";
import FavoriteReducer from './favorite'

export const store = configureStore({
	reducer:{
		favoriteMeals: FavoriteReducer
	}
})