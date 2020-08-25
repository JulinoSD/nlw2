import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    study:{
        flex: 1,
        backgroundColor: '#f0f0f7' 
    },
    teacherlist: {
        marginTop: -40,
    },
    serchForm: {
        marginTop: 8,
    },
    label: {
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },
    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputBlock: {
        width: '48%'
    },
    submitbutton: {
        backgroundColor: '#04d361',
        flexDirection: 'row',
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    submitbuttonText:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
    }
})

export default style