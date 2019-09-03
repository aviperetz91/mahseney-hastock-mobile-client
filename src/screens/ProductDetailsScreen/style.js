import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    imageContainer: {
        borderColor: "transparent",
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        shadowRadius: 5,
        elevation: 5,
        backgroundColor: "white"
    },  
    image: {
        width:"100%",
        height: 300,
        resizeMode: "contain"
    },
    price: {
        fontSize: 24,
        color: "#888",
        textAlign: "center",
        marginTop: 20
    },
    description: {
        textAlign: "center",
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 20
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        // marginBottom: 10
    },
    button: {
        width: "25%"
    },
})

export default styles;