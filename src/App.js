import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Layout } from "layouts/layout";
import { MainPage } from "pages/mainPage";
import { TripPage } from "pages/tripPage";
import { BookingsPage } from "pages/bookingsPage";
import { SignInPage } from "pages/signInPage";
import { SignUpPage } from "pages/signUpPage";
import PrivateRoute from "services/PrivateRoute";
import { useAppDispatch, useAppSelector } from "hooks/hooksRedux";
import { authOperations, authSelectors } from "redux/auth";
import PublicRoute from "services/PublicRoute";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  const isLoading = useAppSelector(authSelectors.getIsLoading);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute component={<MainPage />} redirectTo={"/sign-in"} />
          }
        />
        <Route
          path="sign-up"
          element={<PublicRoute component={<SignUpPage />} />}
        />
        <Route
          path="sign-in"
          element={<PublicRoute component={<SignInPage />} />}
        />

        {/* <Route
          path="trip/:tripId"
          element={
            <PrivateRoute component={<TripPage />} redirectTo={"/sign-in"} />
          }
        />
        <Route
          path="bookings"
          element={
            <PrivateRoute
              component={<BookingsPage />}
              redirectTo={"/sign-in"}
            />
          }
        /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}

export default App;
