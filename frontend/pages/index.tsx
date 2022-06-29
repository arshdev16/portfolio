import React, { useEffect } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { BlogModel } from "../lib/Interfaces";
import { createClient } from "next-sanity";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Dummy from "../public/dummy.png";

const client = createClient({
  projectId: "9cm066e3",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

type homeProps = {
  blogs: Array<BlogModel>;
  isOpen: boolean;
};

const Home: NextPage<homeProps> = ({ blogs, isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? "hidden"
          : "w-screen h-screen flex flex-col justify-start md:justify-center"
      }
    >
      <SectionOne />
      <div
        className={`aspect-[393/500] bg-[url(../public/wave1mobile.svg)] lg:bg-[url(../public/wave1.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full`}
      ></div>
      {/* <SectionTwo /> */}
    </div>
  );
};

const SectionOne = () => {
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
      initial={{opacity: 0, marginTop: -100}}
      animate={{ opacity: 1 , marginTop: 0, transition: { duration: 1 }}}
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
    </motion.div>
  );
};

const SectionTwo = () => {
  const sectionVariants = {
    visible: {
      opacity: 1,
      margin: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, marginTop: -200 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={sectionVariants}
      initial="hidden"
      className="bg-[#8800E2] w-full flex flex-col items-center p-4 "
    >
      <motion.h3 className="text-4xl my-2">About me</motion.h3>
      <motion.p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt mollitia
        nam, eveniet amet repellat eaque sapiente similique molestias veritatis
        voluptates nostrum vitae at minus pariatur modi fugit est quibusdam
        nemo!
      </motion.p>
      <Image src={Dummy} />
    </motion.div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_tpe == "blog"][0...3]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

export default Home;
