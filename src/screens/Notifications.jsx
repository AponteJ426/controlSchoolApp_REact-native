import SvgSmoke from "../assets/SvgSmoke";
import SvgAllGood from "../assets/SvgAllGood";


import ListCardsNotification from "../components/ListCardsNotification";
import { initializeApp } from "firebase/app";
import React, { useState, useEffect } from "react";

import { getDatabase, ref, onValue, set } from "firebase/database";

import firebaseConfig from "../database/configFirebase.js";
import Svgtemp from "../assets/svgTemp";

export default function Notifications() {
  const [dataSensorHumo, setdataSensorHumo] = useState(0);
  const [dataSensorTemp, setdataSensorTemp] = useState(0);


  const svgSensorSmoke = () => <SvgSmoke height={3.4} width={7.6} />;
  const svgSensortemp = () => <Svgtemp height={3.4} width={7.6} />;
  const svgSensorAllGood = () => <SvgAllGood height={3.4} width={7.6} />;


  useEffect(() => {
    initializeApp(firebaseConfig);

    const db = getDatabase();
    const referenceOne = ref(db, "data/sensorHumo");
    onValue(referenceOne, (snapshot) => {
      setdataSensorHumo(snapshot.val());
    });

    const referenceTwo= ref(db, "data/sensorTemp/T");
    onValue(referenceTwo, (snapshot) => {
      setdataSensorTemp(snapshot.val());
    });

  

  }, []);

  if (dataSensorHumo != 0) {
    return (
      <ListCardsNotification
        svgSensorSmoke={svgSensorSmoke}
        title={"sensor de humo activo"}
        text={" '¡ATENCION!' el sensor de humo a detectado un gas peligroso"}
      />
    );
} if (dataSensorTemp!=0) {

    return (
      <ListCardsNotification
      svgSensorSmoke={svgSensortemp}
        title={"Sensor temperatura activo"}
        text={"Temperatura:"}
        data={dataSensorTemp}
      />
    );
  }
   else {
    return (
      <ListCardsNotification
      svgSensorSmoke={svgSensorAllGood}
        title={"No hay sensores Activos Tranqui"}
        text={"Todo esta Normal :)"}
      />);
    
  }
}
