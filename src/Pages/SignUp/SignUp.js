import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="py-28 px-5 lg:px-0">
      <div className="text-center lg:w-2/6 boxShadow mx-auto p-5">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form>
          <label class="label lg:pl-12">
            <span class="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <label class="label lg:pl-12">
            <span class="label-text text-lg">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            class="input input-bordered w-full max-w-xs mb-2"
          />
          <label class="label lg:pl-12">
            <span class="label-text text-lg">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            class="input input-bordered w-full max-w-xs"
          />
          <h3 className="text-left text-sm lg:pl-12 mb-4">Forget Password ?</h3>
          <input
            type="submit"
            value="Login"
            class="btn btn-accent w-full max-w-xs mb-2"
          />
        </form>
        <span>
          New to Doctors Portal ?{" "}
          <Link to="/login" className="text-secondary">
            Already have an account
          </Link>
        </span>

        <div className="flex items-center lg:px-5 py-5">
          <div className="border-b-2 w-2/3"></div>
          <span className="px-3">OR</span>
          <div className="border-b-2 w-2/3"></div>
        </div>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
