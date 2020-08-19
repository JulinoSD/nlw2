import React from 'react';
import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import giveClasseBack from '../../assets/images/give-classes-background.png';

import style from './styles'
import { useNavigation } from '@react-navigation/native';



function GiveClasse() {
    const { goBack } = useNavigation()

    function NavigateBack(){
        goBack()
    }
    return (
        <View style={style.giveclasse}>
            <ImageBackground
                resizeMode='contain'
                source={giveClasseBack}
                style={style.content}
            >
                <Text style={style.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={style.description}>
                    Pra começar, você precisa se cadastrar como professor na nossa plataforma web
                </Text>
            </ImageBackground >

            <RectButton onPress={NavigateBack} style={style.okButton}>
                <Text style={style.okButtonText}>
                    Tudo bem
                </Text>
            </RectButton>
        </View>
    )
}

export default GiveClasse;