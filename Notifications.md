# Local and push Notifications

## Local Notifications
`expo install expo-notifications` 

[Expo notification Doc](https://docs.expo.dev/versions/latest/sdk/notifications/)

When you click at notification the default behavior is open the app.

create a basic notification:
```tsx
...
import * as Notification from 'expo-notifications'


Notification.setNotificationHandler({
  handleNotification: async()=>{
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
})

export default function App() {
  const scheduleNotificationHandler =()=>{
    Notification.scheduleNotificationAsync({
      content:{
        title: 'My first local notification',
        body: 'Body of notification',
        data:{ user: 'Rene'}
      },
      trigger:{
        seconds:5
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title='Schedule a notification' onPress={scheduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 ...
});
```
### Listening for notifications
You can trigger a function or another things when you receive a notificatio with help o `useEffect`:

```tsx
...
import * as Notification from 'expo-notifications'
import { useEffect } from 'react';


Notification.setNotificationHandler({
  handleNotification: async()=>{
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
})

export default function App() {

  useEffect(()=>{
   const subscription = Notification.addNotificationReceivedListener((notification)=>{
      console.log(notification)
	  const user = notification.request.content.data.user
      Alert.alert(user)
    })

    return ()=>{
      subscription.remove()
    }
  },[])

  const scheduleNotificationHandler =()=>{
    Notification.scheduleNotificationAsync({
      content:{
        title: 'My first local notification',
        body: 'Body of notification',
        data:{ user: 'Rene'}
      },
      trigger:{
        seconds:5
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title='Schedule a notification' onPress={scheduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  ...
});
```

### Listening for user interaction
When the user tap in a notification you can do something to:

```tsx
...
import * as Notification from 'expo-notifications'
import { useEffect } from 'react';


Notification.setNotificationHandler({
  handleNotification: async()=>{
    return {
      shouldPlaySound: false,
      shouldSetBadge: false,
      shouldShowAlert: true
    }
  }
})

export default function App() {

  useEffect(()=>{
   ...
    const subscriptionRes =Notification.addNotificationResponseReceivedListener((response)=>{
      const user = response.notification.request.content.data.user
      // Alert.alert(user)
      console.log(`Notification response with data user: ${user}`)
    })

    return ()=>{
      ...
      subscriptionRes.remove()
    }
  },[])

  const scheduleNotificationHandler =()=>{
    Notification.scheduleNotificationAsync({
      content:{
        title: 'My first local notification',
        body: 'Body of notification',
        data:{ user: 'Rene'}
      },
      trigger:{
        seconds:5
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title='Schedule a notification' onPress={scheduleNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
 ...
});

```

## Push Notifications
