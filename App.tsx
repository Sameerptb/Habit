import React, { useCallback, useEffect, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

import CustomHeader from './components/CustomHeader';
import TabBar from './components/TabBar';
import Home from './src/TabBar/Home';
import Settings from './src/TabBar/Settings';
import Notification from './src/TabBar/Notification';
import Profile from './src/TabBar/Profile';
import UpcomingScreen from './src/Screens/UpcomingScreen';
import HabitScreen from './src/Screens/HabitScreen';
import { ProgressProvider } from './components/ProgressContext';
import { TaskProvider } from './components/TaskContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getHeaderOptions = (navigation) => {
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;

  let leftIcon;
  let iconSize = { width: 32, height: 32 };
  let tintColor = 'black';

  if (currentRoute === 'HomeScreen') {
    leftIcon = require('./assets/icons/menu.png');
  } else {
    leftIcon = require('./assets/icons/back.png');
    iconSize = { width: 18.7, height: 18 };
    tintColor = currentRoute === 'Habit' ? 'white' : 'black';
  }

  return {
    headerTitle: "",
    headerLeft: () => (
      <CustomHeader 
        leftIcon={leftIcon}
        onLeftPress={currentRoute === 'HomeScreen' ? () => navigation.navigate('Home') : () => navigation.goBack()} 
        iconSize={iconSize}
        tintColor={tintColor}
      />
    ),
    headerRight: () => (
      <CustomHeader 
        rightIcon={require('./assets/icons/Profile.png')} 
        onRightPress={() => navigation.navigate('Profile')} 
      />
    ),
  };
};

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerStyle: { backgroundColor: 'transparent' },
        headerTransparent: true,
        headerShadowVisible: false,
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={({ navigation }) => getHeaderOptions(navigation, false)} />
      <Tab.Screen name="Notification" component={Notification} options={({ navigation }) => getHeaderOptions(navigation, false)} />
      <Tab.Screen name="Profile" component={Profile} options={({ navigation }) => getHeaderOptions(navigation, false)} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [customFontsLoaded, setCustomFontsLoaded] = useState(false);
  const [robotoLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    
    const loadCustomFonts = async () => {
      await Font.loadAsync({
        Arial: require('./assets/fonts/Arial.ttf'),
      });
      setCustomFontsLoaded(true);
    };
    loadCustomFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (robotoLoaded && customFontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [robotoLoaded, customFontsLoaded]);

  if (!robotoLoaded || !customFontsLoaded) {
    return null;
  }

  return (
    <TaskProvider>
      <ProgressProvider>
        <GestureHandlerRootView onLayout={onLayoutRootView}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: 'transparent' },
                headerTransparent: true,
                headerShadowVisible: false,
              }}
            >
              <Stack.Screen
                name='HomeScreen'
                component={TabNavigator}
                options={({ navigation }) => getHeaderOptions(navigation, true)}
              />
              <Stack.Screen
                name='Habit'
                component={HabitScreen}
                options={({ navigation }) => getHeaderOptions(navigation, false)}
              />
              <Stack.Screen
                name='Upcoming'
                component={UpcomingScreen}
                options={({ navigation }) => getHeaderOptions(navigation, false)}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </ProgressProvider>
    </TaskProvider>
  );
}
