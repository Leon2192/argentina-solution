import React from "react";
import { useAuthContext } from "../../../context/AuthContext";

interface TableProductsProps {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio?: number;
  stock?: number;
  sku?: string;
}

const TableProducts: React.FC<TableProductsProps> = ({
  nombre,
  imagen,
  descripcion,
  sku,
  precio,
  stock,
}) => {
  const { token, user } = useAuthContext();
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <tbody>
        <tr>
          <td className="p-4" style={{ width: "25%" }}>
            <img className="w-24 h-auto" src={imagen} alt="Image" />
          </td>
          <td className="p-4" style={{ width: "75%" }}>
            <h2 className="text-gray-800 font-bold text-xl mb-2">{nombre}</h2>
            <p className="text-red-600 underline text-base font-semibold ">
              {descripcion}
            </p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-600 font-bold text-md">
                <span className="text-slate-900 text-md">SKU: </span>
                {sku}
              </span>

              {token && user && (
                <>
                  <span className="text-green-600 font-bold text-md">
                    <span className="text-gray-600 text-md">Stock: </span>
                    {stock}
                  </span>

                  <span className="text-green-600 font-bold text-md">
                    <span className="text-gray-600 text-md">Precio: </span>
                    {precio}
                  </span>

                  <button className="bg-green-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
                    Agregar al carrito
                  </button>
                </>
              )}
              <button className="bg-red-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
                Ver Producto
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProducts;
