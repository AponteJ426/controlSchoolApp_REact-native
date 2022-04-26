
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Svgtemp from "./src/assets/svgTemp";


export default function App() {

  const onPress = () => console.log('on press button');

  return (
    <View style={styles.basic}>
      <TouchableHighlight
      style={styles.card}
        onPress={onPress}
        underlayColor='#117CDF'>
        <View style={styles.card}>
          <View style={styles.svg}>
            <Svgtemp width={32} height={32} />
          </View>
          <Text
            style={styles.text}>
            Sensor de Temperatura
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#f4f4f4'
  },
  text: {
    textAlign: 'center',
    fontFamily:'Roboto',
    color: "#117CDF",
    fontSize: 11,
    margin: 10,
  },
  card: {
  width: 130,
  height: 154,
    margin: 10,
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
  onPress:{
    backgroundColor:'#117CDF',
    color:'#fff'
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
