import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        alt="Logo"
        className="hidden md:block cursor-pointer"
        height="150"
        width="150"
        src="/assets/images/sbox.png"
      />
    </Link>
  );
};

export default Logo;
