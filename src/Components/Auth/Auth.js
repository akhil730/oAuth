import React, { useState } from "react";
import {
  Avatar,
  Button,
  Typography,
  Container,
  Paper,
  Grid
} from "@material-ui/core";
import LockoutlinedIcon from "@material-ui/icons/LockOutlined";
import makeStyles from "./styles";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";

const Auth = () => {
  const [Password, setPassword] = React.useState(false);
  const [isSignUp, setIsSignUp] = React.useState(true);

  const handlePassword = () =>
    setPassword((prevShowPassword) => !prevShowPassword);

  const handleRegister = () => setIsSignUp((prevSignUp) => !prevSignUp);

  const handleForm = () => {};

  const handleChange = () => {};

  //Google
  const responseGoogle = async (res) => {
    console.log("response of gogle login", res);
  };

  const GoogleFailure = (err) => {
    console.log("error", err);
  };

  // const isSignUp = true;
  const classes = makeStyles();

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockoutlinedIcon />
        </Avatar>
        <Typography variant="h5" color="primary">
          {isSignUp ? "Sign Up" : "Sign in"}
        </Typography>
        <form className={classes.form} onSubmit={handleForm}>
          <Grid container spacing={2}>
            {isSignUp ? (
              <>
                <Input
                  variant="h5"
                  name="firstName"
                  label="firstName"
                  onChange={handleChange}
                  autoFocus
                  xs={6}
                />

                <Input
                  variant="h5"
                  name="lastName"
                  label="lastName"
                  onChange={handleChange}
                  autoFocus
                  xs={6}
                />
              </>
            ) : null}
            <Input
              variant="h5"
              name="email"
              label="email"
              type="email"
              onChange={handleChange}
            />
            <Input
              variant="h5"
              name="Password "
              label="Password"
              type={Password ? "text" : "password"}
              onChange={handleChange}
              handlePassword={handlePassword}
            />
            {isSignUp ? (
              <Input
                variant="h5"
                name="Confirm Password "
                label="Confirm Password"
                onChange={handleChange}
              />
            ) : null}
          </Grid>
          <Button
            className={classes.submit}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            {isSignUp ? "Sign Up" : "Login"}
          </Button>
          <GoogleLogin
            clientId="524545631777-eh020f47neboba9t53ed6u7j43h36pq9.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                Google sign in
              </Button>
            )}
            onSuccess={responseGoogle}
            onFailure={GoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
          <Button
            className={classes.submit}
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
          >
            {isSignUp ? "Already, have an accout? Sign in" : "Sign up"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
