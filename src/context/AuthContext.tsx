import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  ReactNode,
} from "react";
import { MarcaInterface, CategoriaInterface } from "../interfaces/";
import { getMarcas } from "../api/articulos/productos";

interface AuthContextType {
  marcas: MarcaInterface[] | null;
  categorias: CategoriaInterface[] | null;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [marcas, setMarcas] = useState<MarcaInterface[] | null>(null);
  const [categorias] = useState<CategoriaInterface[] | null>(null);

  useEffect(() => {
    const storageMarcas = localStorage.getItem("marcas");
    if (storageMarcas) {
      setMarcas(JSON.parse(storageMarcas));
    } else {
      const handleGetMarcas = async () => {
        try {
          const res = await getMarcas();
          setMarcas(res);
          localStorage.setItem("marcas", JSON.stringify(res));
        } catch (error) {
          console.error("Error al cargar las marcas:", error);
        }
      };
      handleGetMarcas();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        marcas,
        categorias,
      }}
    >
      {children}
    </AuthContext.Provider>
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
