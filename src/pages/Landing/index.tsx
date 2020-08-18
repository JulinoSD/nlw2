import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import LandingImg from '../../assets/images/landing.png';
import study from '../../assets/images/icons/study.png';
import darAulas from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';


const Landing = () => {
    const { navigate } = useNavigation();

    function navigationToClasses() {
        navigate('GiveClasse')
    }
    return (
        <View style={styles.landing}>
            <Image source={LandingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja Bem Vindo {'\n'}
                <Text style={styles.bold}> o que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsLanding}>
                <RectButton style={[styles.button, styles.buttonPrimary]}>
                    <Image source={study} />
                    <Text style={styles.buttontext}> Estudar </Text>
                </RectButton>

                <RectButton
                    style={[styles.button, styles.buttonSecondary]}
                    onPress={navigationToClasses}
                >
                    <Image source={darAulas} />
                    <Text style={styles.buttontext}> dar aulas </Text>
                </RectButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 20 conexões já realizadas {''}
                <Image source={HeartIcon}></Image>
            </Text>
        </View>
    )
}

export default Landing