import "assets/css/style.css";
import { useDispatch } from "react-redux";
import { authOperations } from "redux/auth";

export const ProfileNav = () => {
  const dispatch = useDispatch();
  return (
    <>
      <span className="visually-hidden">Profile</span>
      <img src="./images/user.svg" alt="profile icon" />
      <ul className="profile-nav__list">
        <li className="profile-nav__item profile-nav__username">John Doe</li>
        <li className="profile-nav__item">
          <button
            className="profile-nav__sign-out button"
            type="button"
            onClick={() => {
              dispatch(authOperations.logout());
            }}
          >
            Sign Out
          </button>
        </li>
      </ul>
    </>
  );
};
