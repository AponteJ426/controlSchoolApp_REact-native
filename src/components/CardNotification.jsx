import { StyleSheet, View,ScrollView,Text } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Theme from "../Theme";

export default function CardNotification({
  title,
  text,
  svgSensorSmoke = () => {},
  data = 0,

}) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{svgSensorSmoke()}</View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        {text=='Temperatura:'&&data.T!=0&&(
    <ScrollView >
    <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            color: '#FF9C00',
          }}
        >
          {data != 0 ? data.T + "°C"+ "   "+data.F + "°F":"conectando a el Sensor"}
        </Text>
        <Text style={styles.text}>Humedad:</Text>
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            color: '#FF9C00',
          }}
        >{data != 0 ? data.H+'%':"conectando a el Sensor"}
        </Text>
        <Text style={styles.text}>Sensación Térmica:</Text>
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            color: '#FF9C00',
          }}
        >{data != 0 ? data.HIC+'°C    '+data.HIF+ "°F":"conectando a el Sensor"}
        </Text>
    </ScrollView>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: wp("100%"),
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: Theme.Background.borderColor,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    color: "#000",
    borderRadius: 20,
    padding: 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "flex-end",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.Background.primary,
    padding: 10,
  },
  text: {
    fontSize: wp("3%"),
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
  },
});
