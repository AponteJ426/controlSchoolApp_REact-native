
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';




export default function BtnSensor({name,svg}) {

  const onPress = () => console.log('on press button');

  return (
    
      <TouchableHighlight
        style={styles.card}
        onPress={onPress}
        underlayColor='#117CDF'>
        <View style={styles.card}>
          <View style={styles.svg}>
          {svg}
          </View>
          <Text
            style={styles.text}>
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
    fontSize: 11,
    margin: 10,
  },
  card: {
    width: 130,
    height: 154,
    margin: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 90,
    borderTopLeftRadius: 90,
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
  onPress: {
    backgroundColor: '#117CDF',
    color: '#fff'
  },

  svg: {
    width: wp('11.5%'),
    height: hp('5.5%'),
    margin: 5,
    borderRadius: 50,
    backgroundColor: '#fbfbfb',
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.62,
    elevation: 3,
  }
});
