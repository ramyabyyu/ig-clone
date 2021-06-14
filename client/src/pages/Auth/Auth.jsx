import React, { useEffect, useState } from "react";
import { Button, Container, Grid, Paper, Typography } from "@material-ui/core";
import AuthInput from "../../components/AuthInput/AuthInput";
import useStyles from "./styles";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// actions
import { register } from "../../redux/actions/auth";

const authInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  avatar: "",
};

const Auth = () => {
  const { errors } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  // state hooks
  const [authData, setAuthData] = useState(authInitialState);
  const [authError, setAuthError] = useState(authInitialState);
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

  const helperTexts = {
    name: "Max 10 characters",
    password: isRegister ? "Min 8 characters | Contain capital letter" : "",
  };

  const handleChange = (e) => {
    setAuthData({
      ...authData,
      [e.target.name]: e.target.value,
    });
  };

  const switchMode = () => {
    setAuthData(authInitialState);
    setIsRegister((prevIstRegister) => !prevIstRegister);
    setShowPassword(false);
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();

    if (isRegister) dispatch(register(authData, history));
  };

  useEffect(() => {
    if (errors.hasOwnProperty("success")) {
      switch (errors.type) {
        case "firstName":
          setAuthError({
            ...authInitialState,
            firstName: errors.message,
          });
          break;
        case "lastName":
          setAuthError({
            ...authInitialState,
            lastName: errors.message,
          });
          break;
        case "email":
          setAuthError({
            ...authInitialState,
            email: errors.message,
          });
          break;
        case "password":
          setAuthError({
            ...authInitialState,
            password: errors.message,
          });
          break;
        case "confirmPassword":
          setAuthError({
            ...authInitialState,
            confirmPassword: errors.message,
          });
          break;
        default:
          setAuthError(authInitialState);
      }
    } else setAuthError(authInitialState);
  }, [dispatch, errors]);

  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography component="h1" variant="h5">
          {isRegister ? "Create New Account" : "Login"}
        </Typography>
        <form className={classes.form} onSubmit={handleAuthSubmit}>
          <Grid container spacing={2}>
            {isRegister && (
              <>
                <AuthInput
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                  error={authError.firstName !== ""}
                  helperText={
                    authError.firstName !== ""
                      ? authError.firstName
                      : helperTexts.name
                  }
                />
                <AuthInput
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                  error={authError.lastName !== ""}
                  helperText={
                    authError.lastName !== ""
                      ? authError.lastName
                      : helperTexts.name
                  }
                />
              </>
            )}
            <AuthInput
              name="email"
              label="Email Address"
              handleChange={handleChange}
              error={authError.email !== ""}
              helperText={authError.email !== "" ? authError.email : ""}
            />
            <AuthInput
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              handleChange={handleChange}
              handleShowPassword={handleShowPassword}
              error={authError.password !== ""}
              helperText={
                authError.password !== ""
                  ? authError.password
                  : helperTexts.password
              }
            />
            {isRegister && (
              <AuthInput
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
                error={authError.confirmPassword !== ""}
                helperText={
                  authError.confirmPassword !== ""
                    ? authError.confirmPassword
                    : ""
                }
              />
            )}
          </Grid>
          <Grid container justify="center" className={classes.switchMode}>
            <Grid item>
              <Button onClick={switchMode}>
                {isRegister
                  ? "Already have an account? Login here!"
                  : "Don't have an account? Create one"}
              </Button>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submitButton}
          >
            {isRegister ? "Register" : "Login"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
