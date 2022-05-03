import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import SvgNotification from "../assets/SvgNotification";
import SvgBack from "../assets/SvgBack";
import Theme from "../Theme";

export default function CustomNavBar({ title }) {
  const onpressback = () => console.log("back");
  const onpresshome = () => console.log("home");
  const onpressnotif = () => console.log("notification");
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onpressback}>
        <SvgBack height={4} width={10} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onpresshome}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onpressnotif}>
        <SvgNotification height={4} width={10} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#117CDF",
    borderBottomLeftRadius: wp("120%"),
    borderBottomRightRadius: wp("120%"),
    display: "flex",
    height: hp("22%"),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: wp("20%"),
    paddingRight: wp("20%"),
    shadowColor: "#fff",
    elevation: 5,
    width: wp("120%"),
    position: "relative",
    left: wp("-10%"),
  },

  text: {
    color: "#fff",
    fontSize: Theme.FontSize.xxxxxl,
    fontWeight: Theme.FontWeight.medium,
    marginTop: 0,
  },
});
