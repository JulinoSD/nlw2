import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold, useFonts } from '@expo-google-fonts/poppins';
// import Landing from './src/pages/Landing';
import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoad] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  if (!fontsLoad) {
    return <AppLoading />;
  } else {
    return (
      <>
        {/* <Landing/> */}
        <AppStack/>
        <StatusBar style="auto" />
      </>
    );
  }
}
