import React, { useEffect } from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { BlogModel } from "../lib/Interfaces";
import { createClient } from "next-sanity";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionFour from "../components/Sections/SectionFour";

const client = createClient({
  projectId: "9cm066e3",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

type homeProps = {
  blogs: Array<BlogModel>;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Home: NextPage<homeProps> = ({ blogs, isOpen, setIsOpen }) => {
  
  useEffect(()=> setIsOpen(false));
  
  return (
    <div
      className={
        isOpen
          ? "hidden"
          : "w-screen h-screen flex flex-col justify-start md:justify-center"
      }
    >
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour blogs={blogs} sanityClient={client} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog"][0...3]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

export default Home;
