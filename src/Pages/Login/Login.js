import { async } from "@firebase/util";
import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import "./Login.css";
import SocialLogin from "./SocialLogin/SocialLogin";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  if (error) {
    toast(error.message);
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    signInWithEmailAndPassword(email, password);
  };

  const handleResetPassword = async (event) => {
    const email = event.target.email.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent Email");
    } else {
      toast("Please enter your email");
    }
  };

  return (
    <div className="py-12 px-5 lg:px-0">
      <div className="text-center lg:w-2/6 boxShadow mx-auto p-5">
        <h2 className="text-3xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <label className="label lg:pl-12">
            <span className="label-text text-lg">Email</span>
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs mb-2"
          />
          <label className="label lg:pl-12">
            <span className="label-text text-lg">Password</span>
          </label>
          <input
            required
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
          />
          <label className="label lg:pl-12 mb-2">
            <button onClick={handleResetPassword}>Forgot Password ?</button>
          </label>
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full max-w-xs mb-2"
          />
        </form>
        <span>
          New to Doctors Portal ?{" "}
          <Link to="/signup" className="text-secondary">
            Create new account
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

export default Login;
