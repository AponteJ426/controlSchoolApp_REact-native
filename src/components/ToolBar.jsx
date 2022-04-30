import React from "react";

import HomeScreen from "../screens/Home";
import GraphicScreen from "../screens/Graphic";
import SettingsScreen from "../screens/Settings";
import NavBar from "./CustomNavBar";

import { getHeaderTitle } from "@react-navigation/elements";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CustomToolBar from "./CustomToolBar";

const Tab = createBottomTabNavigator();

export default function toolBar(){
  return(
    <Tab.Navigator
        initialRouteName="Home"
        showLabel={false}
        screenOptions={{
          header: ({ navigation, route, options }) => {
            const title = getHeaderTitle(options, route.name);

            return <NavBar title={title} style={options.headerStyle} />;
          },
        }}
        tabBar={(props) => <CustomToolBar {...props} />}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Graphic" component={GraphicScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
  )
}

