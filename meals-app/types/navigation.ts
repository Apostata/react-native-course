import { NavigationProp, RouteProp } from "@react-navigation/native";

export type rootStackList = {
	mealsCategories: undefined;
	mealsOverview: {
		categoryId:string,
	};
	mealDetails: {
		id:string,
	};
  }
  
export type routeRootStack<RouteName extends keyof rootStackList> =  RouteProp<rootStackList, RouteName>
export type navigationRootStack<RouteName extends keyof rootStackList> = NavigationProp<rootStackList, RouteName>


export type RootStack<RouteName extends keyof rootStackList> = {
	navigation:navigationRootStack<RouteName>,
	route: routeRootStack< RouteName>
}
