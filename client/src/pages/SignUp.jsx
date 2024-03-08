import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className=" p-4 max-w-lg mx-auto">
      <h1 className=" text-teal-700 text-3xl text-center font-semibold my-7">
        Sign Up
      </h1>
      <form className=" flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="p-3 rounded-lg bg-teal-700/20 border-0"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="bg-teal-700/20 border-0 p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="bg-teal-700/20 border-0 p-3 rounded-lg"
          id="password"
        />
        <button className=" bg-orange-600 text-white p-3 rounded-lg border-0 uppercase hover:opacity-60">
          Sign up
        </button>
      </form>
      <div className=" mt-4">
        <p className=" text-teal-700 inline">
          Already have an account? Sign in{" "}
        </p>
        <Link to={"/sign-in"}>
          <span className=" text-teal-700 hover:underline">here &raquo;</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
