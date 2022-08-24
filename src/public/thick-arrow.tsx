import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  open: {
    y: [0, 0, -4, 0],
    x: [0, -4, 0, 0],
    opacity: [1, 0, 0, 1],
    rotateZ: [-90, -90, 0, 0],
  },
  closed: {
    y: [0, -4, 0, 0],
    x: [0, 0, -4, 0],
    opacity: [1, 0, 0, 1],
    rotateZ: [0, 0, -90, -90],
  },
};

const ThickArrow: React.FC<{ themeMode: string; isOpened?: boolean }> = ({
  themeMode,
  isOpened,
}) => {
  return (
    <AnimatePresence initial={false}>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        width='13'
        height='11'
        viewBox='0 0 13 11'
        variants={variants}
        animate={isOpened ? "open" : "closed"}
      >
        <motion.path
          initial={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
          animate={{ fill: themeMode === "light" ? "#b1bdc9" : "#fff" }}
          id='Polygon_1'
          data-name='Polygon 1'
          d='M6.5,0,13,11H0Z'
          transform='translate(13 11) rotate(180)'
        />
      </motion.svg>
    </AnimatePresence>
  );
};

export default ThickArrow;
