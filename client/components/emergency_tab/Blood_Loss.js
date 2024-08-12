import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList, TouchableOpacity, TextInput, Button, Modal, Dimensions, SubText, HeadingText, ScrollView, ImageBackground } from 'react-native';
import styles from './bloodloss.style';
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
                        <Text style={styles.stepbody}>With open wounds, there’s a risk of infection, so wear protective first aid gloves (if available) to help prevent any infection.</Text>
                    </View>
                </View>

                <View style={styles.arrowcontainer}>
                    <Image
                        source={require('../../assets/images/gloves.jpeg')} // or use a URL: {uri: 'https://example.com/image.jpg'}
                        style={{width: 100, height: 100, marginLeft: 220}}
                        imageStyle={styles.imageStyle} // Optional: to add border radius or other styles to the image
                    >
                    </Image>
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
                        <Text style={styles.stepbody}>If wound is covered in dirt, then wash the wound using running water. Prevent excessive blood loss during the process</Text>
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
                        <Text style={styles.stepbody}>Apply direct firm pressure to the wound using a sterile dressing or a clean non-fluffy cloth</Text>
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
                        <Text style={styles.stepbody}>If there’s an object in the wound, don’t pull it out. It may be acting as a plug to reduce the bleeding. Instead apply pressure on either side of the object to push the edges together.</Text>
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
                        <Text style={styles.stepsheader}>Step 5</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Firmly secure the dressing with a bandage to maintain pressure on the wound. Make it firm enough to maintain pressure but not so tight that it restricts their circulation.</Text>
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
                        <Text style={styles.stepsheader}>Step 6</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>The loss of blood could cause the casualty to develop shock. Treat them for this by helping them to lie down on a rug or blanket. Raise and support their legs, so they are above the level of their heart. You should then loosen any tight clothing around their neck, chest and waist and cover the casualty with a blanket to keep them warm</Text>
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
                        <Text style={styles.stepsheader}>Step 7</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>If blood comes through the dressing, remove it and reapply pressure with a new dressing or pad to control the bleeding. Once the bleed is under control, secure in place with the bandage, tying the knot over the wound to keep the pressure on.</Text>
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
                        <Text style={styles.stepsheader}>Step 8</Text>
                        <Text style={styles.stepsheaderhyphen}> -</Text>
                    </View>
                    <View style={{ marginRight: 20, marginTop: 10 }}>
                        <Text style={styles.stepbody}>Support the injured part with a sling or bandage and keep checking the circulation beyond the bandage every 10 minutes till medical help arrives.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

