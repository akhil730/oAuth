import React from "react";
import {
  Grid,
  IconButton,
  InputAdornment,
  endAdornment,
  TextField
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  label,
  handlePassword,
  type,
  autoFocus,
  half,
  handleChange
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        variant="outlined"
        autoFocus={autoFocus}
        onChange={handleChange}
        required
        fullWidth
        type={type}
        label={label}
        InputProps={
          name === "password"
            ? endAdornment(
                <InputAdornment position="end">
                  <IconButton onClick={handlePassword}>
                    {type === "password" ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            : null
        }
      />
    </Grid>
  );
};

export default Input;
