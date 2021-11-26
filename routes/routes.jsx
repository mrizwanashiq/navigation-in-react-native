import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from "../components/screen1"
import Screen2 from "../components/screen2"

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="screen1"
                    component={Screen1}
                    options={{ title: 'Screen 1' }}
                />
                <Stack.Screen
                    name="screen2"
                    component={Screen2}
                    options={{ title: 'Screen 2' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default MyStack;
