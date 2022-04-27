import * as React from "react";
import Svg, { Path } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SvgSmoke = ({ width, height }) => (
  <Svg width={wp(`${width}` + "%")} height={hp(`${height}` + "%")}>
    <Path
      d="M24.5 27.7v4.8h-3.2v-4.8c0-1.76-1.44-3.2-3.2-3.2h-4.8c-4.48 0-8-3.52-8-8 0-1.92.64-3.52 1.76-4.96C3.38 10.9.5 7.54.5 3.7c0-1.12.32-2.24.64-3.2h3.84c-.8.8-1.28 1.92-1.28 3.2 0 2.72 2.08 4.8 4.8 4.8h4.8v3.2c-2.72 0-4.8 2.08-4.8 4.8 0 2.72 2.08 4.8 4.8 4.8h4.8c3.52 0 6.4 2.88 6.4 6.4Zm1.44-16.16c3.68-.64 6.56-4 6.56-7.84 0-1.12-.32-2.24-.64-3.2h-3.84c.8.8 1.28 1.92 1.28 3.2 0 2.72-2.08 4.8-4.8 4.8h-1.92c.16.48.32.96.32 1.6 0 2.72-2.08 4.8-4.8 4.8v3.2c4.48 0 8 3.52 8 8v6.4h3.2v-6.4c0-4.32-2.4-8-6.08-9.92 1.44-1.12 2.4-2.72 2.72-4.64Z"
      fill="#117CDF"
    />
  </Svg>
);

export default SvgSmoke;
