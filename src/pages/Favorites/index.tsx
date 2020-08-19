import React from 'react';

import './styles';
import { View } from 'react-native';
import styles from '../Favorites/styles';
import PageHeader from '../../Components/PageHeader';

function Favorites() {
    return (
        <View style={styles.favorites}>
            <PageHeader title="Meus Proffys favoritos"/>
        </View>
    )
}

export default Favorites;