import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 10
    },
    input: {
        width: "60%",
        fontSize: 16,
        backgroundColor: "#fff",
        borderColor: Colors.primary,
        padding: 9,
        marginRight: 10,
        borderWidth: 1,
        borderRadius: 5,
        
    },
    button: {
        width: "40%"
    },
})
  
export default styles;