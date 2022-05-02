
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StyleNavBar from "../components/StyleNavBar";

import SettingsScreen from "../screens/Settings";
import HomeScreen from "../screens/Home";
import GraphicsScreen from "../screens/Graphics";

import SvgHome from "../assets/SvgHome";
import SvgConfig from "../assets/SvgConfig";
import SvgGraphic from "../assets/SvgGraphic";



const Tab = createBottomTabNavigator();

const MainStack = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="inicio"
                tabBar={props => <StyleNavBar {...props} />}
            >
                <Tab.Screen
                    name="Grafícas"
                    component={GraphicsScreen}
                    options={{
                        title: "Grafícas",
                        tabBarIcon: () =>
                            (<SvgGraphic />)
                    }}
                />
                <Tab.Screen
                    name="Inicio"
                    component={HomeScreen}
                    options={{
                        title: "Inicio",
                        tabBarIcon: () => (
                            <SvgHome />)
                    }}
                />
                <Tab.Screen
                    name="Configuración"
                    component={SettingsScreen}
                    options={{
                        title: "Configuración",
                        tabBarIcon: () =>
                            (<SvgConfig />)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;

