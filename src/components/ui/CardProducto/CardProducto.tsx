import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

interface CardProductoProps {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio?: number;
  stock?: number;
  sku?: string;
}

const CardProducto: React.FC<CardProductoProps> = ({
  nombre,
  imagen,
  descripcion,
  sku,
  stock,
  precio,
}) => {
  const { token, user } = useAuthContext();
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-72 object-cover" src={imagen} alt={` Image`} />
      <div className="p-6">
        <h2 className="text-gray-800 font-bold text-md mb-2">{nombre}</h2>
        <p
          className="text-gray-700 text-base font-semibold underline overflow-hidden"
          style={{ maxHeight: "80px" }}
        >
          {descripcion}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-gray-600 font-bold text-sm">SKU: {sku}</span>
          <button className="bg-red-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Ver Producto
          </button>
        </div>
        {token && user && (
          <>
            <div className="mt-4 flex items-center justify-around">
              <span className="text-gray-600 font-bold text-md">
                Precio: {precio}
              </span>

              <span className="text-gray-600 font-bold text-md">
                Stock: {stock}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <button className=" w-full bg-green-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
                Agregar al carrito
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardProducto;
