 import React, {useState} from 'react'
 import { View, Text, ScrollView, SafeAreaView } from 'react-native'
 import {Stack, useRouter} from 'expo-router'
 import {COLORS, icons, images, size} from '../constants';
 import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

 const Home = () => {
  //set router to each page
  const router = useRouter();

   return (
      <SafeAreaView style={{flex:1, backgroundColor: COLORS.lightWhite}}>
         <Stack.Screen options={{headerStyle:{backgroundColor:COLORS.lightWhite}}} />
      </SafeAreaView>
   )
 }
 
 export default Home