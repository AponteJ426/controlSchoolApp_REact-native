import { View,Button,StyleSheet} from "react-native";


export default function Settings ({navigation}){
    return(
    <View
    style={styles.test}>
      <Button
        title="ir a inicio"
        onPress={() => navigation.navigate('Inicio')}
      />
      <Button
        title="ir a Grafícas"
        onPress={() => navigation.navigate('Grafícas')}
      />
      </View>)

}
const styles = StyleSheet.create({
  test:{
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:'center'      
  },
  Button:{}
})