import BtnSensor from "../components/BtnSensor";
import Svgtemp from "../assets/svgTemp";
import SvgMotion from "../assets/SvgMotion";
import SvgSmoke from "../assets/SvgSmoke";

import { initializeApp } from "firebase/app";
import React, { useState } from "react";

import { getDatabase, ref, onValue, set } from "firebase/database";
import { View, StyleSheet } from "react-native";

import firebaseConfig from "../database/configFirebase.js";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Setting a timer"]);
LogBox.ignoreLogs(['Remote debugger'])

export default function Home() {
  const svgTemp = () => <Svgtemp height={3.5} width={6.1} />;

  const svgSmoke = () => <SvgSmoke height={3.4} width={7.6} />;

  const svgMotion = () => <SvgMotion height={3.2} width={6.7} />;

  initializeApp(firebaseConfig);

  const [dataTemp, setdataTemp] = useState({});

  const db = getDatabase();

  const sendData = (name) => {
    let dataValue = 0;
    const reference = ref(db, "circuitos/" + name);
    onValue(reference, (snapshot) => {
      dataValue = snapshot.val();
    });

    dataValue == 1 ? true : false;
    set(reference, dataValue == 1 ? 0 : 1);
    setdataTemp({ ...dataTemp, [name]: dataValue });
  };

  return (
    <View style={styles.grid}>
      <View style={styles.items}>
        <BtnSensor
          name={"sensor de temperatura"}
          idName={'sensorTemp'}
          svg={svgTemp()}
          setFirebase={sendData}
          activate={dataTemp.sensorTemp}
        />
        <BtnSensor
          name={"sensor de humo"}
          svg={svgSmoke()}
          setFirebase={sendData}
          activate={dataTemp.sensorHumo}
          idName={'sensorHumo'}

        />
        <BtnSensor
          name={"sensor de movimiento"}
          svg={svgMotion()}
          setFirebase={sendData}
          activate={dataTemp.sensorMov}
          idName={'sensorMov'}

        />
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
  },
  items: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 150,
  },
});
