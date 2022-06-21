import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import { createClient } from "next-sanity";
import { BlogModel } from "../lib/types";
import BlogItem from "../components/BlogItem";

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
    <div>
      {blogs.map((blog) => (
        <BlogItem key={blog._id} blog={blog} />
      ))}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = `*[_type == "blog"]`;
  const blogs: Array<object> = await client.fetch(query);
  return { props: { blogs } };
};

export default Home;
