import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FieldError, LoaderCenter } from "../../../assets";
import { PATH, TOASTER_STYLING_VALUES } from "../../../config";
import IMAGES from "../../../assets/images";
import { signUpWithEmailAction } from "../../../redux/features/auth/auth.slice";

export default function CreateAccount() {
  useEffect(() => {
    document.title = "Create Account || Crypto Nest Network";
  }, []);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const dispatch = useDispatch();

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

  function moveToNext() {
    navigate(PATH.LOGIN_IN);
  }

  function notification(data, condition) {
    if (condition === "success") {
      toast.success(data, TOASTER_STYLING_VALUES);
      setToasterLoader(true);
    } else {
      toast.error(data, TOASTER_STYLING_VALUES);
    }
  }

  function onSubmit(data) {
    const finalData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      phoneNumber: data.phoneNumber || "30405665854",
      countryCode: data.countryCode,
      signupType: "Client",
    };
    dispatch(signUpWithEmailAction({ finalData, moveToNext, notification }));
  }

  return (
    <>
      <ToastContainer />
      <div className="auth-wrapper aut-bg-img-side align-items-stretch">
        <div className="row align-items-center w-100 align-items-stretch bg-white m-0">
          <div className="d-none d-lg-block col-lg-5 a-side m-0 p-0">
            <img
              src={IMAGES.LOGIN_LOGO}
              className="img-fluid"
              alt="login-logo"
              loading="lazy"
            />
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
                <Row>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your first name"
                        onChange={(e) => setValue("firstName", e.target.value)}
                        style={{
                          borderColor: errors?.firstName ? "#E93535" : "",
                        }}
                        {...register("firstName", { required: true })}
                      />
                      {errors?.firstName && (
                        <FieldError message="This Field is Required" />
                      )}
                    </Form.Group>
                  </Col>
                  <Col md={6} sm={12}>
                    <Form.Group className="mb-4">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your last name"
                        onChange={(e) => setValue("lastName", e.target.value)}
                        style={{
                          borderColor: errors?.lastName ? "#E93535" : "",
                        }}
                        {...register("lastName", { required: true })}
                      />
                      {errors?.lastName && (
                        <FieldError message="This Field is Required" />
                      )}
                    </Form.Group>
                  </Col>
                </Row>
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
                <Form.Group className="mb-4 position-relative">
                  <Form.Label>Password:</Form.Label>
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
                  <Form.Label>Confirm Password:</Form.Label>
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
                    Create Account
                  </button>
                ) : (
                  <LoaderCenter />
                )}

                <div className="or-text">
                  <p>or continue with</p>
                </div>
                <div className="social-btns">
                  <div className="twitter_button">
                    <Button type="button" className="d-flex align-items-center">
                      <img
                        src={IMAGES.GOOGLE}
                        className="img-fluid"
                        alt="google"
                      />
                      <span className="mx-3">Sign in with Google Account</span>
                    </Button>
                  </div>
                </div>

                <p className="already-account-text">
                  Already have an account?{" "}
                  <Link
                    to={PATH.LOGIN_IN}
                    className="mb-0 generic-color-secondary"
                  >
                    Login
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
