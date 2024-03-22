import { useCallback, useState } from "react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { CiLogin } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={toggleOpen}
          className="
        px-4 
        md:py-1
         md:px-2 
         border-[1px] 
         border-neutral-200 
         flex 
         flex-row
         items-center
         gap-3 
         rounded-full
         cursor-pointer
         hover:shadow-md
         transition
         "
        >
          ¡Bienvenido!
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-full bg-slate-900 overflow-hidden right-0 top-12 text-sm mt-2">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem
                onClick={() => navigate("/login")}
                label="Iniciar sesion"
                icon={<CiLogin size={"1.5em"} />}
              />

              <MenuItem
                onClick={() => navigate("/register")}
                label="Registrarse"
                icon={<FaUserFriends size={"1.5em"} />}
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
