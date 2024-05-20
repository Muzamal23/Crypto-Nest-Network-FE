/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */

import $ from "jquery";
import { useEffect } from "react";
import { Dropdown } from "react-bootstrap";
import ReactDOM from "react-dom";
import { FaBars } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import IMAGES from "../images";
import SignOut from "./SignOut";

function Header() {
  const location = useLocation();

  const loggedUser = JSON.parse(
    localStorage.getItem("crypto_nest_network_user")
  );

  document.body.style.backgroundColor = "#f5f5f5";

  useEffect(() => {
    const $wrapper = $(".main-wrapper");

    $wrapper.removeClass("slide-nav");
    $(".sidebar-overlay").removeClass("opened");
    $("html").removeClass("menu-opened");
    $("#task_window").removeClass("opened");
  }, [location]);
  return (
    <>
      <ToastContainer />
      <div className="header">
        {/* Logo  */}
        <div className="header-left">
          <div className="PageName">
            <span id="toggle_btn">
              <FaBars />
            </span>
          </div>
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <span className="mobile_btn" id="mobile_btn">
          <FaBars />
        </span>
        {/* /Mobile Menu Toggle */}
        <ul className="nav user-menu">
          <li className="nav-item">
            <GoBell />
          </li>
          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  {loggedUser?.profilePictureUrl ? (
                    <img
                      className="rounded-circle"
                      src={IMAGES.PROFILE_LOGO}
                      width="31"
                      alt={loggedUser?.userType}
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={
                        loggedUser?.profilePictureUrl ||
                        `https://ui-avatars.com/api/?name=${`${loggedUser?.firstName} ${loggedUser?.lastName}`}&background=ED820E&color=fff`
                      }
                      alt="image"
                      className="rounded-circle"
                      loading="lazy"
                    />
                  )}
                </span>
              </Dropdown.Toggle>
              {ReactDOM.createPortal(
                <Dropdown.Menu className="profile-dropmenu">
                  <Dropdown.Item className="d-block px-0">
                    <SignOut />
                  </Dropdown.Item>
                </Dropdown.Menu>,
                document.body
              )}
            </Dropdown>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
