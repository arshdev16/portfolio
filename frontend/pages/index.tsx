import React from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { BlogModel } from "../lib/Interfaces";
import { createClient } from "next-sanity";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";

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
  function generateColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div
      className={isOpen ? "hidden" : "w-screen h-screen flex justify-center"}
    >
      <animated.div
        style={useSpring({
          to: { opacity: 1, marginTop: 10 },
          from: { opacity: 0, marginTop: -200 },
          delay: 200,
        })}
        className="flex flex-col items-center"
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
      </animated.div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog"][0...3]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

export default Home;
