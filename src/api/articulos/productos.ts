import axios from "./axios";
import { CategoriaInterface, MarcaInterface } from "../../interfaces";

// Obtener Marcas
export const getMarcas = async (): Promise<MarcaInterface[]> => {
  try {
    const response = await axios.get("/marcas");
    console.log(response.data, "respuesta de obtenerMarcas");
    return response.data as MarcaInterface[];
  } catch (error) {
    console.error("Error al obtener las marcas:", error);
    throw error;
  }
};

// Obtener productos por marca
export const getProductsPorMarca = async (
  id: string | undefined,
  limit: number,
  offset: number
) => {
  try {
    const response = await axios.get(
      `/info/marca/${id}?limit=${limit}&offset=${offset}`
    );
    return response.data.articulos;
  } catch (error) {
    console.error("Error al obtener productos por marca:", error);
    throw error;
  }
};

// Obtener categorias
export const getCategorias = async (): Promise<CategoriaInterface[]> => {
  try {
    const response = await axios.get("/categorias");
    console.log(response.data, "respuesta de obtenerCategorias");
    return response.data as CategoriaInterface[];
  } catch (error) {
    console.error("Error al obtener las marcas:", error);
    throw error;
  }
};

// Obtener 5 ofertas
export const getFiveOfertas = async () => {
  try {
    const response = await axios.get("/ofertas?limit=3&offset=0");
    console.log(response.data);
    return response.data.articulos;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
