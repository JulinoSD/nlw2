import React, { useState, useCallback } from 'react';
import { View, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import TeacherItem, { Teacher } from '../../Components/TeacherItem';
import styles from '../Favorites/styles';
import PageHeader from '../../Components/PageHeader';


import './styles';


function Favorites() {
    const [favorites, setFavorites] = useState([]);
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                console.log(favoritedTeachers)

                setFavorites(favoritedTeachers);
            }
        })
    }

    useFocusEffect(
        useCallback(() => {
            loadFavorites();
        }, [])
    )

    return (
        <View style={styles.favorites}>
            <PageHeader title="Meus Proffys favoritos" />

            <ScrollView
                style={styles.teacherlist}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;