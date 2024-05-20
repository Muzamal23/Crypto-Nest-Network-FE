import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { FieldError, LoaderCenter } from "../../../assets";
import { PATH, TOASTER_STYLING_VALUES } from "../../../config";
import CustomCheckBox from "../../../assets/genericComponents/CustomCheckBox";

export default function LogIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const { isLoading } = useSelector((state) => state.auth);

  const [passwordShown, setPasswordShown] = useState(false);
  const [toasterLoader, setToasterLoader] = useState(false);

  useEffect(() => {
    document.title = "Log In || Crypto Nest Network";
  }, []);

  useEffect(() => {
    const storedRememberedLoginUser = JSON.parse(
      localStorage.getItem("rememberedLoginUser")
    );

    if (storedRememberedLoginUser) {
      setValue("email", storedRememberedLoginUser?.email);
      setValue("password", storedRememberedLoginUser?.password);
      setValue("rememberMe", storedRememberedLoginUser?.rememberMe);
    }
  }, []);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  function onSubmit(data) {
    if (data.email === "user@legalsmarts.com") {
      data = { ...data, token: "token", role: "User" };
      localStorage.setItem("crypto_nest_network_user", JSON.stringify(data));
      setToasterLoader(true);
      navigate(PATH.DASHBOARD);
    } else {
      toast.error("Invalid Email or Password", TOASTER_STYLING_VALUES);
      setToasterLoader(false);
    }
  }
  return (
    <>
      <ToastContainer />
      <div className="auth-wrapper">
        <Form
          className="w-100 d-flex justify-content-center"
          onSubmit={handleSubmit(onSubmit)}
        >
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
              <h3 className="sign-in-text">Log In to your account</h3>
              <h3 className="sign-in-text text-center">check your wealth</h3>
            </div>
            <Form.Group className="mb-4">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email address"
                onChange={(e) => setValue("email", e.target.value)}
                style={{
                  borderColor: errors?.email ? "#E93535" : "",
                }}
                {...register("email", { required: true })}
              />
              {errors?.email && <FieldError message="This Field is Required" />}
            </Form.Group>
            <Form.Group className="mb-2 position-relative">
              <Form.Label>PASSWORD</Form.Label>
              <Form.Control
                type={passwordShown ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setValue("password", e.target.value)}
                style={{
                  borderColor: errors?.password ? "#E93535" : "",
                }}
                {...register("password", { required: true })}
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
              {errors?.password && (
                <FieldError message="This Field is Required" />
              )}
            </Form.Group>
            <Form.Group className="d-flex justify-content-between align-items-center">
              <CustomCheckBox
                label="Remember Password"
                onChange={(e) => setValue("rememberMe", e.target.checked)}
                registerName="rememberMe"
                defaultChecked
                register={register}
                // customClass="checkbox-modify"
              />
              {/* <Link to={PATH.FORGET_PASSWORD} className="forgot-password-text">
                Forgot Password ?
              </Link> */}
            </Form.Group>
            {!isLoading && !toasterLoader ? (
              <button type="submit" className="submit-btn shadow-2">
                Log In
              </button>
            ) : (
              <LoaderCenter />
            )}
            <p className="already-account-text">
              New to this experience?{" "}
              <Link
                to={PATH.ADD_FUNDS}
                className="mb-0 generic-color-secondary"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </>
  );
}
