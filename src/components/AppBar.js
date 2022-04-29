import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import SvgNotification from '../assets/SvgNotification';
import SvgBack from '../assets/SvgBack';

export default function AppBar({ title }) {
    const onpressback = () => console.log('back');
    const onpresshome = () => console.log('home');
    const onpressnotif = () => console.log('notification');
    return (
      
        <View style={styles.container}>
     
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
            </View>
            

    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor:'#117CDF',
        borderBottomLeftRadius: wp('15%'),
        borderBottomRightRadius: wp('15%'),
        display: 'flex',
        height: hp('15%'),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: wp('7%'),
        paddingRight: wp('7%'),
        shadowColor: "#fff",
        elevation: 5,
        
      },

    text: {
        color: '#fff',
        fontSize: hp('2.2%'),
        fontWeight: '300',
        marginTop: hp('0.2%'),
    

}
});