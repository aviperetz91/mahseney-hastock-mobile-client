import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        backgroundColor: Colors.primary,
        marginHorizontal: 17,
        marginVertical:18,
        height: 60,
        borderRadius: 50,
        elevation: 10,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
    },
    boxContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },  
    titleContainer: {
        justifyContent: "center",
        alignItems: "center"
    }, 
    bgImage: {
        width: "100%",
        height: "70%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 13
    }
})

export default styles;