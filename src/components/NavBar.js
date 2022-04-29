import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import SvgHome from '../assets/SvgHome'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SvgConfig from '../assets/SvgConfig';
import SvgGraphic from '../assets/SvgGraphic';


export default function NavBar() {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <SvgGraphic />
        <Text style={styles.item}>
          Graphic
        </Text>
        </View>
      <View style={styles.item}>
        <SvgHome />
        <Text style={styles.item}>
          Home
        </Text>
      </View>
      <View style={styles.item}>
        <SvgConfig />
        <Text style={styles.item}>
          Config
        </Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    alignItems: 'center',
    display: 'flex',
    height: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
  
    elevation: 8,
  },
  item: {
    textAlign: 'center',
    alignItems: 'center',
    color: '#117CDF',
    fontSize:hp('1.2%'), 
    fontWeight: '300',
  }
})
