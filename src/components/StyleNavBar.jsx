import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 64,
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      {state.routes.map((route, index) => {
        
        if (route.name == "Notificaciones") {
          return;
        }

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
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const tintColor = isFocused ? "#117CDF" : "#fff";

        const backgroundColor = isFocused ? "#f4f4f4" : "#fff";

        return (
          <TouchableOpacity
            key={index}
            style={{
              flexDirection: "row",
              margin: 4,
              height: 50,
              padding: 8,
              paddingRight: 16,
              paddingLeft: 16,
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: backgroundColor,
            }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            testID={options.tabBarTestID}
            onPress={onPress}
          >
            {options.tabBarIcon !== undefined &&
              options.tabBarIcon({ color: "#fff" })}
            {isFocused && (
              <Text
                style={{
                  marginLeft: 8,
                  color: tintColor,
                }}
              >
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
