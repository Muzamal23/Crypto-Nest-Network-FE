import { BarLoader } from "react-spinners";
import PuffLoader from "react-spinners/PuffLoader";

export function LoaderCenter() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div className="text-align-center">
      <PuffLoader loading cssOverride={override} color="#000" size={50} />
    </div>
  );
}

export function LoaderRight() {
  const override = {
    display: "block",
    marginLeft: "auto",
  };
  return <PuffLoader loading cssOverride={override} color="#000" size={50} />;
}

export function LoaderLeft() {
  const override = {
    display: "block",
    marginRight: "auto",
  };
  return <PuffLoader loading cssOverride={override} color="#000" size={50} />;
}

export function LoaderTable() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div>
      <PuffLoader loading cssOverride={override} color="#000" size={40} />
    </div>
  );
}

export function LoaderUploadFile() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div className="text-align-center">
      <p className="text-center mb-1">Uploading, please wait ...</p>
      <BarLoader loading cssOverride={override} width={350} color="#131B3F" />
    </div>
  );
}

export function LoaderLineHeader() {
  return (
    <div className="c-header-loader">
      <div className="c-slidingLoader">
        <div className="c-slidingLoader-inner" />
      </div>
    </div>
  );
}

export function LoaderPageWithoutBG() {
  return (
    <div className="loader-body-without-Bg">
      <div className="fond">
        <div className="contener_general">
          <div className="contener_mixte">
            <div className="ballcolor ball_1">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_2">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_3">&nbsp;</div>
          </div>
          <div className="contener_mixte">
            <div className="ballcolor ball_4">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
  );
}
