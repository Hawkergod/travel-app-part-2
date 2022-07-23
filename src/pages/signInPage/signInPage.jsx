import { NavLink } from "react-router-dom";
import "assets/css/style.css";
import { useState } from "react";
import { EmailPass } from "components/emaiPass";
import { useAppDispatch } from "hooks/hooksRedux";
import { authOperations } from "redux/auth";

export const SignInPage = () => {
  const dispatch = useAppDispatch();
  const [regData, setRegData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e, field) => {
    setRegData({ ...regData, [field]: e.currentTarget.value });
  };

  return (
    <main className="sign-in-page">
      <h1 className="visually-hidden">Travel App</h1>
      <form
        className="sign-in-form"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authOperations.login(regData));
        }}
      >
        <h2 className="sign-in-form__title">Sign In</h2>
        <EmailPass onChangeHandler={onChangeHandler} />
        <button className="button" type="submit">
          Sign In
        </button>
      </form>
      <span>
        Already have an account?
        <NavLink to="/sign-up" className="sign-in-form__link">
          Sign Up
        </NavLink>
      </span>
    </main>
  );
};
