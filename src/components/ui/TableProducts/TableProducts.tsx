import React from "react";

interface TableProductsProps {
  nombre: string;
  imagen: string;
  descripcion: string;
  sku?: string;
}

const TableProducts: React.FC<TableProductsProps> = ({
  nombre,
  imagen,
  descripcion,
  sku,
}) => {
  return (
    <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
      <tbody>
        <tr>
          <td className="p-4" style={{ width: "25%" }}>
            <img className="w-24 h-auto" src={imagen} alt="Image" />
          </td>
          <td className="p-4" style={{ width: "75%" }}>
            <h2 className="text-gray-800 font-bold text-xl mb-2">{nombre}</h2>
            <p className="text-red-600 underline text-base font-semibold ">{descripcion}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-green-600 font-bold text-md">
                <span className="text-slate-900 text-md">SKU: </span>
                {sku}
              </span>
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
