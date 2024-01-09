import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
export const Logo = () => {
  return (
    <>
      <Link to="/">
        <img src={logoImg} alt="logo image" className="logo" />
      </Link>
    </>
  );
};
