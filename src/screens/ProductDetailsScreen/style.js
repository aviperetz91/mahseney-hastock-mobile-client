import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.light
    },
    imageContainer: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "white",
        margin: 16,
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
        marginBottom: 10
    },
    button: {
        width: "25%"
    },
})

export default styles;