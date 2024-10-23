import { View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Data from '../constants/Data';
import HomeCard from '../../components/task/HomeCard';
import SearchBar from '../../components/SearchBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from '../../components/task/BottomSheet';

const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(Data[0]);
  const bottomSheetItem = Data[1];

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <View style={styles.container}>
        <SafeAreaView>
        <StatusBar barStyle="light-content" backgroundColor="#EDD6F8" />
        <ScrollView>
          <View style={styles.contentContainer}>
            <Text style={styles.text}>Welcome back,</Text>
            <Text style={styles.title}>Create your goal for your future!</Text>

            <View style={styles.textContainer}>
              <SearchBar
                value={searchQuery}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
              />
              <HomeCard
                foregroundColor={selectedItem.foregroundColor}
                content={selectedItem.content}
                time={selectedItem.time}
                habitImage={selectedItem.habitImage}
                plantImage={selectedItem.plantImage}
                onPress={() => {
                  navigation.navigate('Habit', {
                    content: selectedItem.content,
                    time: selectedItem.time,
                    habitImage: selectedItem.habitImage,
                    plantImage: selectedItem.plantImage,
                    foregroundColor: selectedItem.foregroundColor,
                  });
                }}
              />
            </View>
          </View>
        </ScrollView>
        </SafeAreaView>
      </View>
      <BottomSheet item={bottomSheetItem} />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDD6F8',
  },
  contentContainer: {
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop:5,
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily:'roboto',
    marginLeft: 15,
    marginTop: 10,
  },
  title: {
    fontFamily:'roboto',
    fontSize: 36,
    fontWeight: '400',
    marginLeft: 15,
    marginTop: 5,
    marginBottom:-10,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
  },
});

export default Home;
