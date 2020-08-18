import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    landing: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#8257e5',
        padding: 40,
    },
    banner: {
        width: '100%',
        resizeMode: 'contain',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Poppins_400Regular',
        lineHeight: 30,
        marginTop: 50,
    },
    bold: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 20,
        lineHeight: 30,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '40%',
        height: 150,
        borderRadius: 8,
        backgroundColor: '#333',
    },
    buttonsLanding: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: "space-between",
    },
    buttonPrimary: {
        backgroundColor: '#9871f5',
    },
    buttonSecondary: {
        backgroundColor: '#04d361',
    },

    buttontext: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 20,
    },
    totalConnections: {
        fontFamily: 'Poppins_400Regular',
        color: '#d4c2ff',
        fontSize: 15,
        marginTop: 15,
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
    }
});
export default styles;