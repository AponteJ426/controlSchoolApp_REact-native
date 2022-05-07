import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import Icon from "../assets/Icon";


const styles = StyleSheet.create({
  container: {
    flexdirection: 'column',
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#black',

  }
})
export default function CardNotification() {
  return (
    <View>
      <View>
        <Icon></Icon>
      </View>
      <View style= {style.container}>
        <Text>Sensor de movimiento</Text>
        <Text>El sensor de movimiento ha detectado un movimiento</Text>
      </View>
    </View>
  );
}
