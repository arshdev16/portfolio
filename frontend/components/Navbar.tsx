import React, { useState } from "react";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

type Props = {};

const linkItemStyles = `font-bold text-4xl m-4 hover:text-5xl transition-all`;

const Navbar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between m-4">
      <div className={isOpen ? "hidden" : ""}>
        <button onClick={() => setIsOpen(!isOpen)}>
          <HiMenu size={30} />
        </button>
      </div>
      <div
        className={`bg-custom-brown  fixed top-0 left-0 transition-all ${
          isOpen ? "w-full h-screen" : "w-0 h-0"
        }`}
      >
        <div className={isOpen ? "flex justify-center items-center" : "hidden"}>
          <button
            className="fixed top-0 left-0 m-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <HiMenu size={30} />
          </button>
          <ul className="mt-40 flex flex-col text-center">
            <li className={linkItemStyles}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={linkItemStyles}>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li className={linkItemStyles}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={linkItemStyles}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={isOpen ? "hidden" : ``}>
        <Link href="/">
          <a>Logo</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
