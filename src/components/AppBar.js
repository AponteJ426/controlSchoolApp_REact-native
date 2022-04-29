import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

import SvgNotification from '../assets/SvgNotification';
import SvgBack from '../assets/SvgBack';

export default function AppBar({ title }) {
    const onpressback = () => console.log('back');
    const onpresshome = () => console.log('home');
    const onpressnotif = () => console.log('notification');
    return (
        <LinearGradient
        colors={['#105BA0', '#1890FF','#fff']}
        style={styles.container}>
     
            <TouchableOpacity onPress={onpressback}>
                <SvgBack height={3.5} width={5.5} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onpresshome}>
                <Text style={styles.text}>
                    Home
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onpressnotif}>
                <SvgNotification height={3.5} width={5.5} />
            </TouchableOpacity>
            </LinearGradient>

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderBottomLeftRadius: wp('25%'),
        borderBottomRightRadius: wp('25%'),
      
        display: 'flex',
        height: hp('16%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: wp('7%'),
        paddingRight: wp('7%'),
        shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
    shadowColor: '#000',
      },

    text: {
        color: '#fff',
        fontSize: hp('2.2%'),
        fontWeight: '300',
        marginTop: hp('0.2%'),
    },
});