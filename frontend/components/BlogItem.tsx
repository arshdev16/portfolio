import React from "react";
import { BlogModel } from "../lib/types";

type Props = {
  blog: BlogModel;
};

const BlogItem = (props: Props) => {
  const { blog } = props;

  return (
    <div>
      <h1>{blog.title}</h1>
    </div>
  );
};

export default BlogItem;
