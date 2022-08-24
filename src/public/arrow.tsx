import { motion } from "framer-motion";

const Arrow: React.FC<{ isHovered: boolean }> = ({ isHovered }) => (
  <motion.svg
    initial={{ opacity: 0, x: -30, display: "none" }}
    animate={
      isHovered && {
        opacity: 1,
        x: 0,
        display: "inline",
        transition: { delay: 0.2 },
      }
    }
    exit={{ opacity: 0, x: 30, display: "none" }}
    width='24'
    height='24'
    xmlns='http://www.w3.org/2000/svg'
    fillRule='evenodd'
    clipRule='evenodd'
  >
    <path
      d='M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z'
      fill='#fff'
    />
  </motion.svg>
);

export default Arrow;
