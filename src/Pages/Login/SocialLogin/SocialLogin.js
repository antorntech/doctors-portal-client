import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, googleError] =
    useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (loading) {
    toast.loading("Please Wait", {
      render: "All is good",
      autoClose: 3000,
      type: "success",
      isLoading: false,
    });
  }

  if (googleError) {
    toast.error("🦄 Popup closed by user!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    </div>
  );
};

export default SocialLogin;
