import { useState, useEffect } from "react";
import { getProductsPorMarca } from "../../api/articulos/productos";
import { useNavigate } from "react-router";

type Producto = {
  Marca: string;
  Nombre: string;
  Descripcion_corta?: string;
  Imagenes: string;
  Alias: string;
};

type ErrorType = Error | null;

const useGetProductosPorMarca = (id: string | undefined) => {
  const [productosPorMarca, setProductosPorMarca] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductosPorMarca = async () => {
      try {
        setLoading(true);
        localStorage.removeItem("productosMarca");

        const productos = await getProductsPorMarca(id, 0, 0);
        setProductosPorMarca(productos);
        localStorage.setItem("productosMarca", JSON.stringify(productos));
        setLoading(false);
        console.log(productos);
      } catch (error) {
        setError(error as ErrorType);
        setLoading(false);
      }
    };

    fetchProductosPorMarca();
  }, [id]);

  const irADetalles = (param: string, id: string) => {
    const id_replaced = id.replace(/ç/g, "");
    navigate(`/detalle?sku=${id_replaced}`, {
      state: {
        param,
        id,
      },
    });
  };

  return {
    productosPorMarca,
    loading,
    error,
    irADetalles,
  };
};

export default useGetProductosPorMarca;
