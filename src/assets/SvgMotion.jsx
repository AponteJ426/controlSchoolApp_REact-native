import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SvgMotion = ({ width, height }) => (
  <Svg width={wp(`${width}` + "%")} height={hp(`${height}` + "%")} fill="none">
    <Path
      d="M12.19 0c-1.523 0-2.742 1.174-2.742 2.642s1.219 2.642 2.742 2.642c1.524 0 2.743-1.174 2.743-2.642S13.714 0 12.191 0Zm8.64 1.174c0 2.854 1.177 5.59 3.272 7.609 2.095 2.017 4.936 3.15 7.898 3.15V9.983c-2.425 0-4.75-.928-6.465-2.58-1.715-1.652-2.678-3.892-2.678-6.228h-2.026Zm4.054 0c0 3.787 3.185 6.855 7.116 6.855V6.062c-2.804 0-5.074-2.187-5.074-4.888h-2.042Zm4.068 0c0 .779.321 1.526.893 2.076.572.55 1.347.86 2.155.86V1.174h-3.048ZM9.021 5.622a2.66 2.66 0 0 0-.762.117L0 8.22v7.633h2.743v-5.387l3.215-.969L0 32h2.743l4.373-11.905 3.55 4.566V32h2.743v-9.41l-3.794-6.663 1.113-4.213 1.645 2.671h7.437v-2.642h-5.517l-3.047-4.888A2.62 2.62 0 0 0 9.02 5.622Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16}
        y1={0}
        x2={16}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0C589D" />
        <Stop offset={1} stopColor="#117CDF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default SvgMotion;
