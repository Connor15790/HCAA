import * as React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import Auth from './components/Auth';
import Casualties from './components/Casualties';
import Casualties2 from './components/Casualties2';
import Casualties3 from './components/Casualties3';
import Records from './components/Records';
import Register from './components/Register';
import Discarded from './components/Discarded';
import Profile1 from './components/Profile1';
import { AuthProvider } from './contextApi/AuthContext';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import About from './components/About';
import Changepass from './components/Changepass';
import Help from './components/Help';
import Emergencies from './components/Emergencies';
import Blood_Loss from './components/emergency_tab/Blood_Loss';
import Cuts from './components/emergency_tab/Cuts';
import Fracture from './components/emergency_tab/Fracture';
import Allergies from './components/emergency_tab/Allergies';
import Infections from './components/emergency_tab/Infections';
import Drowning from './components/emergency_tab/Drowning';
import Heart_Attack from './components/emergency_tab/Heart_Attack';
import Choking from './components/emergency_tab/Choking';
import Strokes from './components/emergency_tab/Strokes';
import Overdose from './components/emergency_tab/Overdose';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AuthProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Auth"
                        component={Auth}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Casualties"
                        component={Casualties}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Casualties2"
                        component={Casualties2}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Casualties3"
                        component={Casualties3}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Records"
                        component={Records}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Profile1"
                        component={Profile1}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Navbar"
                        component={Navbar}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="About"
                        component={About}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Changepass"
                        component={Changepass}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Help"
                        component={Help}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Emergencies"
                        component={Emergencies}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Blood_Loss"
                        component={Blood_Loss}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Cuts"
                        component={Cuts}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Fractures"
                        component={Fracture}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Allergies"
                        component={Allergies}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Infections"
                        component={Infections}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Drowning"
                        component={Drowning}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Heart_Attack"
                        component={Heart_Attack}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Choking"
                        component={Choking}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Strokes"
                        component={Strokes}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Overdose"
                        component={Overdose}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </AuthProvider>
    );
}

