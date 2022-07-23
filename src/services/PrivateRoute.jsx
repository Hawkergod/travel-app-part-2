import { useAppSelector } from "hooks/hooksRedux";
import { Navigate } from "react-router-dom";
import { authSelectors } from "redux/auth";

interface IProps {
  component: React.ReactElement;
  redirectTo: string;
}

export default function PrivateRoute({
  redirectTo,
  component,
}: IProps): React.ReactElement {
  const isLoggedIn = useAppSelector(authSelectors.getIsLoggedIn);
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
