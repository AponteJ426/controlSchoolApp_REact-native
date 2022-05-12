import { StyleSheet, View } from "react-native";
import { Text } from "react-native";
import SvgTempNotification from "../assets/SvgTempNotification";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import Theme from "../Theme";

export default function CardNotification({ title, text, icon, date }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>{icons[icon]}</View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    width: wp("100%"),
    height: hp("10%"),
    flexDirection: "row",
    borderBottomWidth:2,
    borderBottomColor:Theme.Background.borderColor,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 20,
    height: 100,
    color: "#000",
    padding: 5,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: Theme.Background.primary,
  },
  text: {
    textAlign: "justify",
    width: wp("90%"),
  },
});

const icons = [<SvgTempNotification style={styles.icon} />];
