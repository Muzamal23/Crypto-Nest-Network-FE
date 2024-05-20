import PropTypes from "prop-types";
import { Checkbox, FormControlLabel } from "@mui/material";

function CustomCheckBox({
  label,
  register,
  registerName,
  defaultChecked,
  disabled,
  onChange,
  customClass,
}) {
  return (
    <FormControlLabel
      className={`my-0 ${customClass}`}
      control={
        <Checkbox
          sx={{
            color: "#fff",
            "&.Mui-checked": {
              color: "#fff",
            },
          }}
          {...register(registerName)}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={onChange}
        />
      }
      label={label}
    />
  );
}

export default CustomCheckBox;

CustomCheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  registerName: PropTypes.string,
  register: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  customClass: PropTypes.string,
};

CustomCheckBox.defaultProps = {
  registerName: "",
  customClass: "",
  defaultChecked: false,
  disabled: false,
  register: () => {},
  onChange: () => {},
};
