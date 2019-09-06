import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 120,
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
    title: {
        fontWeight: "bold",
        fontSize: 17,
        color: "white"
    }
})

export default styles;