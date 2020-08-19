import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    giveclasse: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#8257e5',
        padding: 40,

    },
    title: {
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 32,
        lineHeight: 37,
        maxWidth: 180,
    },
    head: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        height: 300,
        width: '100%',
        marginTop: 0,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        resizeMode: 'contain',
    },
    description: {
        marginTop: 24,
        color: '#d4c2ff',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Poppins_400Regular',
        maxWidth: 240,
    },
    okButton: {
        backgroundColor: '#04d361',
        borderRadius: 8,
        marginVertical: 40,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    okButtonText: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'Archivo_700Bold',
    }
})

export default styles