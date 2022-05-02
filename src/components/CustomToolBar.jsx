import {
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
} from "react-native";

import SvgHome from "../assets/SvgHome";
import SvgConfig from "../assets/SvgConfig";
import SvgGraphic from "../assets/SvgGraphic";

import Theme from "../Theme";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const svgs = [<SvgHome/>, <SvgConfig/>, <SvgGraphic/>];

export default function CustomToolBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        
        if(route.name == "Notifications") return

        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });

        };

        return (
          <TouchableNativeFeedback
          key={route.key}
          accessibilityRole="button"
          accessibilityState={isFocused ? { selected: true } : {}}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
            style={styles.item}
          >
            <View>
              {svgs[index]}
              <Text style={styles.item}>{label}</Text>
            </View>
          </TouchableNativeFeedback>
        );
      })}
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
    color: Theme.Background.primary,
    fontSize: hp("1.2%"),
    fontWeight: "300",
  },
});
