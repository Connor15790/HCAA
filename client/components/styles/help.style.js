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
    contentWrapper: {
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 20,
        marginTop: 30,
        // flexDirection: "row"
    },
    contentText1: {
        color: "black",
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
        textAlign: "justify"
    },
    contentText2: {
        color: "black",
        fontSize: 14,
        fontFamily: "Montserrat-Regular",
        textAlign: "justify",
        marginTop: 10
    }
})

export default styles;