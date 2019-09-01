import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#f4f4f4"
    },
    product: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 4,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        height: 350,
        marginVertical: 15,
        marginHorizontal: 20
    },
    imageContainer: {
        width: "100%",
        height: "70%",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
    },
    contentContainer: {
        height: "30%",
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textContainer: {
        alignItems: "center",
        marginBottom: 5,
    },  
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 4,
    },
    price: {
        fontSize: 15,
        color: "#888"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    button: {
        width: "30%"
    }
})

export default styles;