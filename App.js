import { StyleSheet, View} from "react-native";
import BtnSensor from "./src/components/BtnSensor";
import Svgtemp from "./src/assets/svgTemp";
import SvgMotion from "./src/assets/SvgMotion";
import SvgSmoke from "./src/assets/SvgSmoke";
import AppBar from "./src/components/AppBar";
import NavBar from "./src/components/NavBar";

export default function App() { 

  const svgTemp = () => <Svgtemp height={3.5} width={6.1} />;
  const svgSmoke = () => <SvgSmoke height={3.4} width={7.6} />;
  const svgMotion = () => <SvgMotion height={3.2} width={6.7} />;

  return (
    <View style={styles.grid}>
      <AppBar/>
      <View style={styles.items}>
      <BtnSensor
        name={"sensor de temperatura"}
        svg={svgTemp()}
        />
      <BtnSensor
        name={"sensor de humo"}
        svg={svgSmoke()}
        />
      <BtnSensor
        name={"sensor de movimiento"}
        svg={svgMotion()}
        />
      </View>
    <NavBar/>
    </View>
  );
}
const styles = StyleSheet.create({
  grid: {
    display:'flex',
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#f4f4f4",
    flexDirection:'column',
    
    
  },items:{
    justifyContent: "center",
    flexDirection:'row',
    flexWrap:'wrap'
  }
});
