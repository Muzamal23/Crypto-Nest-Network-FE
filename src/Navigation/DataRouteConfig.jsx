import { PATH } from "../config";
import WEB_PAGES from "../components";

const PathName = Object.keys(PATH, "path");
PathName.splice(0, 1);

const INITIAL_VALUE = PathName.map((item) => {
  const Val = WEB_PAGES[item];

  if (
    item === "LOGIN_IN" ||
    item === "ADD_FUNDS" ||
    item === "CREATE_ACCOUNT" ||
    item === "FORGET_PASSWORD" ||
    item === "HOME"
  ) {
    return { path: PATH[item], page: <Val />, route: "PublicRoute" };
  }
  if (item === "HOME") {
    return { path: PATH[item], page: <Val />, route: "ModerateRoute" };
  }
  return { path: PATH[item], page: <Val />, route: "PrivateRoute" };
});

export default INITIAL_VALUE;
