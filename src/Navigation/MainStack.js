
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import StyleNavBar from "../components/StyleNavBar";
import CustomNavBar from "../components/CustomNavBar";

import SettingsScreen from "../screens/Settings";
import HomeScreen from "../screens/Home";
import GraphicsScreen from "../screens/Graphics";

import { getHeaderTitle } from "@react-navigation/elements";

import SvgHome from "../assets/SvgHome";
import SvgConfig from "../assets/SvgConfig";
import SvgGraphic from "../assets/SvgGraphic";
import Notifications from "../screens/Notifications";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


const MainStack = () => {
    return (
        <NavigationContainer>

          
            <Tab.Navigator
                initialRouteName="inicio"
                screenOptions={{
                    
                    header: ({ navigation, route, options }) => {
                        const title = getHeaderTitle(options, route.name);
                        return <CustomNavBar title={title} style={options.headerStyle} />;
                    },
                }}
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
                     <Tab.Screen
                    name="Notificaciones"
                    component={Notifications}
                    options={{
                        title: "Notificaciones",
                        tabBarIcon: () =>
                            (null)
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainStack;

