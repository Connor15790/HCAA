import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import styles from './styles/about.style';

SplashScreen.preventAutoHideAsync();

export default About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titleWrapper}>
                <Text style={styles.titleText}>About</Text>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={require("../assets/images/mednav.png")}
                    style={styles.logo}
                />
            </View>

            <View style={styles.title1Wrapper}>
                <Text style={styles.title1Text}>HEALTH CARE ASSISTANT AID</Text>
            </View>

            <View style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>Our application is a dedicated assistance app tailored to meet the unique needs of nurses working in casualty wards when doctors may not be readily available. In these circumstances, the app serves as a reliable resource for primary medications and first aid, enabling nurses to provide essential care swiftly and effectively. This initiative aims not only to enhance the overall quality of patient care but also to streamline communication between nurses and doctors, ensuring that crucial information is conveyed promptly, even in the absence of direct physical presence.</Text>
            </View>

            
        </View>
    )
}