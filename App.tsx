import * as React from 'react'; 
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import CustomHeader from './components/CustomHeader'; 
import TabBar from './components/TabBar'; 
import Home from './src/TabBar/Home'; 
import Settings from './src/TabBar/Settings'; 
import Notificatin from './src/TabBar/Notificatin'; 
import Profile from './src/TabBar/Profile'; 
import UpcomingScreen from './src/Screens/UpcomingScreen'; 
import HabitScreen from './src/Screens/HabitScreen'; 
import * as Font from 'expo-font';

const Tab = createBottomTabNavigator(); 
const Stack = createNativeStackNavigator(); 

const getHeaderOptions = (navigation) => {
  const currentRoute = navigation.getState().routes[navigation.getState().index].name;

  let leftIcon;
  let iconSize = { width: 32, height: 32 };
  let tintColor = 'black';

  if (currentRoute === 'HomeScreen') {
    leftIcon = require('./assets/icons/menu.png');
    iconSize = { width: 32, height: 32 };
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
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      /> 
      <Tab.Screen 
        name="Settings" 
        component={Settings} 
        options={({ navigation }) => getHeaderOptions(navigation, false)} 
      /> 
      <Tab.Screen 
        name="Notification" 
        component={Notificatin} 
        options={({ navigation }) => getHeaderOptions(navigation, false)} 
      /> 
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={({ navigation }) => getHeaderOptions(navigation, false)} 
      /> 
    </Tab.Navigator> 
  ); 
} 

export default function App() { 
  const [fontsLoaded, setFontsLoaded] = React.useState(false);
  const loadFonts = async () => {
    await Font.loadAsync({
      'Roboto': require('./assets/fonts/Roboto.ttf'),
      'arial': require('./assets/fonts/arial.ttf'),
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Optionally return a loading indicator
  }
  return ( 
    <GestureHandlerRootView> 
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
  ); 
}
