import React from "react";
import { motion } from "framer-motion";
import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import Link from "next/link";
import { SlugModel } from "../../lib/Interfaces";

type Props = {
  title: string;
  metadesc: string;
  slug: SlugModel;
  blogImage: Object;
};

const BlogCard = (props: Props) => {
  const { title, metadesc, slug, blogImage } = props;

  const builder = imageUrlBuilder(
    createClient({
      projectId: "9cm066e3",
      dataset: "production",
      apiVersion: "v1",
      useCdn: false,
    })
  );

  function urlFor(source: any) {
    return builder.image(source);
  }
  return (
    <>
      <img className="rounded-t-2xl" src={urlFor(blogImage).width(200).url()} />
      <h3 className="text-xl mx-4 my-2 font-bold">{title}</h3>
      <p className="text-xl mx-4 mb-1">{metadesc.slice(0, 32)}...</p>
      <Link href={`/blog/${slug.current}`}>
        <motion.a
          className="bg-[#560bad] mx-4 my-2 self-start w-auto font-bold rounded-xl px-3 py-1"
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
        >
          Read More
        </motion.a>
      </Link>
    </>
  );
};

export default BlogCard;
