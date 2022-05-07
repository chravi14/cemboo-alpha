import { useLocation } from "react-router-dom";
import { ROUTEPATHS } from "../libs";

export const useNavigation = () => {
  const location = useLocation();

  return (
    location.pathname !== ROUTEPATHS.REGISTER &&
    location.pathname !== ROUTEPATHS.LOGIN &&
    location.pathname !== ROUTEPATHS.DASHBOARD
  );
};

export const useIsLinkActive = (linkPath: string) => {
  const location = useLocation();
  return linkPath === location.pathname;
};
