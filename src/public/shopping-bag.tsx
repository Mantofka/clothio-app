import { motion } from "framer-motion";

const ShoppingBag: React.FC<{ themeMode: string }> = ({ themeMode }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='23.994'
    height='26.253'
    viewBox='0 0 23.994 26.253'
  >
    <g id='bag-svgrepo-com' transform='translate(21.904 -9)'>
      <g id='Group_1' data-name='Group 1' transform='translate(-21.904 9)'>
        <motion.path
          animate={{ fill: themeMode === "light" ? "#353535" : "#fff" }}
          id='Path_1'
          data-name='Path 1'
          d='M32.117,104.311a1.029,1.029,0,0,0-.98-.911h-1.22a14.515,14.515,0,0,1,.842,3.975,3.138,3.138,0,0,1-2.973,3.279,3.14,3.14,0,0,1-2.973-3.241A13.251,13.251,0,0,0,23.3,103.4h-.421a13.356,13.356,0,0,0-1.518,4.013,3.14,3.14,0,0,1-2.973,3.241,3.141,3.141,0,0,1-2.973-3.279,14.515,14.515,0,0,1,.842-3.975H15.029a1.029,1.029,0,0,0-.98.911l-2.944,19.117a1.062,1.062,0,0,0,.98,1.275H34.1a1.043,1.043,0,0,0,.989-1.093C35.09,123.492,32.117,104.311,32.117,104.311Z'
          transform='translate(-11.096 -98.449)'
          fill='#353535'
        />
        <motion.path
          animate={{ fill: themeMode === "light" ? "#353535" : "#fff" }}
          id='Path_2'
          data-name='Path 2'
          d='M140.593,21.014a1.085,1.085,0,0,0,1.082-1.093c0-1.205,1.977-6.735,4.061-6.735s4.061,5.529,4.061,6.735a1.082,1.082,0,1,0,2.165,0c0-1.452-2.17-8.921-6.231-8.921s-6.231,7.469-6.231,8.921A1.1,1.1,0,0,0,140.593,21.014Z'
          transform='translate(-133.745 -11)'
          fill='#353535'
        />
      </g>
    </g>
  </svg>
);

export default ShoppingBag;
