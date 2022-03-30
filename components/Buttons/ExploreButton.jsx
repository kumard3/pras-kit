const GradientButtonTwo = () => {
  return (
    <a
      href="#_"
      className="w-[400px] mt-8 justify-center relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-white border-2 border-[#ff5478] rounded-xl hover:text-white group hover:bg-[#111827]">
      <span className="absolute left-0 block w-full h-0 transition-all bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </span>
      <span className="relative font-orbitron tracking-widest text-2xl">Explore</span>
    </a>
  );
};

export default GradientButtonTwo;
