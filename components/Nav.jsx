import { useState } from "react";

import Link from "next/link";

import { DrawerNav } from "./Drawer";

const navData = [
  {
    name: "Components",
    href: "/components",
  },
  {
    name: "Templates",
    href: "/templates",
  },
];

export default function Nav() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const button = `min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 active:bg-white/10 hover:bg-white/10 flex justify-center items-center rounded-xl`;
  return (
    <>
      <div className=" w-full flex  text-xl font-bold drop-shadow-xl flex-none ease-in-out duration-300 0  lg:border-b lg:border-gray-900/10 ">
        <div className="w-full container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
            <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <Link href="/" passHref>
                  <h1 className="font-orbitron gradientText font-bold leading-none text-4xl hover:cursor-pointer">
                    {" "}
                    Pras-UI
                  </h1>
                </Link>
              </div>
              <div className="md:block">
                <div
                  onClick={() => setToggleSidebar(!toggleSidebar)}
                  className=" rounded-md p-2 inline-flex items-center justify-center hover:text-gray-500 ">
                  <button className="inline-flex text-white items-center lg:hidden  focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2 sm:-mr-8 md:-mr-32">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="white"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <nav className="hidden lg:flex space-x-10 items-center font-spartan">
                {navData.map((n) => {
                  return (
                    <Link key={n.name} href={n.href} passHref>
                      <span className=" text-white text-2xl font-orbitron ">{n.name}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden">
        <DrawerNav
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}>
          {navData.map((item) => (
            <Link key={item.name} href={item.href} passHref>
              <h1 className="mt-10 mx-3 p-3 flex items-center text-3xl font-orbitron font-bold w-[13rem] rounded-md hover:bg-white/10 hover:backdrop-blur-sm hover:cursor-pointer  ">
                {item.name}
              </h1>
            </Link>
          ))}
        </DrawerNav>
      </div>
    </>
  );
}
