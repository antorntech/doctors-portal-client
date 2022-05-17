import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
import "./SignUp.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const navigate = useNavigate();
  const handleSignUp = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
    await createUserWithEmailAndPassword(email, password);
    await sendEmailVerification();
    toast("Sent email");
  };

  //do something else
  if (sending) {
    toast.success("Sent email");
  }

  if (loading) {
    toast.loading("Please Wait", {
      render: "All is good",
      type: "success",
      isLoading: false,
    });
  }

  if (user) {
    navigate("/home");
  }

  if (error) {
    toast.error(error.message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="py-28 px-5 lg:px-0">
      <div className="text-center lg:w-2/6 boxShadow mx-auto p-5">
        <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label className="label lg:pl-12">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs mb-2"
          />
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
            className="input input-bordered w-full max-w-xs mb-5"
          />

          <input
            type="submit"
            value="Sign Up"
            className="btn btn-accent w-full max-w-xs mb-2"
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
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
