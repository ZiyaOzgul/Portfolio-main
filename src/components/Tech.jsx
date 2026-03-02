import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I Know</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 cursor-pointer relative group"
            key={technology.name}
            onMouseEnter={() => setHoveredTech(technology.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: hoveredTech === technology.name ? 1 : 0,
                y: hoveredTech === technology.name ? 0 : 10,
              }}
              className="text-center text-xs font-medium text-secondary mt-2 absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap"
            >
              {technology.name}
            </motion.p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
