import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Platform, StyleSheet, Text, View } from 'react-native';
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
   const subscriptionReq = Notification.addNotificationReceivedListener((notification)=>{
      const user = notification.request.content.data.user
      // Alert.alert(user)
      console.log(`Notification with data user: ${user}`)
    })

    const subscriptionRes =Notification.addNotificationResponseReceivedListener((response)=>{
      const user = response.notification.request.content.data.user
      // Alert.alert(user)
      console.log(`Notification response with data user: ${user}`)
    })

    return ()=>{
      subscriptionReq.remove()
      subscriptionRes.remove()
    }
  },[])


  useEffect(()=>{
    (async() =>{
      const {status} = await Notification.getPermissionsAsync()
      let finalStatus = status

      if(finalStatus !=='granted'){
        const {status} = await Notification.requestPermissionsAsync()
        finalStatus = status
      }
      if(finalStatus !=='granted'){
        Alert.alert('Push notification permissions is required!')
        return
      }
      const pushToken = await Notification.getExpoPushTokenAsync()
      console.log(pushToken)

      if(Platform.OS === 'android'){
        Notification.setNotificationChannelAsync('default',{
          name:'default',
          importance: Notification.AndroidImportance.DEFAULT
        })
      }
    })()
  
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

  const sendPushNotificationHandler= ()=>{
    fetch('https://exp.host/--/api/v2/push/send',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        to:'ExponentPushToken[u1u1JZFNeX8xQpCwMbk3Uq]',
        title:'Opa testando o envio do dispositivo',
        body: 'Mensagem de teste'
      })
    })
  }

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Button title='Schedule a Local notification' onPress={scheduleNotificationHandler}/>
      <Button title='Send a Push notification' onPress={sendPushNotificationHandler}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

