import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (ev) => {
    setFormData({
      ...formData,
      [ev.target.id]: ev.target.value,
    });
  };
  const handleSubmit = async (ev) => {
    //prevent refresh the page
    ev.preventDefault();
    console.log(formData);
    try {
      setLoading(true);
      const res = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }

    /**/
  };
  //console.log(formData);

  return (
    <div className=" p-4 max-w-lg mx-auto">
      <h1 className=" text-teal-700 text-3xl text-center font-semibold my-7">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className=" flex flex-col gap-4">
        <input
          type="email"
          placeholder="email"
          className="bg-teal-700/20 border-0 p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="bg-teal-700/20 border-0 p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className=" bg-orange-600 text-white p-3 rounded-lg border-0 uppercase hover:opacity-60"
        >
          {loading ? "Loading..." : "Sign in"}
        </button>
      </form>
      <div className=" mt-4">
        <p className=" text-teal-700 inline">
          Do not have an account yet? Sign up{" "}
        </p>
        <Link to={"/sign-up"}>
          <span className=" text-teal-700 hover:underline">here &raquo;</span>
        </Link>
      </div>
      {error && (
        <p className="mt-5 text-center text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default SignIn;
