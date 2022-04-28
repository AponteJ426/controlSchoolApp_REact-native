import * as React from "react"
import { StyleSheet,View } from 'react-native'
import Svg, { Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SvgNotification = ({ width, height }) => (
 <View style={styles.svg}>
   <Svg width={wp(`${width}` + "%")} height={hp(`${height}` + "%")} fill="none">
  <Path
    clipRule="evenodd"
    d="M11 4.541c-2.881 1.148-4.923 3.9-4.923 7.136v6.303l-2.76 2.678a.983.983 0 0 0-.317.724v.13a1.99 1.99 0 0 0 2 1.979h5.025C10.252 25.465 11.945 27 14 27c2.056 0 3.75-1.535 3.974-3.51H23c1.105 0 2-.885 2-1.979v-.129a.983.983 0 0 0-.318-.724l-2.759-2.678v-6.303c0-3.235-2.042-5.988-4.923-7.136V3.474c0-1.29-1.004-1.925-1.398-2.12A3.642 3.642 0 0 0 14 1c-.52 0-1.088.1-1.602.354-.394.195-1.398.83-1.398 2.12v1.067Zm3.927-.572-.016.05a8.212 8.212 0 0 0-1.822 0 1.493 1.493 0 0 1-.016-.05H13v-.495c0-.273.447-.495 1-.495.553 0 1 .222 1 .495v.495h-.073Zm1.021 19.522h-3.896c.205.876 1 1.53 1.948 1.53s1.743-.654 1.948-1.53Zm-7.87-11.814c0-3.146 2.633-5.729 5.922-5.729 3.29 0 5.923 2.583 5.923 5.729H8.077Zm0 0h11.845v6.303c0 .532.216 1.041.6 1.414l2.182 2.117H5.295L7.77 19.11a.98.98 0 0 0 .307-.713v-6.72Z"
    fill="#fff"
    fillRule="evenodd"
  />
</Svg>
</View>
)
const styles = StyleSheet.create({
  svg:{
    marginTop:hp('1.5%')
  }
});

export default SvgNotification;
