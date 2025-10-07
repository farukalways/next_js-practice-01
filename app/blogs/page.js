import Link from "next/link";
import blogs from "../data/bloges";
import BlogeItem from "./components/BlogeItem";

const Blogs = () => {
  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Blog list</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogeItem title={blog.title} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
