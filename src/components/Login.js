import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="BG"
        ></img>
      </div>
      <form className=" absolute my-36 p-12 bg-black w-4/12 mx-auto right-0 left-0 rounded-lg bg-opacity-80">
        <h2 className=" w-full  m-2  text-xl font-bold text-slate-100">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="name"
            className=" w-full p-2 m-2 bg-gray-700"
          ></input>
        )}
        <input
          type="text"
          placeholder="email"
          className=" w-full p-2 m-2 bg-gray-700"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className=" w-full p-2 m-2 bg-gray-700"
        ></input>
        <button className=" w-full bg-red-600 p-2 m-2 text-white font-bold  ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="p-2 m-2 w-full text-white text-xs cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already a Registered !.. User Sign in"}
        </p>
      </form>
    </div>
  );
};

export default Login;
