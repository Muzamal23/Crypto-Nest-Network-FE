import PropTypes from "prop-types";
import { LoaderPageWithoutBG } from "../../assets";
import { PATH } from "../../config";

function PublicRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem("crypto_nest_network_user"));
  if (jwtToken) {
    if (jwtToken?.role === "User") {
      window.location.href = PATH.DASHBOARD;
      return null; // Return null here to prevent rendering anything in this case
    }
  }
  return (
    <>
      {jwtToken ? <LoaderPageWithoutBG /> : null}
      {children}
    </>
  );
}

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
};

export default PublicRoute;
