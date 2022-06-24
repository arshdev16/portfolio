import React from "react";
import { GetServerSideProps } from "next";
import { createClient } from "next-sanity";
import { BlogModel } from "../lib/Interfaces";

type Props = {
  blogs: Array<BlogModel>;
};

const client = createClient({
  projectId: "9cm066e3",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog"]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

const blogfeed = (props: Props) => {
  return <div>blogFeed</div>;
};

export default blogfeed;
