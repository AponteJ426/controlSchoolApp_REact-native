import { StyleSheet, View } from "react-native";
import BtnSensor from "./src/components/BtnSensor";
import Svgtemp from "./src/assets/svgTemp";
import SvgMotion from "./src/assets/SvgMotion";
import SvgSmoke from "./src/assets/SvgSmoke";

function CardSensor() {
  const svgTemp = () => <Svgtemp height={3.5} width={6.1} />;
  const svgSmoke = () => <SvgSmoke height={3.4} width={7.6} />;
  const svgMotion = () => <SvgMotion height={3.2} width={6.7} />;

  return (
    <View style={styles.grid}>
      <View style={styles.items}>
        <BtnSensor name={"Temperatura"} svg={svgTemp()} />
        <BtnSensor name={"Humo"} svg={svgSmoke()} />
        <BtnSensor name={"Movimiento"} svg={svgMotion()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    flexDirection: "column",
    position: "relative",
    top: -10,
  },
  items: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
