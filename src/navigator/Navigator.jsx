import { View, Text} from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Holidays from '../components/Holidays';
import HolidaysList from '../components/HolidaysList';


const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return(
        <Stack.Navigator>
          <Stack.Screen name="Holidays" component={Holidays} options={{ headerShown: false }} />
          <Stack.Screen name="HolidaysList" component={HolidaysList} options={{ headerShown: false }} />
      </Stack.Navigator>

    )
}