// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/goal_input';
import GoalItem from './components/goal_item';

export default function App() {

  const [showAddGoalModal, setShowAddGoalModal] = useState<boolean>(false)
  const [courseGoals, setCourseGoals] = useState<{text:string, id:string}[]>([])

  function showModalHandle(){
    setShowAddGoalModal(true)
  }

  function hideModalHandle(){
    setShowAddGoalModal(false)
  }

  function addGoal(text:string){
    setCourseGoals((prevCourseGoals)=>[...prevCourseGoals, {id: new Date().toISOString(), text}])
    hideModalHandle()

  }

  function removeGoal(id:string){
    setCourseGoals((prevCourseGoals)=> prevCourseGoals.filter((course)=>course.id !== id))
  }

  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title="Add new Goal"  color='#864fdf' onPress={showModalHandle}/>
      <GoalInput addGoal={addGoal} showModal={showAddGoalModal} hideModal={hideModalHandle}/>
      <View style={styles.goalsContainer}>
        {courseGoals.length>0 &&<FlatList 
          data={courseGoals} 
          keyExtractor={(item, index)=>item.id}
          renderItem={itemData=>{
            itemData.index
            return (
                <GoalItem item={itemData.item}  removeGoal={removeGoal}/>
              )
            }}/>}
          
          {courseGoals.length<1 && <GoalItem item={{text: 'No goals!'}} />}

      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    paddingTop:50,
    paddingHorizontal: 16,
    flex:1,
    // backgroundColor: '#1e085a'
  },
  goalsContainer:{
    flex: 4
  }
});
