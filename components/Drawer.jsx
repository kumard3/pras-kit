import React, { useRef } from "react";

export const DrawerNav = ({ children, toggleSidebar, setToggleSidebar }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => setToggleSidebar(false));
  return (
    <>
      <div
        ref={ref}
        className={`fixed  top-0 px-2  z-30 inset-y-0  w-1/2  transition duration-300 transform  ${
          toggleSidebar
            ? "translate-x-[50vw] ease-out h-full  bg-[#111827] text-white"
            : "translate-x-[100vw] ease-in  "
        }`}>
        {children}
      </div>
    </>
  );
};

import { useEffect } from "react";

// https://usehooks.com/useOnClickOutside/

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;