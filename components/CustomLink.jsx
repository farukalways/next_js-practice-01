"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ children, path }) => {
  const pathName = usePathname();
  const activePath = pathName === path;

  return (
    <Link className={activePath && "text-blue-500"} href={path}>
      {children}
    </Link>
  );
};

export default CustomLink;
