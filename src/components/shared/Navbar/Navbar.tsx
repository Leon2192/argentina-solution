import Buscador from "./Buscador";
import Container from "./Container";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <div className=" w-full bg-slate-900 z-10 shadow-sm text-white">
      <div className="py-4 border-b-[5px] border-b-blue-900">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <NavLinks />
            <Buscador />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
