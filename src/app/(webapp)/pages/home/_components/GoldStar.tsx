import { memo } from "react"

 function GoldStar(){
    return <>
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
  <path d="M9.58011 0.34375L11.7643 7.06601L18.8325 7.06601L13.1142 11.2206L15.2984 17.9429L9.58011 13.7883L3.86181 17.9429L6.04601 11.2206L0.327711 7.06601L7.39591 7.06601L9.58011 0.34375Z" fill="url(#paint0_linear_508_3095)"/>
  <defs>
    <linearGradient id="paint0_linear_508_3095" x1="-1.37802" y1="11.8295" x2="23.7119" y2="8.99771" gradientUnits="userSpaceOnUse">
      <stop stopColor="#FFD600"/>
      <stop offset="1" stopColor="#8C02B8"/>
    </linearGradient>
  </defs>
</svg>
    </>
}

export default memo(GoldStar);