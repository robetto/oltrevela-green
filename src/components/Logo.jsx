import React from "react";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -20, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: { duration: 0.6 },
  },
};
const groupVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};

const Logo = () => {
  return (
    <motion.div className="logo" variants={svgVariants} initial="hidden" animate="visible">
      <svg
        version="1.1"
        id="Livello_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1000 259"
        style={{ enableBackground: "new 0 0 1000 259" }}
        xmlSpace="preserve"
      >
        <path
          className="st0"
          d="M286.3,116c8.6,8.4,12.9,18.5,12.9,30.5c0,12-4.3,22.1-12.9,30.5c-8.6,8.4-19.1,12.6-31.2,12.6
	c-12.5,0-22.9-4.2-31.4-12.4c-8.5-8.3-12.7-18.5-12.7-30.7c0-12.1,4.3-22.3,12.7-30.6c8.5-8.3,18.9-12.4,31.4-12.4
	C267.2,103.4,277.7,107.6,286.3,116z M213.4,105.5c-11.7,11.2-17.5,24.9-17.5,40.9c0,15.7,5.8,29.3,17.5,40.7
	c11.7,11.5,25.6,17.1,41.7,17.1c16.4,0,30.4-5.7,42-17.1c11.5-11.4,17.2-25,17.2-40.7c0-16-5.7-29.7-17.2-40.9
	c-11.5-11.2-25.5-16.9-42-16.9C239,88.6,225.1,94.3,213.4,105.5z"
        />
        <polygon
          className="st0"
          points="342.4,201 342.4,55.1 327.2,65.4 327.3,201 "
        />
        <polygon
          className="st0"
          points="374.2,201.7 389.3,201.7 389.3,107.1 409.2,107.1 409.2,92.3 389.3,92.3 389.3,54.4 374.2,61.6 
	374.2,92.3 353.9,92.3 353.9,107.1 374.2,107.1 "
        />
        <path
          className="st0"
          d="M466,88.6c-12.4,0-22.9,4.3-31.3,12.9l-12.6-9.9V201h15.1v-69.6c0-7.7,2.7-14.2,8.1-19.8
	c5.4-5.5,12.3-8.3,20.7-8.3c3.1,0,5.8,0.4,8,1.1l6.9-13.1C476.4,89.5,471.5,88.6,466,88.6z"
        />
        <path
          className="st0"
          d="M498.5,146.4c0-12.1,4.2-22.3,12.7-30.6c8.5-8.3,18.9-12.4,31.4-12.4c10.9,0,20.6,3.5,28.8,10.4l-65.5,56.7
	C501,163.2,498.5,155.2,498.5,146.4z M565.5,183.4c-6.9,4.1-14.5,6.1-22.9,6.1c-10.1,0-18.9-2.8-26.5-8.6l76.5-65.8
	c-5-7.7-12-14-21-19c-9.1-5-18.6-7.5-28.9-7.5c-16.1,0-30,5.7-41.6,16.9c-11.7,11.2-17.5,24.9-17.5,40.9c0,15.7,5.8,29.3,17.5,40.7
	c11.7,11.5,25.5,17.1,41.6,17.1c11.2,0,21.4-2.8,30.7-8.4c9.3-5.6,16.4-13,21.4-22.1l-13.1-7.2C577.7,173.7,572.4,179.3,565.5,183.4
	z"
        />
        <polygon
          className="st1"
          points="641.9,163.9 716.5,62 737.6,52.9 641.9,201.9 600.3,99.3 611.6,89 "
        />
        <path
          className="st1"
          d="M717.1,146.4c0-12.1,4.2-22.3,12.7-30.6s18.9-12.4,31.4-12.4c11,0,20.6,3.5,28.8,10.4l-65.5,56.7
	C719.5,163.2,717.1,155.2,717.1,146.4z M784.1,183.4c-6.9,4.1-14.5,6.1-22.9,6.1c-10,0-18.9-2.8-26.5-8.6l76.5-65.8
	c-5-7.7-12-14-21-19c-9.1-5-18.6-7.5-28.9-7.5c-16.1,0-30,5.7-41.6,16.9S702,130.4,702,146.4c0,15.7,5.8,29.3,17.5,40.7
	c11.7,11.5,25.6,17.1,41.6,17.1c11.2,0,21.4-2.8,30.7-8.4c9.3-5.6,16.4-13,21.4-22.1l-13.1-7.2C796.3,173.7,790.9,179.3,784.1,183.4
	z"
        />
        <polygon
          className="st1"
          points="841.1,201 841.1,55.1 826,68 826,201 "
        />
        <path
          className="st1"
          d="M943.1,116c8.6,8.4,12.9,18.5,12.9,30.5c0,12-4.3,22.1-12.9,30.5c-8.6,8.4-19.1,12.6-31.3,12.6
	c-12.4,0-22.9-4.2-31.4-12.4c-8.5-8.3-12.7-18.5-12.7-30.7c0-12.1,4.2-22.3,12.7-30.6s18.9-12.4,31.4-12.4
	C924,103.4,934.4,107.6,943.1,116z M971,91.6l-16.4,15c-11.9-11.9-26.2-18-42.8-18c-16.1,0-30,5.7-41.6,16.9s-17.5,24.9-17.5,40.9
	c0,15.7,5.8,29.3,17.5,40.7c11.7,11.5,25.5,17.1,41.6,17.1c16.6,0,30.9-5.9,42.8-17.9L971,201V91.6z"
        />
        <motion.g variants={groupVariants}>
          <defs>
            <path
              id="SVGID_1_"
              d="M29,134.4c0-38.9,32-70.5,71.6-70.5c39.5,0,71.5,31.5,71.5,70.5s-32,70.5-71.5,70.5
			C61,204.9,29,173.3,29,134.4z"
            />
          </defs>
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: "visible",
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "#003366",
            }}
          />
          <clipPath id="SVGID_2_">
            <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
          </clipPath>
          <path
            className="st2"
            d="M116.1,63.1c-16.3,27.6-37,68-41,101.5c0,0.2,47.8-9.4,47.8-9.4s2.7,2.2,2.4,2.2s2.7,5,2.6,5.3
		c-0.1,0.2-69.7,14.4-69.7,14.4l-2.7-1.6c0,0,4.4-47.7,53.8-113.9"
          />
          <path
            className="st2"
            d="M146.5,75.7c-2.7,20.9-0.5,45.1,13.4,68.3c0.3,0.5-71.9,14.4-71.9,14.4l-2.2-2.1c0,0,7.8-43.7,34.7-91.5"
          />
          <path
            className="st2"
            d="M54.7,180.8c1.1,0,34.3,5.5,79.1-19.7c1.6-0.9,0.5,2.1,0.5,2.1s-45.2,31.9-81.1,32.2c-0.1,0-1.6-2.4-1.6-2.4
		S53.6,180.8,54.7,180.8z"
          />

          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: "visible",
              fillRule: "evenodd",
              clipRule: "evenodd",
              fill: "none",
              stroke: "#003366",
              strokeMiterlimit: 10,
            }}
          />
        </motion.g>
      </svg>
    </motion.div>
  );
};

export default Logo;
