import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import SvgTempNotification from "../assets/SvgTempNotification";

export default function CardNotification() {
  return (
    <View>
      <View>
        <SvgTempNotification></SvgTempNotification>
      </View>
      <View style= {styles.container}>
        <Text>Sensor de movimiento</Text>
        <Text>El sensor de movimiento ha detectado un movimiento</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexdirection: 'column',
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#black',

  }
})
