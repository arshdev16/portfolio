import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import firebase from "../../public/firebase.svg";
import Next from "../../public/Next.svg";
import Sanity from "../../public/Sanity.svg";
import Tailwind from "../../public/Tailwind.svg";

const SectionFour = () => {
  const sectionVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, x: -200 },
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
        className="flex flex-col items-center aspect-[393/400] min-h-[400px] bg-[url(../public/wave3mobile.svg)] lg:bg-[url(../public/wave2.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full"
      >
        <motion.h1
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
          className="text-2xl font-bold m-3 my-10"
        >
          My Favourite Technologies
        </motion.h1>
        <motion.div>

          <motion.div className="flex w-full justify-evenly">

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              className="bg-white h-min rounded-full mx-1"
            >
              <Image src={Next} width={100} height={100} />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.2 }}
              className="mx-1"
            >
              <Image src={firebase} width={100} height={100} />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image src={Sanity} width={100} height={100} />
            </motion.div>
          </motion.div>

          <motion.div className="flex w-full justify-evenly my-3">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
              <Image src={Tailwind} width={100} height={100} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default SectionFour;
