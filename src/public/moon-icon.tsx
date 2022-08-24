import { motion, AnimatePresence } from "framer-motion";

const MoonIcon = () => (
  <AnimatePresence initial={false}>
    <motion.svg
      initial={{ y: -35 }}
      animate={{ y: 0 }}
      exit={{ y: 35 }}
      whileHover={{ scale: 1.1 }}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
    >
      <path
        id='dark-mode-night-moon-svgrepo-com'
        d='M13.111,24.608A12.847,12.847,0,0,1,6.855.54,1.711,1.711,0,0,1,8.7.653a1.689,1.689,0,0,1,.707,1.7l-.919-.071.869.156a11.069,11.069,0,0,0,7.217,12.5h0a11.183,11.183,0,0,0,5.987.375,1.725,1.725,0,0,1,1.88,2.453A12.851,12.851,0,0,1,13.111,24.608ZM7.619,2.137a11.082,11.082,0,1,0,15.2,14.922A13.07,13.07,0,0,1,16,16.607,12.851,12.851,0,0,1,7.619,2.137Z'
        transform='translate(-0.261 -0.323)'
        fill='#fff'
      />
    </motion.svg>
  </AnimatePresence>
);

export default MoonIcon;
