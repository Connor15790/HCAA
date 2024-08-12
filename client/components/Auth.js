import * as React from 'react';
import { useCallback, useState } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import styles from './styles/auth.style';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import { showToast } from './common/Toast';
import * as SplashScreen from 'expo-splash-screen';
import { apiPost, apiGet } from './common/axios';
import { useAuth } from '../AuthContext';

SplashScreen.preventAutoHideAsync();
Feather.loadFont();
MaterialCommunityIcons.loadFont();

export default Auth = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // const { login } = useAuth();

    async function handleLogin() {
        console.log('Login button pressed')
        const formData = {
            username,
            password,
        }
        console.log(formData)

        const response = await apiPost('/login', formData)
        console.log(response)
        if (response.status == 200) {
            navigation.navigate("Home")
        }else{
            alert(response.message)
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.loginHeader}>
                <Text style={styles.loginText}>Login</Text>
            </View>

            <View style={styles.usernameSearchContainer}>
                <Text style={styles.usernameHeader}>Username*:</Text>
                <View style={styles.usernameSearchWrapper}>
                    <TextInput
                        style={styles.usernameSearchInput}
                        value={username}
                        onChangeText={(usernameInput) => setUsername(usernameInput)}
                        placeholder='Username'
                    />
                </View>
            </View>

            <View style={styles.passwordSearchContainer}>
                <Text style={styles.passwordHeader}>Password*:</Text>
                <View style={styles.passwordSearchWrapper}>
                    <TextInput
                        style={styles.passwordSearchInput}
                        value={password}
                        onChangeText={(passwordInput) => setPassword(passwordInput)}
                        placeholder='Password'
                    />
                </View>
            </View>

            <View style={styles.loginBtn}>
                <TouchableOpacity
                    style={[styles.loginWrapper, {
                        backgroundColor: !username || !password ? "#B7BCB5" : "black",
                        borderWidth: !username || !password ? 0 : 1,
                    }]}

                    onPress={handleLogin}

                    disabled={!username || !password ? true : false}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.regFP}>
                {/* <TouchableOpacity style={styles.fpBtn}>
                    <Text style={styles.fpText}>Forgot Password?</Text>
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.regBtn}
                    // onPress={handleLogin}
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={styles.regText}>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}