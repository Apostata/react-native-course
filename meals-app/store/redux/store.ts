import { configureStore } from "@reduxjs/toolkit";
import FavoreiteReducer from './favorite'

export const store = configureStore({
	reducer:{
		favoriteMeals: FavoreiteReducer
	}
})