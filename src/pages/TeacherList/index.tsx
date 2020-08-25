import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'
import PageHeader from '../../Components/PageHeader';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import style from './styles';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isFilterVisible, setFilter] = useState(false);

    const [subject, setSuject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                })

                setFavorites(favoritedTeachersIds);
            }
        })
    }

    useEffect(() => {
        loadFavorites()
    }, [])

    function toogleIFilterVisible() {
        return (
            setFilter(!isFilterVisible)
        )
    }

    async function handleFilterSubmit() {
        loadFavorites();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        })

        setFilter(false)
        setTeachers(response.data)
    }

    return (
        <View style={style.study}>
            <PageHeader
                title="Proffys Disponíveis"
                headerRight={(
                    <BorderlessButton onPress={toogleIFilterVisible}>
                        <Feather name="filter" size={20} color="#fff" />
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={style.serchForm}>

                        <Text style={style.label}>Matéria</Text>

                        <TextInput
                            style={style.input}
                            value={subject}
                            onChangeText={text => setSuject(text)}
                            placeholder="Qual a matéria?"
                            placeholderTextColor='#c1bccc'
                        />

                        <View style={style.inputGroup}>
                            <View style={style.inputBlock}>
                                <Text style={style.label}>Dia da matéria</Text>

                                <TextInput
                                    style={style.input}
                                    value={week_day}
                                    onChangeText={text => setWeek_day(text)}
                                    placeholder="Dia da semana?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>

                            <View style={style.inputBlock}>
                                <Text style={style.label}>Horário</Text>

                                <TextInput
                                    style={style.input}
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholder="A que hora?"
                                    placeholderTextColor='#c1bccc'
                                />
                            </View>
                        </View>
                        <RectButton style={style.submitbutton} onPress={handleFilterSubmit}>
                            <Text style={style.submitbuttonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>
            <ScrollView
                style={style.teacherlist}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)}
                        //}
                        />
                    )
                })}
            </ScrollView>
        </View>
    );
}

export default TeacherList;