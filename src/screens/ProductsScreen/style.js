import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.light
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    message: {
        alignItems: "center"
    },
    button: {
        margin: 10,
    }
})

export default styles;