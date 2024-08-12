import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 50
    },
    beginningtextcontainer: {
        textAlign: "justify",
        paddingHorizontal: 20,
        marginBottom: 10
    },
    beginningtext: {
        fontSize: 16,
        textAlign: "justify",
        marginTop: 2,
        fontFamily: "Montserrat-SemiBold"
    },
    row: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 9,
    },
    emerbuttons: {
        borderColor: "black",
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "white",
        width: 180,
        height: 100,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        padding: 20
    },
    imageBackground: {
        // flex: 1,
        justifyContent: "flex-end",
        alignItems: 'flex-end',
        width: 50,
        height: 50
    },
    imageStyle: {
        borderRadius: 10,
    },
    beginningtextA: {
        fontSize: 18,
        fontFamily: "Montserrat-Bold"
    },
    beginningtextB: {
        marginTop: 10,
        fontSize: 18,
        fontFamily: "Montserrat-Bold"
    }
})

export default styles;