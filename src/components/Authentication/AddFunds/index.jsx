import { useEffect } from "react";
import { CiDollar } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineAddCard, MdOutlinePayment } from "react-icons/md";
import { ToastContainer } from "react-toastify";

export default function AddFunds() {
  useEffect(() => {
    document.title = "Add Funds || Crypto Nest Network";
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
              <h3 className="sign-in-text">{`It's always good to have`}</h3>
              <h3 className="sign-in-text text-center">more money on you.</h3>
            </div>
            <div className="setting-menus">
              <button
                type="button"
                // onClick={() => setMenuChange(1)}
              >
                <div className="content-start-aligned gap-3">
                  <div className="content-start-aligned gap-2">
                    <h5> </h5>
                    <span>
                      <FiPlus />
                    </span>
                  </div>
                  <div>
                    <p>Add funds</p>
                    <h6>Increase more to your wealth</h6>
                  </div>
                </div>
                <IoIosArrowForward />
              </button>
              <button
                type="button"
                // onClick={() => setMenuChange(1)}
              >
                <div className="content-start-aligned gap-3">
                  <div className="content-start-aligned gap-2">
                    <h5> </h5>
                    <span>
                      <CiDollar />
                    </span>
                  </div>
                  <div>
                    <p>Request</p>
                    <h6>Ask someone for a loan</h6>
                  </div>
                </div>
                <IoIosArrowForward />
              </button>
              <button
                type="button"
                // onClick={() => setMenuChange(1)}
              >
                <div className="content-start-aligned gap-3">
                  <div className="content-start-aligned gap-2">
                    <h5> </h5>
                    <span>
                      <MdOutlineAddCard />
                    </span>
                  </div>
                  <div>
                    <p>Link a new account</p>
                    <h6>Add a new bank account</h6>
                  </div>
                </div>
                <IoIosArrowForward />
              </button>
              <button
                type="button"
                // onClick={() => setMenuChange(1)}
              >
                <div className="content-start-aligned gap-3">
                  <div className="content-start-aligned gap-2">
                    <h5> </h5>
                    <span>
                      <MdOutlinePayment />
                    </span>
                  </div>
                  <div>
                    <p>Add an account</p>
                    <h6>Create a new account and switch</h6>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
