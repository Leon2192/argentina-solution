import React from "react";

interface CardOfertaProps {
  nombre: string;
  imagen: string;
  descripcion: string;
  precio?: number;
  stock?: number;
}

const CardOferta: React.FC<CardOfertaProps> = ({
  nombre,
  imagen,
  descripcion,
}) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-72 object-cover" src={imagen} alt={` Image`} />
      <div className="p-6">
        <h2 className="text-gray-800 font-bold text-xl mb-2">{nombre}</h2>
        <p className="text-gray-700 text-base">{descripcion}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-green-600 font-bold text-xl">En oferta!</span>

          <button className="bg-red-600 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded">
            Ver Producto
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOferta;
