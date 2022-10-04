import React from "react";
import { motion } from "framer-motion";
import Svg from "../../public/wave2mobile.svg";
import {Letter, SpinnyLetter} from '../ReusableComponents'

type Props = {};

const SectionOne = (props: Props) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
    >
      <h1 className="font-bold text-5xl m-3 h-10">
        <SpinnyLetter letter='H' />
        <Letter letter="i" />
        <Letter letter="," />
        {' '}
        <Letter letter="I " />
        {' '}
        <Letter letter="a" />
        <Letter letter="m " />
        {' '}
        <Letter letter="A" />
        <Letter letter="r" />
        <Letter letter="s" />
        <Letter letter="h" />
      </h1>
      <div
        className={`aspect-[393/400] min-h-[400px] bg-[url(../public/wave1mobile.svg)] lg:bg-[url(../public/wave1.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full`}
      ></div>
    </motion.div>
  );
};


export default SectionOne;
