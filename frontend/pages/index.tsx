import React from "react";
import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { BlogModel } from "../lib/Interfaces";
import BlogItem from "../components/BlogItem";
import { createClient } from "next-sanity";
import Navbar from "../components/Navbar";

const client = createClient({
  projectId: "9cm066e3",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

type homeProps = {
  blogs: Array<BlogModel>;
};

const Home: NextPage<homeProps> = ({ blogs }) => {
  return (
    <div className="w-screen h-screen">
      This is homepage
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog"][0...3]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

export default Home;
