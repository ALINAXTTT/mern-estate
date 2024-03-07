import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="">
      <div className=" mx-auto flex justify-between items-center max-w-6xl p-4">
        <Link to={"/"}>
          <h1 className=" font-bold text-lg sm:text-2xl flex flex-wrap">
            <span className=" text-orange-600">ALX</span>
            <span className=" text-emerald-700">Estate</span>
          </h1>
        </Link>
        <form className=" flex items-center border-[2px] border-orange-400 px-2 py-1 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent border-0 focus:outline-none w-24 sm:w-64"
          />
          <FaSearch size={18} className=" text-orange-400" />
        </form>
        <ul className=" flex gap-4">
          <li className=" text-orange-600 font-bold hidden cursor-pointer sm:inline hover:underline">
            <Link to={"/"}>Home</Link>
          </li>
          <li className=" text-orange-600 font-bold hidden cursor-pointer sm:inline hover:underline">
            <Link to={"/about"}>About</Link>
          </li>
          <li className=" text-orange-600 font-bold cursor-pointer hover:underline">
            <Link to={"/sign-in"}>Sign In</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
