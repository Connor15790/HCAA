import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText, ScrollView, ImageBackground, Linking } from 'react-native';
import styles from './styles/emergencies.style';
import * as SplashScreen from 'expo-splash-screen';
import YouTube from "react-native-youtube";

SplashScreen.preventAutoHideAsync();

export default Emergencies = ({ navigation, prop }) => {
    const handlePress = () => {
        Linking.openURL('https://youtu.be/-NodDRTsV88?si=4vS0DdxK7f-H5LWv');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.beginningtextcontainer}>
                    <Text style={{ textAlign: "center", fontSize: 27, fontWeight: "bold", textDecorationLine: "underline", color: "red", marginBottom: 10 }}>First Aid</Text>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.beginningtextA}>AWAKE?</Text>
                        <Text style={styles.beginningtext}>If not, try to wake them and call an ambulance</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.beginningtextB}>Breathing?</Text>
                        <Text style={styles.beginningtext}>If not, start rescue breathing and provide CPR
                        </Text>
                        <Text style={{
                            color: 'blue',
                            textDecorationLine: 'underline',
                            fontSize: 16
                        }} onPress={handlePress}> https://shorturl.at/1be5O</Text>
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.beginningtextB}>Continue Care</Text>
                        <Text style={styles.beginningtext}>Until medical help arrives and brief them about the type of emergency</Text>
                        <Text style={[styles.beginningtext, {marginTop: 10}]}>Select the type of injury from the options below and follow the first aid procedures for specific emergencies</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Blood_Loss")}>
                            <Text>Blood Loss</Text>
                            <ImageBackground
                                source={require('../assets/images/blood.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Cuts")}>
                            <Text>Cuts & Bruises</Text>
                            <ImageBackground
                                source={require('../assets/images/cuts.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Fractures")}>
                            <Text>Fractures</Text>
                            <ImageBackground
                                source={require('../assets/images/fracture.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Allergies")}>
                            <Text>Allergies</Text>
                            <ImageBackground
                                source={require('../assets/images/allergy.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Infections")}>
                            <Text>Infections</Text>
                            <ImageBackground
                                source={require('../assets/images/infection.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Drowning")}>
                            <Text>Drowning</Text>
                            <ImageBackground
                                source={require('../assets/images/drowning.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Heart_Attack")}>
                            <Text>Heart Attack</Text>
                            <ImageBackground
                                source={require('../assets/images/heart_attack.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Choking")}>
                            <Text>Choking</Text>
                            <ImageBackground
                                source={require('../assets/images/choking.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Strokes")}>
                            <Text>Strokes</Text>
                            <ImageBackground
                                source={require('../assets/images/Stroke.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.emerbuttons} onPress={() => navigation.navigate("Overdose")}>
                            <Text>Overdose</Text>
                            <ImageBackground
                                source={require('../assets/images/overdose.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                                style={styles.imageBackground}
                                imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                            >
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView >
    )
}