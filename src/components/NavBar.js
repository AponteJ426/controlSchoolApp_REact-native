import {  StyleSheet } from 'react-native'
import React from 'react'
import SvgHome from '../assets/SvgHome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import SvgConfig from '../assets/SvgConfig';


export default function NavBar() {
  return (
    <LinearGradient
    colors={['#fff','#1890FF','#105BA0']}
    style={styles.container}>
 
<SvgHome/>
<SvgConfig/>
    </LinearGradient>
  )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        display: 'flex',
        height: hp('8%'),
        flexDirection: 'row',
        justifyContent: 'space-evenly',
   
    shadowOffset: {width: 1, height:0},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    shadowColor: '#000',
      },
    })
