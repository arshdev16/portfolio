import React from "react";
import { createClient } from "next-sanity";
import { GetServerSideProps } from "next";
import { BlogModel } from "../../lib/Interfaces";

type Props = {
  blog: BlogModel;
};

const client = createClient({
  projectId: "9cm066e3",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
});

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog" && slug.current == '${context.query.slug}'][0]`;
  const blog: Array<BlogModel> = await client.fetch(query);
  return { props: { blog } };
};

const BlogPage = (props: Props) => {
  const { blog } = props;
  return <div>

  </div>;
};

export default BlogPage;
