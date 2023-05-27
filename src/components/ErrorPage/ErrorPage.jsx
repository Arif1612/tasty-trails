import { useRouteError } from "react-router-dom";
import logo from "../../assets/images/404.jpg";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
      <div>
      <img className="h-screen w-screen" src={logo} alt="" />
    </div>
  );
}
