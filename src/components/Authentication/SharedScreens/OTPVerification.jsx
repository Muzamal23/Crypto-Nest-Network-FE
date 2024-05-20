import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";
import { LoaderCenter } from "../../../assets";
import { PATH, TOASTER_STYLING_VALUES } from "../../../config";
import IMAGES from "../../../assets/images";

export default function OTPVerification({ setPageActive }) {
  const {
    register,
    formState: { errors },
    setValue,
    trigger,
  } = useForm();
  // const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const [toasterLoader, setToasterLoader] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);

  function handleChange(event, index) {
    const { value } = event.target;
    const newOtp = [...otp];
    const numericValue = value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    const singleDigit = numericValue.slice(0, 1); // Get the first character
    newOtp[index] = singleDigit;
    setOtp(newOtp);
    setValue(`otp${index}`, singleDigit);
    trigger(`otp${index}`);
    if (index < 5 && singleDigit) {
      document.getElementById(`otp${index + 1}`)?.focus();
    }
    const filteredOtp = newOtp.filter((item) => item !== "");
    if (filteredOtp.length === 4) {
      const confirmOtpByEmailData = {
        otp: filteredOtp.join(""),
      };
      toast.success("OTP verified successfully", TOASTER_STYLING_VALUES);
      setToasterLoader(true);
      setTimeout(() => {
        setPageActive(3);
      }, 1500);
      console.log("confirmOtpByEmailData", confirmOtpByEmailData);
    }
  }

  function handleKeyDown(event, index) {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp${index - 1}`)?.focus();
    }
  }

  // function moveToNext(data) {
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

  return (
    <>
      <ToastContainer />
      <div className="auth-wrapper aut-bg-img-side container-fluid align-items-stretch">
        <div className="row m-4 align-items-center w-100 align-items-stretch bg-white">
          <div className="d-none d-lg-flex col-lg-6 a-side">
            <img
              src={IMAGES.LOGIN_LOGO}
              className="img-fluid"
              alt="login-logo"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 h-100 align-items-center d-flex justify-content-center">
            <Form className="w-100 d-flex justify-content-center">
              <div className="auth-content">
                <div className="small-screen-logo">
                  <img
                    src={IMAGES.LOGO_DASHBOARD}
                    className="img-fluid"
                    alt="login-logo"
                    loading="lazy"
                  />
                </div>
                <div className="mb-5">
                  <h3 className="mb-3 sign-in-text">OTP Verification</h3>
                  <h4 className="sign-in-detail-text">
                    Enter OTP Code that we send to your number.
                  </h4>
                </div>
                <Form.Group className="mb-4">
                  <div className="otp-fields">
                    {otp.map((digit, index) => (
                      <input
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        type="text"
                        id={`otp${index}`}
                        name={`otp${index}`}
                        maxLength={1}
                        value={digit}
                        {...register(`otp${index}`, { required: true })}
                        onChange={(event) => handleChange(event, index)}
                        onKeyDown={(event) => handleKeyDown(event, index)}
                        className="form-control"
                        style={{
                          borderColor: errors?.[`otp${index}`] ? "#E93535" : "",
                        }}
                      />
                    ))}
                  </div>
                </Form.Group>
                <Form.Group>
                  <p className="already-account-text">
                    Didn’t receive OPT code?
                  </p>
                  {!isLoading && !toasterLoader ? (
                    <p className="resend-code-text">Resend Code</p>
                  ) : (
                    <LoaderCenter />
                  )}
                </Form.Group>
                {/* {!isLoading && !toasterLoader ? (
                  <button type="submit" className="submit-btn shadow-2">
                    Verify & Proceed
                  </button>
                ) : (
                  <LoaderCenter />
                )} */}
                <p className="already-account-text mt-4">
                  Go back to{" "}
                  <Link
                    to={PATH.SIGN_IN}
                    className="mb-0 generic-color-secondary"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

OTPVerification.propTypes = {
  setPageActive: PropTypes.func.isRequired,
};
