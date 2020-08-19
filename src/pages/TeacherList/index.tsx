import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../Components/PageHeader';
import style from './styles';

function TeacherList(){
    return(
        <View style={style.study}>
            <PageHeader title="Proffys Disponíveis"/>
        </View>
    )
}

export default TeacherList