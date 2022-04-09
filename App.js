import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={{...styles.basic, ...styles.card}}>
      <View style={styles.basic}>
        <Image
          style={{ width: 48, height: 48 }}
          source={require("./src/assets/tempSensor.svg")}
        />
      </View>
      <Text style={styles.text}>Sensor de Temperatura</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  basic: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }, 
  text: {
    color: "#117CDF",
  }, 
  card:{
    width: 105,
    height: 124,
    backgroundColor: "red",
  }
});
