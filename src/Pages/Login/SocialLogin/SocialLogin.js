import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (googleError) {
    toast(googleError?.message);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="lg:px-12">
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
