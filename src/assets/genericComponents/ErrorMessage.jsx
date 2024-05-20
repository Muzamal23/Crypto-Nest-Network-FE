import PropTypes from "prop-types";
import { ERROR } from "../../config";

export function ErrorMessage({ message, color, className }) {
  return (
    <div className="error-message-generic">
      <p className={`${className} mb-0`} style={{ color }}>
        {message || ERROR.SYSTEM_ERROR}
      </p>
    </div>
  );
}

export function FieldError(props) {
  return (
    <div className="error-message-field-generic">
      <p className={`${props?.className} mb-0`}>
        {props?.message || ERROR.SYSTEM_ERROR}
      </p>
    </div>
  );
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
  color: PropTypes.string,
};

FieldError.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string.isRequired,
};

// Provide a default value for the className prop
ErrorMessage.defaultProps = {
  className: "", // You can adjust the default value as needed
  color: "#e93535",
};

FieldError.defaultProps = {
  className: "",
};
