// src/navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen'; // MainScreen 가져오기
import Ingredients from './components/Ingredients';
import AddItem from './components/AddItem';
import Recipes from './components/Recipes';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainScreen">
        <Stack.Screen 
          name="MainScreen" 
          component={MainScreen} 
          options={{ headerShown: false }} // 기본 헤더 숨기기
        />
        <Stack.Screen 
          name="Ingredients" 
          component={Ingredients} 
          options={{ headerShown: false }} // 기본 헤더 숨기기
        />
        <Stack.Screen 
          name="AddItem" 
          component={AddItem} 
          options={{ headerShown: false }} // 기본 헤더 숨기기
        />
        <Stack.Screen 
          name="Recipes" 
          component={Recipes} 
          options={{ headerShown: false }} // 기본 헤더 숨기기
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
