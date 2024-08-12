import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 70,
        flexDirection: "row"
    },
    settingsLogo: {
        // flex: 1,
        width: 25,
        height: 25,
        marginHorizontal: 5
    },
    titleText: {
        color: "black",
        fontSize: 26,
        fontFamily: "Montserrat-Bold"
    },
    aboutContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        // alignItems: "center",
        marginTop: 40,
        // backgroundColor: "red",
        // flex: 1
    },
    aboutText: {
        fontSize: 18,
        paddingLeft: 10,
    },
    helpContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        // alignItems: "center",
        marginTop: 30,
    }
})

export default styles;