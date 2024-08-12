import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100
    },
    header: {
        flexDirection: "row",
        justifyContent: 'left',
        paddingHorizontal: 35,
        paddingTop: 60,
        alignItems: "center"
    },
    backWrapper: {
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 26,
        backgroundColor: "white"
    },
    homeWrapper: {
        marginLeft: 15,
        borderWidth: 1,
        borderColor: "black",
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 26,
        backgroundColor: "black"
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40
    },
    loginBtn: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: "black",
        backgroundColor: "#F68A11",
        borderWidth: 1,
        borderRadius: 10
    },
    loginHeader: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 80
    },
    loginText: {
        color: "#51B209",
        fontSize: 32,
        fontFamily: "Montserrat-Bold",
        textDecorationLine: "underline"
    },
    usernameSearchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 40,
        paddingHorizontal: 35
    },
    usernameSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: 10,
        justifyContent: "center",
        paddingLeft: 5,
        borderRadius: 3,
        height: "80%",
    },
    usernameHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    usernameSearchInput: {
        height: 20,
        fontSize: 16
    },
    passwordSearchContainer: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30,
        height: 40,
        paddingHorizontal: 35
    },
    passwordHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
    passwordSearchWrapper: {
        flex: 1,
        backgroundColor: "white",
        marginLeft: 11,
        justifyContent: "center",
        paddingLeft: 5,
        borderRadius: 3,
        height: "80%",
    },
    passwordSearchInput: {
        width: "100%",
        fontSize: 16
    },
    loginBtn: {
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
    },
    loginWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 1,
        marginTop: 40,
        borderRadius: 5,
        backgroundColor: "#BBC7B8",
    },
    loginButtonText: {
        fontSize: 20,
        fontFamily: "Montserrat-Medium",
        color: "white"
    },
    regFP: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        height: 40,
        paddingHorizontal: 35,
    },
    fpBtn: {

    },
    fpText: {
        fontSize: 17,
        textDecorationLine: "underline",
        color: "black"
    },
    regBtn: {
        marginTop: 10
    },
    regText: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "black"
    },
})

export default styles;