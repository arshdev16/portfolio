import React from "react";
import { motion } from "framer-motion";
import Svg from '../../public/wave2mobile.svg';

type Props = {};

const SectionOne = (props: Props) => {
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
      className="flex flex-col items-center justify-start"
      initial={{ opacity: 0, y:-100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <h1 className="font-bold text-5xl m-3 h-10">
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
          H
        </motion.div>
        <motion.div
          whileTap={{
            scale: 1.2,
            transition: { duration: 0.2 },
            color: generateColor(),
          }}
          className="inline-block"
          whileHover={{
            scale: 1.2,

            transition: { duration: 0.2 },
            color: generateColor(),
          }}
        >
          i
        </motion.div>
        <motion.div
          whileTap={{
            scale: 1.2,
            transition: { duration: 0.2 },
            color: generateColor(),
          }}
          className="inline-block"
          whileHover={{
            transition: { duration: 0.2 },
            scale: 1.2,
            color: generateColor(),
          }}
        >
          ,
        </motion.div>{" "}
        <motion.div
          whileTap={{
            scale: 1.2,
            transition: { duration: 0.2 },
            color: generateColor(),
          }}
          className="inline-block"
          whileHover={{
            transition: { duration: 0.2 },
            scale: 1.2,
            color: generateColor(),
          }}
        >
          I
        </motion.div>{" "}
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
          a
        </motion.div>
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
          m
        </motion.div>{" "}
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
          A
        </motion.div>
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
          r
        </motion.div>
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
          s
        </motion.div>
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
          h
        </motion.div>
      </h1>

      <div
        className={`aspect-[393/400] min-h-[400px] bg-[url(../public/wave1mobile.svg)] lg:bg-[url(../public/wave1.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full`}
      ></div>
    </motion.div>
  );
};

export default SectionOne;
