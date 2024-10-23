import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from '../../components/task/BottomSheetUpcomingScreen'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import ToggleButton from '../../components/ToggleButton'



const UpcomingScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
       <Text style={styles.headerText}>Upcoming</Text>
      <ToggleButton />
    </SafeAreaView>
    <BottomSheet />
    </GestureHandlerRootView>
  )
}

export default UpcomingScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F6FEFF',
    height:'100%',
    width:'100%',
    top:10,
    alignItems:'center',
  },
  headerText:{
    fontFamily:'Roboto',
    fontSize:'30',
    fontWeight:'500',
    color:'#323232',
    marginBottom:20,
  },
})