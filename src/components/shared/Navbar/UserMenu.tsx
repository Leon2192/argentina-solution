import { useCallback, useState } from "react";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";
import { CiLogin } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { SlLogout } from "react-icons/sl";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../context/AuthContext";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { user, handleLogout, token } = useAuthContext();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  user && console.log(user, "user desde navbar", token, "y este es el token");

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
          ¡Bienvenido {user && "Usuario logueado"}!
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
                onClick={
                  !user ? () => navigate("/login") : () => navigate("/profile")
                }
                label={!user ? "Iniciar sesion" : "Ver perfil"}
                icon={
                  !user ? (
                    <CiLogin size={"1.5em"} />
                  ) : (
                    <ImProfile size={"1.5em"} />
                  )
                }
              />

              <MenuItem
                onClick={
                  !user ? () => navigate("/register") : () => handleLogout("CS")
                }
                label={!user ? "Registrarse" : "Cerrar sesion"}
                icon={
                  !user ? (
                    <FaUserFriends size={"1.5em"} />
                  ) : (
                    <SlLogout size={"1.5em"} />
                  )
                }
              />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
