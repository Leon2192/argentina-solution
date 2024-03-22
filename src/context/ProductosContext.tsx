import React, {
  useContext,
  useEffect,
  useState,
  createContext,
  ReactNode,
} from "react";
import { MarcaInterface, CategoriaInterface } from "../interfaces/";
import { getMarcas } from "../api/articulos/productos";

interface ProductosContextType {
  marcas: MarcaInterface[] | null;
  categorias: CategoriaInterface[] | null;
}

const ProductosContext = createContext<ProductosContextType | null>(null);

export const ProductosProvider: React.FC<{ children: ReactNode }> = ({
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
    <ProductosContext.Provider
      value={{
        marcas,
        categorias,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductosContext = (): ProductosContextType => {
  const context = useContext(ProductosContext);
  if (!context) {
    throw new Error(
      "useProductosContext debe ser utilizado dentro de un ProductosProvider"
    );
  }
  return context;
};
