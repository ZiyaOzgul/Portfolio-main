import React, { useState, useEffect } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, logo, menu } from "../assets";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full py-4 fixed top-0 z-20 transition-all duration-500 ${
        scrolled ? "glass shadow-glow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link
          to={"/"}
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 group"
        >
          <img
            src={logo}
            alt="logo"
            className="w-14 h-9 object-contain transition-transform duration-300 group-hover:scale-110"
          />
          <p className="text-white px-1 text-[18px] font-bold cursor-pointer tracking-tight">
            Ziya
          </p>
          <span className="border-l border-accent/30 px-2 text-secondary text-sm sm:block hidden">
            Developer
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navLinks.map((item) => {
            const isContact = item.id === "contact";
            const isCV = item.id === "cv";

            if (isCV) {
              return (
                <Link
                  to="/cv"
                  key={item.id}
                  onClick={() => setActive(item.title)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    active === item.title
                      ? "text-white"
                      : "text-secondary hover:text-white"
                  }`}
                >
                  {active === item.title && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{item.title}</span>
                </Link>
              );
            }

            return (
              <a
                href={`/#${item.id}`}
                key={item.id}
                onClick={() => setActive(item.title)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === item.title
                    ? "text-white"
                    : "text-secondary hover:text-white"
                }`}
              >
                {active === item.title && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-accent/10 rounded-lg border border-accent/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Nav */}
        <div className="sm:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="w-10 h-10 flex items-center justify-center rounded-lg glass cursor-pointer"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-5 h-5 object-contain"
            />
          </button>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute right-4 top-16 w-48 glass rounded-xl p-4 flex flex-col gap-2 shadow-glow"
              >
                {navLinks.map((item) => {
                  if (item.id === "cv") {
                    return (
                      <Link
                        to="/cv"
                        key={item.id}
                        onClick={() => {
                          setToggle(false);
                          setActive(item.title);
                        }}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                          active === item.title
                            ? "text-white bg-accent/10"
                            : "text-secondary hover:text-white hover:bg-white/5"
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  }
                  return (
                    <a
                      href={`/#${item.id}`}
                      key={item.id}
                      onClick={() => {
                        setToggle(false);
                        setActive(item.title);
                      }}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        active === item.title
                          ? "text-white bg-accent/10"
                          : "text-secondary hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.title}
                    </a>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
