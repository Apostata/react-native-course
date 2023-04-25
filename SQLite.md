# SQLite
db on device

`expo install expo-sqlite`
create a folder `db` and a `index.ts` inside it
```ts
import * as SQLite from 'expo-sqlite'

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

```
then call `init()` function in `App.tsx` file, here I'm using the `expo-splash-screen` package to show the app only when the db is ready
```tsx
...
import { init } from './db';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createNativeStackNavigator<RootStackList>()

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false)

  SplashScreen.preventAutoHideAsync()
  .then((result:any) =>
    console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`),
  )
  .catch(console.warn)

  useEffect(() => {
    async function hideSplashScreen() {
      await SplashScreen.hideAsync()
    }
    if (dbInitialized) {
      hideSplashScreen()
    }
  }, [dbInitialized])

  useEffect(()=>{
    init()
	.then(()=>{
      setDbInitialized(true)
    }).catch((err)=>{
		console.log(err)
	})
  },[])

  return (
    <>
      <StatusBar style='auto'/>
     <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
            headerStyle:{ backgroundColor:Colors.primary500,},
            headerTintColor:Colors.gray700,
            contentStyle:{ backgroundColor:Colors.gray700}
          }}
        >
          <Stack.Screen 
            name='AllPlaces'
            component={AllPlacesScreen}
            options={
              ({navigation}:RootStack<'AllPlaces'>)=>({
               title:'Your Favorite Places',
               headerRight:({tintColor})=>(
                <IconButton 
                  icon='add' 
                  color={tintColor} 
                  size={24} 
                  onPress={()=>{navigation.navigate('AddPlace')}}
                />)
            })}
          />
          <Stack.Screen 
            name='AddPlace' 
            component={AddPlaceScreen} 
            options={{
              title: 'Add a new Place'
            }}
          />
          <Stack.Screen name='PlaceDetails' component={PlaceDetailsScreen} />
          <Stack.Screen name='Map' component={MapScreen} />
        </Stack.Navigator>
     </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


```

other deb functions:
```ts
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
```