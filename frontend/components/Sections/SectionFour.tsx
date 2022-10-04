import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { BlogModel } from "../../lib/Interfaces";
import BlogCard from "../BlogCard";

type Props = {
  blogs: Array<BlogModel>;
  sanityClient: Object;
};

const SectionThree = (props: Props) => {
  const { blogs } = props;
  
  const sectionVariants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
    hidden: { opacity: 0, x: 200 },
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
        className="flex flex-col items-center aspect-[393/400] min-h-[400px] bg-[url(../public/wave4mobile.svg)] lg:bg-[url(../public/wave2.svg)] lg:aspect-[960/300] bg-no-repeat bg-center bg-cover w-full"
      >
        <motion.h1
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.2 }}
          className="text-3xl font-bold m-3"
        >
          My latest Blog Post
        </motion.h1>
        <motion.div
          className="w-max lg:hidden rounded-2xl flex flex-col bg-[#6419E6] mt-5 mx-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
        >
          <BlogCard
            blogImage={blogs[0].blogImage}
            title={blogs[0].title}
            metadesc={blogs[0].metadesc}
            slug={blogs[0].slug}
          />
        </motion.div>

        <div className="hidden lg:flex"></div>
      </motion.div>
    </>
  );
};

export default SectionThree;
