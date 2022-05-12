import { ScrollView, StyleSheet} from "react-native";

import CardNotification from "../components/CardNotification";
import Theme from "../Theme";

const historyNotification = [
  {
    id: 1,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 2,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 3,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 4,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 5,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 6,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 7,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
  {
    id: 8,
    title: "Sensor de movimiento",
    text: "Activado",
    icon: 0,
    time: "12:00",
  },
];

function ListCardsNotification() {
  return (
    <ScrollView style={styles.container}>
      {historyNotification.map(({ id, title, text, icon, date }, index) => {
        return (
          <CardNotification
            key={id}
            title={title}
            text={text}
            icon={icon}
            date={date}
          />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.Background.secondary,
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 20,
    paddingHorizontal:5,
    shadowColor: "#000",
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
