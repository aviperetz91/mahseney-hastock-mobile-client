import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    product: {
        height: 300,
        marginVertical: 15,
        marginHorizontal: 20
    },
    imageContainer: {
        width: "100%",
        height: "65%",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: "hidden"
    },
    image: {
        backgroundColor: "white",
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
    contentContainer: {
        height: "35%",
        backgroundColor: "white",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textContainer: {
        alignItems: "center",
        marginBottom: 8,
    },  
    title: {
        fontSize: 17,
        fontWeight: "bold",
        marginVertical: 4,
    },
    price: {
        fontSize: 14,
        color: "#888"
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    button: {
        width: "30%",
    }
})

export default styles;