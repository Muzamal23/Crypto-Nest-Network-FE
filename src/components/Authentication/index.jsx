import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { PATH } from "../../config";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Crypto Nest Network";
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="auth-wrapper">
        <div className="w-100 d-flex justify-content-center">
          <div className="auth-content">
            {/* <div className="text-center mb-3">
              <img
                src={IMAGES.LEGAL_SMART_LOGO}
                className="img-fluid"
                alt="login-logo"
                loading="lazy"
              />
            </div> */}
            <div className="mb-4">
              <h3 className="sign-in-text">CRYPTO NEST NETWORK</h3>
              <h3 className="sign-in-text text-center">
                Believe In The Golden Rule
              </h3>
              <p className="sign-in-subText text-center">Crypto Nest Rules.</p>
            </div>
            <button
              type="button"
              onClick={() => navigate(PATH.LOGIN_IN)}
              className="submit-btn shadow-2"
            >
              Log In
            </button>
            <button type="button" className="submit-btn shadow-2">
              Sign Up
            </button>

            <div className="or-text">
              <p>or</p>
            </div>
            <div className="social-btns">
              <div className="twitter_button">
                <Button type="button">
                  <FaTwitter />
                  <span>Login with Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
