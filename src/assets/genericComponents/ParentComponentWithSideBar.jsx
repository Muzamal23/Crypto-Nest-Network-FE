import PropTypes from "prop-types";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

function ParentComponentWithSideBar({ children }) {
  const [changeTheme, setChangeTheme] = useState("Light");
  return (
    <div
      className={`main-wrapper ${changeTheme === "Dark" ? "dark-theme" : ""}`}
    >
      <Header />
      <Sidebar setChangeTheme={setChangeTheme} changeTheme={changeTheme} />
      <div className="page-wrapper side-bar-hide">{children}</div>
    </div>
  );
}

ParentComponentWithSideBar.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ParentComponentWithSideBar;
