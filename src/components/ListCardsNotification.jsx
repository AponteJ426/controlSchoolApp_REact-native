import { ScrollView, StyleSheet } from "react-native";

import CardNotification from "../components/CardNotification";

import Theme from "../Theme";
import SvgSmoke from "../assets/SvgSmoke";
import SvgAllGood from "../assets/SvgAllGood";

import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";

import { getDatabase, ref, onValue } from "firebase/database";

import firebaseConfig from "../database/configFirebase.js";
import Svgtemp from "../assets/svgTemp";
import SvgMov from "../assets/SvgMotion";


function ListCardsNotification() {
  const [dataSensorHumo, setdataSensorHumo] = useState(0);
  const [dataSensorTemp, setdataSensorTemp] = useState(0);
  const [dataSensorMov, setdataSensorMov] = useState(0);


  const svgSensorSmoke = () => <SvgSmoke height={3.4} width={7.6} />;
  const svgSensortemp = () => <Svgtemp height={3.4} width={7.6} />;
  const svgSensorAllGood = () => <SvgAllGood height={3.4} width={7.6} />;
  const svgSensorMov = () => <SvgMov height={3.4} width={7.6} />;

  useEffect(() => {
    initializeApp(firebaseConfig);

    const db = getDatabase();
    const referenceOne = ref(db, "data/sensorHumo");
    onValue(referenceOne, (snapshot) => {
      setdataSensorHumo(snapshot.val());
    });

    const referenceTwo = ref(db, "data/sensorTemp");
    onValue(referenceTwo, (snapshot) => {
      setdataSensorTemp(snapshot.val());
    });

    const referenceThree = ref(db, "data/sensorMov");
    onValue(referenceThree, (snapshot) => {
      setdataSensorMov(snapshot.val());
    });
  }, []);
  
  return (
    <ScrollView style={styles.container}>
      {dataSensorTemp.T != 0 && (
        <CardNotification
        svgSensorSmoke={svgSensortemp}
        title={"Sensor temperatura activo"}
        text={"Temperatura:"}
        data={dataSensorTemp}
    
        />
        )}
        {dataSensorHumo != 0 && (
          <CardNotification
            svgSensorSmoke={svgSensorSmoke}
            title={"sensor de humo activo"}
            text={" '¡ATENCION!' el sensor de humo a detectado un gas peligroso"}
          />
        )}
        {dataSensorMov != 0 && (
        <CardNotification
          svgSensorSmoke={svgSensorMov}
          title={"Sensor movimiento activo"}
          text={"El sensor ha activado "}
        />
      )}
      {dataSensorTemp.T == 0 && dataSensorHumo == 0 && dataSensorMov == 0 &&(
        <CardNotification
          svgSensorSmoke={svgSensorAllGood}
          title={"No hay sensores Activos Tranqui"}
          text={"Todo esta Normal :)"}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Background.secondary,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    paddingHorizontal: 5,
    shadowColor: "#000",
    borderRadius: 30,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default ListCardsNotification;
