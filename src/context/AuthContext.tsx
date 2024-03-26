import React, { createContext, useState, ReactNode, useContext } from "react";

import axios from "axios";
import { useLocalStorage } from "../libs/hooks/useLocalStorage";
import { useNavigate } from "react-router";

interface AuthContextType {
  // desloguearse: (code?: string) => void;
  handleLogout: (code?: string) => void;
  desloguearInicio: () => void;
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  idUser: string | null;
  setIdUser: React.Dispatch<React.SetStateAction<string | null>>;
  user: string | null;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  precompra: string | null;
  setPrecompra: React.Dispatch<React.SetStateAction<string | null>>;
  handleButtonClick: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useLocalStorage("user", null);
  const [token, setToken] = useLocalStorage("token", null);
  const [idUser, setIdUser] = useLocalStorage("idUser", null);
  const [precompra, setPrecompra] = useLocalStorage("precompra", null);
  const [clickLogin, setClickLogin] = useState<number>(0);
  const navigate = useNavigate();

  const urlApiLogin = import.meta.env.VITE_REACT_APP_API_LOGIN as string;

  // const desloguearse = (code?: string) => {
  //   axios
  //     .post(`${urlApiLogin}/logout`, null, {
  //       headers: { Authorization: "Bearer " + token },
  //     })
  //     .then(() => setToken(null))
  //     .then(() => localStorage.clear())
  //     .then(() => console.log("código =>", code))

  //     .catch((_error) => console.log("Logout con error", code));
  // };

  const handleLogout = (code = "") => {
    axios
      .post(`${urlApiLogin}/logout`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (code === "RT") {
          console.log(res.data.mensaje);
        } else if (code === "CS") {
          console.log("sesion cerrada");
        } else {
          console.log("sesion cerrada en el else");
        }
      })
      .then(setToken())
      .catch((error) => console.log("Error de deslogueo", error.response));
    localStorage.clear();
    navigate("/");
    window.location.reload();
  };

  const desloguearInicio = () => {
    axios
      .post(`${urlApiLogin}/logout`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => setToken(null))
      .then(() => localStorage.clear())
      .then(() => console.log("logout inicio ok"))
      .catch((error) => {
        console.log("Catch", error.response);
      });
  };

  const handleButtonClick = () => {
    const newClickLogin = clickLogin + 1;
    setClickLogin(newClickLogin);

    if (newClickLogin >= 3) {
      console.log("error en el handleButton");
    }
  };

  const contextValue: AuthContextType = {
    // desloguearse,
    handleLogout,
    desloguearInicio,
    token,
    setToken,
    idUser,
    setIdUser,
    user,
    setUser,
    precompra,
    setPrecompra,
    handleButtonClick,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuthContext debe ser utilizado dentro de un AuthProvider"
    );
  }
  return context;
};
