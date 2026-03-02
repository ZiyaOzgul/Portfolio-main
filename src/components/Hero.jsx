import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const roles = [
  "Full Stack Developer",
  "Mobile Developer",
  "React Developer",
  "Node.js Developer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent animate-glow-pulse" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-gradient">Ziya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop interfaces, mobile applications{" "}
            <br className="sm:block hidden" />
            web servers and web applications
          </p>
          <div className="mt-4 flex items-center gap-2">
            <div className="h-px w-8 bg-accent/50" />
            <p className="text-base font-medium text-secondary">
              <span className="text-accent">{displayText}</span>
              <span className="typing-cursor" />
            </p>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-20 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-9 h-16 rounded-3xl border-2 border-accent/40 flex items-start justify-center p-2 hover:border-accent/80 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-accent mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
