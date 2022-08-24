import { motion } from "framer-motion";
const SearchIcon: React.FC<{ themeMode: string }> = ({ themeMode }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='19.398'
    height='19.398'
    viewBox='0 0 19.398 19.398'
    cursor={"pointer"}
  >
    <g id='loop-svgrepo-com' transform='translate(-2.864 -2.864)'>
      <motion.path
        initial={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
        animate={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
        id='Path_18'
        data-name='Path 18'
        d='M5.03,5.03a7.4,7.4,0,1,0,10.46,0A7.4,7.4,0,0,0,5.03,5.03Zm8.558,8.558a4.707,4.707,0,1,1,0-6.656A4.707,4.707,0,0,1,13.588,13.588Z'
        transform='translate(0)'
        fillRule='evenodd'
      />
      <motion.path
        initial={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
        animate={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
        id='Path_19'
        data-name='Path 19'
        d='M11.344,14.2A2.017,2.017,0,0,1,14.2,11.344L18.951,16.1A2.017,2.017,0,0,1,16.1,18.951Z'
        transform='translate(2.72 2.72)'
      />
    </g>
  </svg>
);

export default SearchIcon;
