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
    titleText: {
        color: "black",
        fontSize: 26,
        fontFamily: "Montserrat-Bold"
    },
    logoContainer: {
        flex: 0,
        alignItems: "center",
        marginTop: 20
    },
    logo: {
        width: 150,
        height: 150
    },
    title1Wrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
        flexDirection: "row"
    },
    title1Text: {
        color: "black",
        fontSize: 18,
        fontFamily: "Montserrat-SemiBold",
        textDecorationLine: "underline"
    },
    bodyWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 40,
        flexDirection: "row"
    },
    bodyText: {
        color: "black",
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
        textAlign: "justify"
    },
})

export default styles;