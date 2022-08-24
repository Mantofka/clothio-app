import { motion } from "framer-motion";

const ProfileIcon: React.FC<{ themeMode: string }> = ({ themeMode }) => (
  <motion.svg
    whileHover={{ scale: 1.05 }}
    id='account-circle-svgrepo-com'
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 33.195 33.195'
  >
    <path id='Path_3' data-name='Path 3' d='M0,0H33.2V33.2H0Z' fill='none' />
    <motion.path
      animate={{ fill: themeMode === "light" ? "#353535" : "#fff" }}
      id='Path_4'
      data-name='Path 4'
      d='M15.949,29.9A13.949,13.949,0,1,1,29.9,15.949,13.949,13.949,0,0,1,15.949,29.9ZM8.993,24.675a11.162,11.162,0,0,0,14.164-.206,9.764,9.764,0,0,0-14.164.206Zm-1.949-2a12.556,12.556,0,0,1,18-.259,11.159,11.159,0,1,0-18,.261Zm8.9-5.328a5.58,5.58,0,1,1,5.58-5.58A5.58,5.58,0,0,1,15.949,17.344Zm0-2.79a2.79,2.79,0,1,0-2.79-2.79A2.79,2.79,0,0,0,15.949,14.554Z'
      transform='translate(0.649 0.649)'
      fill='#353535'
    />
  </motion.svg>
);

export default ProfileIcon;
