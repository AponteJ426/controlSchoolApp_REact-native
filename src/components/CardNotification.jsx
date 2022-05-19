import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import SvgTempNotification from "../assets/SvgTempNotification";

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
        <Text
          style={{
            ...styles.text,
            fontWeight: "bold",
            color: '#FF9C00',
          }}
        >
          {data != 0 ? data + "°C" : ''}
        </Text>
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
