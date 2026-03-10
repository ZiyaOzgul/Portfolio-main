import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import useIsMobile from "../hooks/useIsMobile";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const isMobile = useIsMobile(768);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I Know</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies.
        </h2>
      </motion.div>

      {isMobile ? (
        /* ── Mobile: static icon grid (no WebGL) ── */
        <div className="mt-20 flex flex-row flex-wrap justify-center gap-6">
          {technologies.map((technology) => (
            <motion.div
              key={technology.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center p-3 hover:shadow-glow-sm transition-shadow duration-300">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs font-medium text-secondary text-center">
                {technology.name}
              </p>
            </motion.div>
          ))}
        </div>
      ) : (
        /* ── Desktop: 3D balls ── */
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
      )}
    </>
  );
};

export default SectionWrapper(Tech, "");
