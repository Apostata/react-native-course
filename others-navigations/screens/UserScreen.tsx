import { useNavigation, DrawerActions } from '@react-navigation/native';
import { View, Text, Button, StyleSheet } from 'react-native';
import { navigationRootDrawer } from '../types/navigation';

function UserScreen() {
  const navigation :navigationRootDrawer<'User'>= useNavigation()
  
  const openDrawerProgramatically = ()=>{
    navigation.dispatch(DrawerActions.openDrawer())
  }

  return (
    <View style={styles.rootContainer}>
      <Text>
        This is the <Text style={styles.highlight}>"User"</Text> screen!
      </Text>
      <Button onPress={openDrawerProgramatically} title={'open drawer'} />
    </View>
  );
}

export default UserScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#eb1064',
  },
});
