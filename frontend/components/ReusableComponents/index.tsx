import React from "react";
import { motion } from "framer-motion";

interface LetterProps {
  letter: string;
}

export const Letter = ({ letter }: LetterProps) => {
  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <motion.div
      whileTap={{
        scale: 1.2,
        transition: { duration: 0.2 },
        color: generateColor(),
      }}
      className="inline-block"
      whileHover={{
        scale: 1.2,
        color: generateColor(),
        transition: { duration: 0.2 },
      }}
    >
      {letter}
    </motion.div>
  );
};

interface SpinnyLetterProps {
  letter: string;
}
export const SpinnyLetter = ({ letter }: SpinnyLetterProps) => {
  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <motion.div
      whileTap={{
        rotate: 360,
        scale: 1.2,
        transition: { duration: 0.2 },
        color: generateColor(),
      }}
      className="inline-block"
      whileHover={{
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.2 },
        color: generateColor(),
      }}
    >
      {letter}
    </motion.div>
  );
};
