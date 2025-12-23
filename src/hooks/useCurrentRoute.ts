import { useLocation } from "react-router-dom";
import { ROUTES } from "../routes.config";

export const useCurrentRoute = () => {
  const { pathname } = useLocation();

  return Object.values(ROUTES).find((route) => route.path === pathname);
};
