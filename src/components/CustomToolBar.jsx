import { View, StyleSheet, Text, TouchableWithoutFeedback, TouchableNativeFeedback} from "react-native";

import SvgHome from "../assets/SvgHome";
import SvgConfig from "../assets/SvgConfig";
import SvgGraphic from "../assets/SvgGraphic";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function CustomToolBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>

      <TouchableNativeFeedback
        onpress={() => {
          navigation.navigate("Home");
        }}
        style={styles.item}
      >
        <View>
          <SvgHome />
          <Text style={styles.item}>Home</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onpress={() => {
          navigation.navigate("Graphic");
        }}
        style={styles.item}
      >
        <View>
          <SvgGraphic />
          <Text style={styles.item}>Graphic</Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableNativeFeedback
        onpress={() => {
          navigation.navigate("Settings");
        }}
        style={styles.item}
      >
        <View>
          <SvgConfig />
          <Text style={styles.item}>Settings</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    alignItems: "center",
    display: "flex",
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",

    elevation: 8,
  },
  item: {
    textAlign: "center",
    alignItems: "center",
    color: "#117CDF",
    fontSize: hp("1.2%"),
    fontWeight: "300",
  },
});


