import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Settings from './Settings';
import { Image } from 'react-native';
import Statistics from './Statistics';
import MyCards from './MyCards';



const Tab = createBottomTabNavigator();

const HomeIcon = require('./assets/home.png');
const SettingsIcon = require('./assets/settings.png');
const CardsIcon = require('./assets/myCards.png');
const StatisticsIcon = require('./assets/statictics.png');


const Navigator = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator
             screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    return <Image source={HomeIcon} style={{ width: size, height: size, tintColor: color }} />;
                  } else if (route.name === 'Settings') {
                    return <Image source={SettingsIcon} style={{ width: size, height: size, tintColor: color }} />;
                  } else if (route.name === 'Cards') {
                    return <Image source={CardsIcon} style={{ width: size, height: size, tintColor: color }} />;
                  } else if (route.name === 'Statistics') {
                    return <Image source={StatisticsIcon} style={{ width: size, height: size, tintColor: color }} />;
                  }
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
            })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Cards" component={MyCards} />
        <Tab.Screen name="Statistics" component={ Statistics} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
