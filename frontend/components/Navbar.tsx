import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { animated, useSpring } from "react-spring";
import { motion } from "framer-motion";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const linkItemStyles = `font-bold text-4xl m-4 transition-all`;

const Navbar = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const whileHoverProps = {
    scale: 1.3,
  }
  return (
    <animated.nav
      style={useSpring({
        to: { opacity: 1, marginTop: 15 },
        from: { opacity: 0, marginTop: -200 },
        delay: 100,
      })}
      className="flex justify-between m-4"
    >
      <div className={isOpen ? "hidden" : ""}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiMenu size={30} />
        </button>
      </div>
      <div
        className={`bg-teal-500 fixed top-0 left-0 transition-all ${
          isOpen ? "w-full h-screen" : "w-0 h-0"
        }`}
      >
        <div className={isOpen ? "flex justify-center items-center" : "hidden"}>
          <button
            className="fixed top-0 left-0 m-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenu size={30} />
          </button>
          <ul className="mt-40 flex flex-col text-center">
            <motion.li whileHover={whileHoverProps} className={linkItemStyles}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </motion.li>
            <motion.li whileHover={whileHoverProps} className={linkItemStyles}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </motion.li>
            <motion.li whileHover={whileHoverProps} className={linkItemStyles}>
              <Link href="/">
                <a>About</a>
              </Link>
            </motion.li>
            <motion.li whileHover={whileHoverProps} className={linkItemStyles}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </motion.li>
          </ul>
        </div>
      </div>

      <div className={isOpen ? "hidden" : ``}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
    </animated.nav>
  );
};
export default Navbar;
