import Logo from "../components/Logo";
import NavbarPages from "./NavbarPages";

export default function Navbar() {
  return (
    <div className="navbar d-flex align-items-center justify-content-start">
      <Logo />
      <NavbarPages />
    </div>
  );
}
