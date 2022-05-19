import { ScrollView, StyleSheet} from "react-native";

import CardNotification from "../components/CardNotification";
import Theme from "../Theme";


function ListCardsNotification({title,text,svgSensorSmoke ,data}) {
  return (
    <ScrollView style={styles.container}>
        <CardNotification 
            title={title}
            text={text}
            svgSensorSmoke={svgSensorSmoke}
            data={data}
          />
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
    paddingHorizontal:5,
    shadowColor: "#000",
    borderRadius:30,
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
