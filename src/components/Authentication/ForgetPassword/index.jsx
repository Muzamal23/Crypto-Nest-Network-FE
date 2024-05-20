/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FieldError, LoaderCenter } from "../../../assets";
import IMAGES from "../../../assets/images";
import { PATH, TOASTER_STYLING_VALUES } from "../../../config";
import CreateNewPassword from "../SharedScreens/CreateNewPassword";
import OTPVerification from "../SharedScreens/OTPVerification";

export default function ForgetPassword() {
  useEffect(() => {
    document.title = "Forgot Password || Crypto Nest Network";
  }, []);

  const [pageActive, setPageActive] = useState(1);

  return (
    <>
      <ToastContainer />
      {pageActive === 1 && (
        <ForgotPasswordSection setPageActive={setPageActive} />
      )}
      {pageActive === 2 && <OTPVerification setPageActive={setPageActive} />}
      {pageActive === 3 && <CreateNewPassword setPageActive={setPageActive} />}
    </>
  );
}

function ForgotPasswordSection({ setPageActive }) {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  // const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const [toasterLoader, setToasterLoader] = useState(false);

  // function moveToNext(data) {
  //   localStorage.setItem("crypto_nest_network_user", JSON.stringify(data));
  //   setTimeout(() => {
  //     window.location.href = PATH.DASHBOARD;
  //   }, 1500);
  // }

  // function notification(data, condition) {
  //   if (condition === "success") {
  //     toast.success(data, TOASTER_STYLING_VALUES);
  //     setToasterLoader(true);
  //   } else {
  //     toast.error(data, TOASTER_STYLING_VALUES);
  //   }
  // }

  function onSubmit() {
    // const finalData = {
    //   pin: data?.patientPIN,
    //   password: data?.password,
    // };
    // dispatch(login({ finalData, notification, moveToNext }));
    toast.success("OTP sent successfully", TOASTER_STYLING_VALUES);
    setToasterLoader(true);
    setTimeout(() => {
      setPageActive(3);
    }, 1500);
  }
  return (
    <div className="auth-wrapper aut-bg-img-side align-items-stretch">
      <div className="row align-items-center w-100 align-items-stretch bg-white m-0">
        <div className="d-none d-lg-block col-lg-5 a-side m-0 p-0 position-relative">
          <img
            src={IMAGES.LOGIN_LOGO}
            className="img-fluid"
            alt="login-logo"
            loading="lazy"
          />
          <p
            className="already-account-text back-to-login-position"
            onClick={() => {
              navigate(PATH.LOGIN_IN);
            }}
          >
            <IoIosArrowBack />
            Back to login
          </p>
        </div>
        <div className="col-lg-7 h-100 align-items-center d-flex justify-content-center">
          <Form
            className="w-100 d-flex justify-content-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="auth-content">
              <div className="text-center mb-3">
                <img
                  src={IMAGES.LEGAL_SMART_LOGO}
                  className="img-fluid"
                  alt="login-logo"
                  loading="lazy"
                />
              </div>
              <div className="mb-4">
                <h3 className="sign-in-text">
                  LegalSmarts by <span>CyberSmarts.ai</span>
                </h3>
                <p className="sign-in-subText">
                  Intelligent Legal Solutions Powered by AI
                </p>
              </div>
              <div className="mb-4">
                <h3 className="sign-in-text text-center">FORGOT PASSWORD</h3>
                <p className="sign-in-subText text-center">
                  We will send a confirmation message to your email in order to
                  recover your password.
                </p>
              </div>
              <Form.Group className="mb-4">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e) => setValue("email", e.target.value)}
                  style={{
                    borderColor: errors?.email ? "#E93535" : "",
                  }}
                  {...register("email", { required: true })}
                />
                {errors?.email && (
                  <FieldError message="This Field is Required" />
                )}
              </Form.Group>
              {!isLoading && !toasterLoader ? (
                <button type="submit" className="submit-btn shadow-2">
                  Submit
                </button>
              ) : (
                <LoaderCenter />
              )}
              <p className="already-account-text">
                Didn’t have an account?{" "}
                <Link
                  to={PATH.CREATE_ACCOUNT}
                  className="mb-0 generic-color-secondary"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

ForgotPasswordSection.propTypes = {
  setPageActive: PropTypes.func.isRequired,
};
