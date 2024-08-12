import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
        alignItems: "center",
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 70,
        borderWidth: 3,
        borderColor: "black"
    },
    titleWrapper: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 70
    },
    titleText: {
        color: "black",
        fontSize: 26,
        // fontFamily: "Montserrat-Bold",
        // textDecorationLine: "underline"
    },
    synopsisContainer: {
        justifyContent: "center",
        // flexDirection: "row",
        marginTop: 20,
        paddingHorizontal: 20,
    },
    synopsisHeader: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 3,
        textAlign: "center"
    },
    usernameHeader: {
        fontSize: 16,
        // fontWeight: "bold",
        paddingTop: 3,
        textAlign: "center",
        color: "grey"
    },
    idContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 20
    },
    idText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 12,
        color: "#848783"
    },
    idnoContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 5
    },
    idnoText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    licenseContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 15
    },
    licenseText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 12,
        color: "#848783"
    },
    licensenoContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 5
    },
    licensenoText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    profContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 15
    },
    profText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 12,
        color: "#848783"
    },
    professionContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 5
    },
    professionText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    emContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 15
    },
    emText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 12,
        color: "#848783"
    },
    emailContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 5
    },
    emailText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    phoneContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 15
    },
    phoneText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 0,
        paddingLeft: 10,
        fontSize: 12,
        color: "#848783"
    },
    phonenoContainer: {
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: 5
    },
    phonenoText: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 10,
        fontSize: 16
    },
    logoutContainer: {
        marginTop: 0,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 0
    },
    logoutBtn: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: "black",
        borderWidth: 2,
        marginTop: 30,
        borderRadius: 10,
        marginLeft: 0,
        backgroundColor: "black"
    },
    logoutText: {
        fontFamily: "Montserrat-SemiBold",
        color: "white"
    },
})

export default styles;