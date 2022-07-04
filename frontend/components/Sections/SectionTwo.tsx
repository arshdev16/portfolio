import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {};

const SectionTwo = (props: Props) => {
  const sectionVariants = {
    visible: {
      opacity: 1,
      y: 0,
      rotate: 360,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, y: -200 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        variants={sectionVariants}
        initial="hidden"
        className="bg-[#560090] min-h-max w-full flex flex-col items-center p-4 "
      >
        <motion.h3 whileTap={{scale: 1.2}} whileHover={{scale: 1.2}} className="text-4xl my-2">About me</motion.h3>
        <p className="text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
          mollitia nam, eveniet amet repellat eaque sapiente similique molestias
          veritatis voluptates nostrum vitae at minus pariatur modi fugit est
          quibusdam nemo!
        </p>
        {/* <Image src={Dummy} /> */}
      </motion.div>
      <div
        className={`aspect-[393/200] min-h-[200px] bg-[url(../public/wave2mobile.svg)] lg:bg-[url(../public/wave2.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full`}
      ></div>
    </>
  );
};

export default SectionTwo;
