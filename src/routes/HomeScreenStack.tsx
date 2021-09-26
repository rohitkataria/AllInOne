import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen,  EmailScreen} from '@screens';

const HomeStack = createStackNavigator();
const HomeStackScreen: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator headerMode='screen'>
        <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        <HomeStack.Screen name='EmailScreen' component={EmailScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default HomeStackScreen
