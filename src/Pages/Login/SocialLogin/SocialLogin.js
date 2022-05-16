import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();

  if (googleError) {
    toast(googleError?.message);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div className="px-12">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-outline btn-accent btn-block uppercase"
      >
        Continue With Google
      </button>
      <ToastContainer />
    </div>
  );
};

export default SocialLogin;
