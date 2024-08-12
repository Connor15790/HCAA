import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/settings.style';

SplashScreen.preventAutoHideAsync();

export default Settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Image
                    source={require("../assets/icons/settings.png")}
                    style={styles.settingsLogo}
                />
                <Text style={styles.titleText}>Settings</Text>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("About")}>
                <View style={styles.aboutContainer}>
                    <View style={{ alignItems: "flex-start", flex: 1, flexDirection: "row" }}>
                        <Image
                            source={require("../assets/icons/info.png")}
                            resizeMode='contain'
                            style={styles.infoIcon}
                        />
                        <Text style={styles.aboutText}>About</Text>
                    </View>

                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Image
                            source={require("../assets/icons/chevron-right.png")}
                            resizeMode='contain'
                            style={styles.rightIcon}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Help")}>
                <View style={styles.helpContainer}>
                    <View style={{ alignItems: "flex-start", flex: 1, flexDirection: "row" }}>
                        <Image
                            source={require("../assets/icons/life-buoy.png")}
                            resizeMode='contain'
                            style={styles.infoIcon}
                        />
                        <Text style={styles.aboutText}>Help</Text>
                    </View>

                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Image
                            source={require("../assets/icons/chevron-right.png")}
                            resizeMode='contain'
                            style={styles.rightIcon}
                        />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Changepass")}>
                <View style={styles.helpContainer}>
                    <View style={{ alignItems: "flex-start", flex: 1, flexDirection: "row" }}>
                        <Image
                            source={require("../assets/icons/key.png")}
                            resizeMode='contain'
                            style={styles.infoIcon}
                        />
                        <Text style={styles.aboutText}>Change Password</Text>
                    </View>

                    <View style={{ alignItems: "flex-end", flex: 1 }}>
                        <Image
                            source={require("../assets/icons/chevron-right.png")}
                            resizeMode='contain'
                            style={styles.rightIcon}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}