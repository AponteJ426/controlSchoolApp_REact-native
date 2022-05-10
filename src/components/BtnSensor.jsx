
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export default function BtnSensor({name,svg,setFirebase,activate,idName}) {

  const onPress = () => {setFirebase(idName)}


  return (
    
      <TouchableHighlight
        style={styles.card}
        onPress={onPress}
        underlayColor='#117CDF'>
        <View style={activate?{...styles.card, backgroundColor: '#117CDF'}:styles.card}>
          <View style={styles.svg}>
          {svg}
          </View>
          <Text
            style={activate?{...styles.text, color: '#fff'}:styles.text}>
            {name}
          </Text>
        </View>
      </TouchableHighlight>
   
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    color: "#117CDF",
    fontSize:wp('3%') ,
    margin: wp('0.1%'),
    padding:wp('3%'),
  },
  card: {
    width: wp('27%'),
    height: hp('17%'),
    margin:  hp('4%'),
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: wp('40%'),
    borderTopLeftRadius: wp('40%'),
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5,
  },


  svg: {
    width: wp('11.5%'),
    height: hp('5.5%'),
    marginTop: hp('2%'),
    borderRadius: wp('50%'),
    backgroundColor: '#fbfbfb',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width:2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.62,
    elevation: 3,
  }
});
