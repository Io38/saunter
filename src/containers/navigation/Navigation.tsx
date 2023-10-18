import { routes } from "./routes";
import { useRoutes } from "react-router-dom";

const Navigation = () => {
  const element = useRoutes(routes);

  return element;
};

export default Navigation;
