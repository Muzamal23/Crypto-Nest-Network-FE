/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-useless-fragment */
import $ from "jquery";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { PATH } from "../../config";
import IMAGES from "../images";
import "../js/jquery.slimscroll";
import SidebarData from "./SideBarData";
import SubMenu from "./SubMenu";

export default function Sidebar({ changeTheme, setChangeTheme }) {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(SidebarData);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const $slimScrolls = $(".slimscroll");

    if ($slimScrolls.length > 0) {
      $slimScrolls.slimScroll({
        height: "auto",
        width: "100%",
        position: "right",
        size: "7px",
        color: "#ccc",
        wheelStep: 10,
        touchScrollStep: 100,
      });
      const wHeight = $(window).height() - 180;
      $slimScrolls.height(wHeight);
      $(".sidebar .slimScrollDiv").height(wHeight);
      $(window).resize(() => {
        const rHeight = $(window).height() - 180;
        $slimScrolls.height(rHeight);
        $(".sidebar .slimScrollDiv").height(rHeight);
      });
    }

    function init() {
      $("#sidebar-menu a").on("click", (e) => {
        if ($(this).parent().hasClass("submenu")) {
          e.preventDefault();
        }
        if (!$(this).hasClass("subdrop")) {
          $("ul", $(this).parents("ul:first")).slideUp(350);
          $("a", $(this).parents("ul:first")).removeClass("subdrop");
          $(this).next("ul").slideDown(350);
          $(this).addClass("subdrop");
        } else if ($(this).hasClass("subdrop")) {
          $(this).removeClass("subdrop");
          $(this).next("ul").slideUp(350);
        }
      });
      $("#sidebar-menu ul li.submenu a.active")
        .parents("li:last")
        .children("a:first")
        .addClass("active")
        .trigger("click");
    }

    // Sidebar Initiate
    init();

    // Find the submenu with the default path
    const defaultPath = PATH.DASHBOARD; // Replace with your default path
    const matchingSubNavItem = SidebarData?.find((item) =>
      item?.subNav?.some((subItem) => subItem?.path === defaultPath)
    );

    // Set the expandedItem state to the ID of the matching submenu
    if (matchingSubNavItem) {
      setExpandedItem(matchingSubNavItem?.id);
    }
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter and find matching items and their parents
    const results = SidebarData.flatMap((item) => {
      if (item.title.toLowerCase().includes(value.toLowerCase())) {
        return [item];
      }
      if (item.subNav) {
        const matchingSubNav = item.subNav.find((subItem) =>
          subItem.title.toLowerCase().includes(value.toLowerCase())
        );
        if (matchingSubNav) {
          return [{ ...item, subNav: [matchingSubNav] }];
        }
      }
      return [];
    });

    // Find the parent menu item for the matching sub-item
    const matchingSubNavItem = SidebarData.find((item) =>
      item.subNav?.some((subItem) =>
        subItem.title.toLowerCase().includes(value.toLowerCase())
      )
    );

    // Open the parent menu item if found
    if (matchingSubNavItem) {
      setExpandedItem(matchingSubNavItem.id);
    }

    setSearchResults(results);
  };
  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar-inner slimscroll">
        <div id="sidebar-menu" className="sidebar-menu">
          <Link to={PATH.DASHBOARD} className="logo w-100 text-center text-white-50">
            {/* <img
              src={
                changeTheme === "Dark"
                  ? IMAGES.DARK_THEME_LOGO
                  : IMAGES.LEGAL_SMART_SM_LOGO
              }
              alt="Logo"
              className="img-fluid w-100 object-fit-cover"
              loading="lazy"
            /> */}
            CNN
          </Link>
          <ul className="sidebar-tabs-padding">
            {searchResults.length > 0 ? (
              <>
                {searchResults?.map((item) => (
                  <SubMenu
                    key={item?.id}
                    item={item}
                    isExpanded={expandedItem}
                  />
                ))}
              </>
            ) : (
              <li>
                <Link to={{ pathname: "" }}>
                  <span>No record found</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
      {/* <div className="bottom-sidebar">
        {location.pathname === PATH.DASHBOARD && (
          <div className="theme-color-change-section">
            <h6
              className={`${changeTheme === "Light" && "active"}`}
              onClick={() => setChangeTheme("Light")}
            >
              <MdOutlineLightMode />
              Light
            </h6>
            <h6
              className={`${changeTheme === "Dark" && "active"}`}
              onClick={() => setChangeTheme("Dark")}
            >
              <IoMoonOutline />
              Dark
            </h6>
          </div>
        )}
        <div className="user-details">
          <img
            src={IMAGES.PROFILE_LOGO}
            alt="Logo"
            className="img-fluid"
            loading="lazy"
          />
          <div>
            <h6>Dariyah Abbas</h6>
            <p>dariya@kmail.com</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

Sidebar.propTypes = {
  changeTheme: PropTypes.string.isRequired,
  setChangeTheme: PropTypes.func.isRequired,
};
