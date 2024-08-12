import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText, ScrollView, ImageBackground } from 'react-native';
import styles from './choking.style';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default Blood_Loss = ({ navigation, prop }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.callheader}>
                    <Text style={styles.calltext}>Call for medical assistance -{">"}</Text>
                    <TouchableOpacity style={styles.callbutton}>
                        <Text style={styles.callbuttontext}>Call</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.stepscontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.stepsheader}>Step 1</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, suscipit animi tempora dicta iste tempore consequuntur!</Text>
                    </View>
                </View>

                <View style={styles.arrowcontainer}>
                    <Image
                        source={require('../../assets/images/downarrow.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                    >
                    </Image>
                </View>

                <View style={styles.stepscontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.stepsheader}>Step 2</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, suscipit animi tempora dicta iste tempore consequuntur!</Text>
                    </View>
                </View>

                <View style={styles.arrowcontainer}>
                    <Image
                        source={require('../../assets/images/downarrow.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                    >
                    </Image>
                </View>

                <View style={styles.stepscontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.stepsheader}>Step 3</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, suscipit animi tempora dicta iste tempore consequuntur!</Text>
                    </View>
                </View>

                <View style={styles.arrowcontainer}>
                    <Image
                        source={require('../../assets/images/downarrow.jpg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                        style={styles.imageBackground}
                        imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                    >
                    </Image>
                </View>

                <View style={styles.stepscontainer}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.stepsheader}>Step 4</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, suscipit animi tempora dicta iste tempore consequuntur!</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

