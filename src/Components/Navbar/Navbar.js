import React from "react";
import makeStyles from "./styles";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";
import memories from "../../images/memories.png";

const Navbar = () => {
  const user = null;
  var classes = makeStyles();
  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <div className={classes.brandContainer}>
        <Typography
          element={Link}
          to="/"
          className={classes.heading}
          variant="h3"
          color="secondary"
          align="center"
        >
          PHOTOGRAPHY
        </Typography>
        <img className={classes.image} src={memories} alt="tree" height="30" />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {" "}
              {user.result.name}
            </Avatar>
            <Typography className={classes.userName} variant="h5">
              {user.result.name}{" "}
            </Typography>
            <Button
              className={classes.logout}
              color="primary"
              variant="contained"
            >
              Logout
            </Button>
          </div>
        ) : (
          <div>
            <Button
              component={Link}
              to="/auth"
              variant="contained"
              color="secondary"
            >
              Sign in
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
