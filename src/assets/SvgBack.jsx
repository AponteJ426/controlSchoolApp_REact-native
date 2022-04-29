import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { StyleSheet,View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  
  const SvgBack = ({ width, height }) => (
    <View style={styles.svg}>
    <Svg 
    width={wp(`${width}` + "%")} 
    height={hp(`${height}` + "%")} 
    >
    <Path
      d="M16.5 7.462H3.826l4.6-5.494L7.195.5.5 8.5l6.697 8 1.228-1.468-4.599-5.494H16.5V7.462Z"
      fill="#fff"
    />
  </Svg>
  </View>
)
const styles = StyleSheet.create({
    svg:{
      marginTop:hp('2%')
    }
  });

export default SvgBack;