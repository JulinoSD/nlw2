import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import LandingImg from '../../assets/images/landing.png';
import study from '../../assets/images/icons/study.png';
import darAulas from '../../assets/images/icons/give-classes.png';
import HeartIcon from '../../assets/images/icons/heart.png';
import api from '../../services/api';

import styles from './styles';




const Landing = () => {
    const { navigate } = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total)
        })
    }, [])

    function navigationToClasses() {
        navigate('GiveClasse')
    }

    function navigateToStudy() {
        navigate('Study')
    }

    return (
        <View style={styles.landing}>
            <Image source={LandingImg} style={styles.banner} />

            <Text style={styles.title}>
                Seja Bem Vindo {'\n'}
                <Text style={styles.bold}> o que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsLanding}>
                <RectButton
                    style={[styles.button, styles.buttonPrimary]}
                    onPress={navigateToStudy}
                >
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
                Total de {totalConnections} conex(ões) já realizadas {''}
                <Image source={HeartIcon}></Image>
            </Text>
        </View>
    )
}

export default Landing