import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0
    },
    callheader: {
        flexDirection: "row",
        marginTop: 50,
        height: 40,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    calltext: {
        fontSize: 18,
        fontWeight: "bold",

    },
    callbutton: {
        paddingVertical: 2,
        paddingHorizontal: 15,
        borderColor: "black",
        borderWidth: 2,
        // marginTop: 5,
        borderRadius: 10,
        marginLeft: 40,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    callbuttontext: {
        fontFamily: "Montserrat-SemiBold",
        color: "white",
        fontSize: 18
    },
    stepscontainer: {
        flexDirection: "column",
        marginTop: 10,
        paddingHorizontal: 20,
        alignItems: "left",
        justifyContent: "left",
    },
    stepsheader: {
        fontFamily: "Montserrat-SemiBold",
        color: "black",
        fontSize: 18,
        textDecorationLine: "underline"
    },
    stepsheaderhyphen: {
        fontFamily: "Montserrat-SemiBold",
        color: "black",
        fontSize: 18,
    },
    stepbody: {
        fontFamily: "Montserrat-Medium",
        color: "black",
        fontSize: 16,
        textAlign: "justify"
    },
    arrowcontainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 10
    },
    imageBackground: {
        width: 40,
        height: 50
    },
    imageStyle: {
        borderRadius: 10,
    },
})

export default styles;