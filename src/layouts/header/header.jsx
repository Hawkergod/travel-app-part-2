import { NavLink } from "react-router-dom";
import { ProfileNav } from "components/profileNav.tsx";
import "assets/css/style.css";
import { useAppSelector } from "hooks/hooksRedux";
import { authSelectors } from "redux/auth";

export const Header = () => {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink to="/" className="header__logo">
          Travel App
        </NavLink>
        {isLoggedIn && (
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <NavLink to="/bookings" className="nav-header__inner">
                  <span className="visually-hidden">Bookings</span>
                  <img src="./images/briefcase.svg" alt=" icon" />
                </NavLink>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" /*tabindex="0"*/>
                  <ProfileNav />
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
