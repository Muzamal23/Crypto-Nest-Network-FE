import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { HiPlus, HiMinus } from "react-icons/hi";

function SubMenu({ item, isExpanded }) {
  const location = useLocation();

  const [subNav, setSubNav] = useState(false);

  const showSubNav = () => {
    setSubNav(!subNav);
  };

  useEffect(() => {
    setSubNav(isExpanded);
  }, [isExpanded]);

  let arrowIcon = null;
  if (item?.subNav) {
    arrowIcon = subNav ? (
      <HiMinus className="ms-auto right_arrow_hide me-0" size={18} />
    ) : (
      <HiPlus className="ms-auto right_arrow_hide me-0" size={18} />
    );
  }

  return (
    <>
      <li
        className={` ${
          item?.path?.includes(location?.pathname) ? "active" : ""
        } ${item?.subNav && subNav && "submenu-active"}`}
      >
        {item?.path ? (
          <Link onClick={showSubNav} to={{ pathname: item?.path || "" }}>
            {item?.icon}
            <span>{item?.title}</span>
            {arrowIcon}
          </Link>
        ) : (
          <Link
            // Add event parameter to onClick event handler
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              showSubNav(); // Toggle the submenu visibility
            }}
            to={{ pathname: "" }}
          >
            {item?.icon}
            <span>{item?.title}</span>
            {arrowIcon}
            {item?.title === "Documents" && <h6 className="new-text">New</h6>}
          </Link>
        )}
      </li>
      <ul className="block">
        {subNav &&
          item?.subNav?.map((navItem) => (
            <React.Fragment key={navItem.id}>
              {navItem?.subNav ? (
                <SubMenu item={navItem} isExpanded={isExpanded} />
              ) : (
                <li
                  className={` ${
                    navItem?.pathList?.includes(location?.pathname)
                      ? "active"
                      : ""
                  }`}
                >
                  <Link
                    className={` ${
                      navItem?.pathList?.includes(location?.pathname)
                        ? ""
                        : "text-white"
                    }`}
                    to={{ pathname: navItem?.path }}
                    onClick={navItem?.onClick}
                  >
                    <div className="content-start-aligned gap-2">
                      {navItem?.icon}
                      <div>{navItem?.title}</div>
                    </div>
                  </Link>
                </li>
              )}
            </React.Fragment>
          ))}
      </ul>
    </>
  );
}

export default SubMenu;

SubMenu.propTypes = {
  item: PropTypes.object.isRequired,
  isExpanded: PropTypes.string,
};

SubMenu.defaultProps = {
  isExpanded: null,
};
