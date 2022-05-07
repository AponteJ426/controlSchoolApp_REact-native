import * as React from "react";
import { SvgCss } from 'react-native-svg';

const xml = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_151_31)">
<path d="M36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20Z" fill="#FEFCFD"/>
</g>
<path d="M17.8452 12.25C17.0833 12.25 16.4738 12.8372 16.4738 13.5711C16.4738 14.305 17.0833 14.8922 17.8452 14.8922C18.6071 14.8922 19.2167 14.305 19.2167 13.5711C19.2167 12.8372 18.6071 12.25 17.8452 12.25ZM22.1652 12.8372C22.1652 14.264 22.7536 15.6323 23.801 16.6413C24.8483 17.6502 26.2688 18.217 27.75 18.217V17.2408C26.5376 17.2408 25.3748 16.7769 24.5175 15.951C23.6602 15.1252 23.1786 14.0051 23.1786 12.8372H22.1652ZM24.1919 12.8372C24.1919 14.7307 25.7843 16.2647 27.75 16.2647V15.2812C26.3481 15.2812 25.2129 14.1876 25.2129 12.8372H24.1919ZM26.2262 12.8372C26.2262 13.2265 26.3867 13.5998 26.6725 13.8751C26.9583 14.1504 27.3459 14.305 27.75 14.305V12.8372H26.2262ZM16.2605 15.061C16.131 15.061 16.0014 15.083 15.8795 15.1197L11.75 16.3601V20.1766H13.1214V17.483L14.729 16.9986L11.75 28.25H13.1214L15.3081 22.2977L17.0833 24.5803V28.25H18.4548V23.5454L16.5576 20.2133L17.1138 18.1069L17.9367 19.4427H21.6548V18.1216H18.8967L17.3729 15.6775C17.1443 15.3106 16.7329 15.061 16.2605 15.061Z" fill="url(#paint0_linear_151_31)"/>
<defs>
<filter id="filter0_d_151_31" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_151_31"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_151_31" result="shape"/>
</filter>
<linearGradient id="paint0_linear_151_31" x1="19.75" y1="12.25" x2="19.75" y2="28.25" gradientUnits="userSpaceOnUse">
<stop stop-color="#0C589D"/>
<stop offset="1" stop-color="#117CDF"/>
</linearGradient>
</defs>
</svg>`;	

export default  function SvgTempNotification() {return  <SvgCss xml={xml}  />} 