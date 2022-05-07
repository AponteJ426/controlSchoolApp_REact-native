import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import SvgTempNotification from "../assets/SvgTempNotification";

export default function CardNotification() {
  return (
    <View style={styles.outline}>
      <View>
        <SvgTempNotification style={styles.icon}></SvgTempNotification>
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
    flexDirection: "column",
    paddingLeft: 20,
    height: 100,
    color: "#000",
  },
  icon:{
    width: 10,
    height: 10,
  },
  outline:{
    borderWidth: 1,
    borderColor: "#000",
  }
})
