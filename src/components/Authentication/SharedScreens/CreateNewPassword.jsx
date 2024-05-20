/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FieldError, LoaderCenter } from "../../../assets";
import IMAGES from "../../../assets/images";
import { PATH, TOASTER_STYLING_VALUES } from "../../../config";

export default function CreateNewPassword({ confirmPassword }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  // const dispatch = useDispatch();

  const { isLoading } = useSelector((state) => state.auth);

  const [toasterLoader, setToasterLoader] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  const password = useRef({});
  password.current = watch("password", "");

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
    toast.success("Password created successfully", TOASTER_STYLING_VALUES);
    setToasterLoader(true);
    setTimeout(() => {
      window.location.href = PATH.LOGIN_IN;
    }, 1500);
  }

  return (
    <>
      <ToastContainer />
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
                  <h3 className="sign-in-text text-center">
                    RESET YOUR PASSWORD
                  </h3>
                  <p className="sign-in-subText text-center">
                    Please enter your new password.
                  </p>
                </div>
                <Form.Group className="mb-4 position-relative">
                  <Form.Label>New password:</Form.Label>
                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    placeholder="Enter your password"
                    style={{
                      borderColor: errors?.password ? "#E93535" : "",
                    }}
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!#^%*?&.()-_=+])[A-Za-z\d@$!%#^*?&.()-_=+]{8,}$/,
                    })}
                  />
                  {passwordShown === false ? (
                    <AiFillEyeInvisible
                      className="show_pswd input-icons"
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <AiFillEye
                      className="show_pswd input-icons"
                      onClick={togglePasswordVisibility}
                    />
                  )}
                  {errors?.password?.type === "required" && (
                    <FieldError message="This Field is Required" />
                  )}
                  {errors?.password?.type === "pattern" && (
                    <FieldError message="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character" />
                  )}
                </Form.Group>
                <Form.Group className="position-relative">
                  <Form.Label>Confirm password:</Form.Label>
                  <Form.Control
                    type={confirmPasswordShown ? "text" : "password"}
                    placeholder="Enter your confirm password"
                    style={{
                      borderColor: errors?.confirmPassword ? "#E93535" : "",
                    }}
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === password.current ||
                        "The passwords do not match",
                    })}
                  />
                  {confirmPasswordShown === false ? (
                    <AiFillEyeInvisible
                      className="show_pswd input-icons"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  ) : (
                    <AiFillEye
                      className="show_pswd input-icons"
                      onClick={toggleConfirmPasswordVisibility}
                    />
                  )}
                  {errors?.confirmPassword?.type === "required" && (
                    <FieldError message="This Field is Required" />
                  )}
                  {errors?.confirmPassword?.type === "validate" && (
                    <FieldError message={errors?.confirmPassword?.message} />
                  )}
                </Form.Group>
                {!isLoading && !toasterLoader ? (
                  <button type="submit" className="submit-btn shadow-2">
                    {confirmPassword ? "Confirm Password" : "Reset Password"}
                  </button>
                ) : (
                  <LoaderCenter />
                )}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

CreateNewPassword.propTypes = {
  confirmPassword: PropTypes.bool.isRequired,
};
