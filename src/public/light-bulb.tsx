import { motion } from "framer-motion";

const LightBulbIcon = () => (
  <motion.svg
    initial={{ y: -35 }}
    animate={{ y: 0 }}
    exit={{ y: 35 }}
    whileHover={{ scale: 1.1 }}
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='28'
    viewBox='0 0 24 24'
  >
    <g id='Layer_88' data-name='Layer 88' transform='translate(-5.995 -1.995)'>
      <path
        id='Path_20'
        data-name='Path 20'
        d='M18,27H14a2,2,0,0,1-2-2V21.16a10,10,0,0,1-6-9.47A10.14,10.14,0,0,1,15.69,2h0A10,10,0,0,1,20,21.16V25A2,2,0,0,1,18,27ZM15.75,4A8.12,8.12,0,0,0,8,11.75a8,8,0,0,0,5.33,7.79,1,1,0,0,1,.67.94V25h4V20.48a1,1,0,0,1,.67-.94,8,8,0,0,0,2.9-13.28A7.85,7.85,0,0,0,15.75,4Z'
        fill='#353535'
      />
      <path
        id='Path_21'
        data-name='Path 21'
        d='M19,30H13a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z'
        fill='#353535'
      />
      <path
        id='Path_22'
        data-name='Path 22'
        d='M15,24V19.48a9,9,0,0,1-6-8.76c.09-3,1.71-4.93,4.52-6.32C9.49,4.47,7.12,8,7,11.72a9,9,0,0,0,6,8.76V25a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1H16A1,1,0,0,1,15,24Z'
        fill='#353535'
      />
    </g>
  </motion.svg>
);

export default LightBulbIcon;
