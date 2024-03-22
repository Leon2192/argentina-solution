import { FaCheckCircle } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { useLocation, useNavigate } from "react-router-dom";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const location = useLocation();
  const { producto } = location.state;
  const img = "/assets/sin_imagen.jpg";
  const navigate = useNavigate();

  const descripcionCorta =
    producto.Descripcion_corta.length > 100
      ? `${producto.Descripcion_corta.substring(0, 100)}...`
      : producto.Descripcion_corta;

  return (
    <div className="h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-3/4 bg-white p-8 rounded-lg overflow-auto">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <div className="w-full h-auto">
              <img
                src={img}
                alt={producto.Descripcion_corta}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="md:col-span-1 flex flex-col items-center justify-center">
            <div className="flex text-gray-500 mb-4">
              <p className="mr-1 font-semibold">Nuevo</p>|
              <p className="ml-1 font-semibold">+10 vendidos</p>
            </div>
            <p className="text-3xl font-semibold text-gray-900 text-center">
              {descripcionCorta}
            </p>
            <br />
            <div className="flex">
              <p className="text-3xl text-gray-600 mr-3">5.0</p>
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
              <FaStar className="text-blue-500" />
            </div>

            <br />
            <div className="w-3/4 mx-auto border-t border-gray-300"></div>
            <br />
            <div className="flex">
              <AiFillSafetyCertificate color="green" />
              <p className="text-md ml-4 text-gray-500 font-semibold">
                Comprá de manera segura en nuestra web.
              </p>
            </div>

            <br />
            <div className="flex">
              <TfiCup color="green" />
              <p className="text-md ml-4 text-gray-500 font-semibold">
                Solution Box cuenta con productos de alta calidad.
              </p>
            </div>

            <br />
            <p className="text-sm ml-4 text-gray-500 font-bold">
              * Las imágenes son de carácter ilustrativo
            </p>
          </div>

          <div className="md:col-span-1">
            <p className="text-4xl text-center font-semibold">
              {producto.Marca}
            </p>
            <br />
            <p className="text-3xl">Inicie sesión para ver el stock y precio</p>
            <br />
            <div className="flex">
              <FaCheckCircle color="green" />
              <p className="text-green-500 text-xl ml-3">{producto.Marca}</p>
            </div>
            <br />
            <p>
              <span className="text-gray-500 text-xl mr-2">Garantía:</span>Este
              producto tiene garantía de {producto.Garantia_meses} meses
            </p>
            <br />
            <p className="text-red-600 text-xl font-semibold">Stock:</p>
            <br />
            <p className="text-gray-500 text-xl font-semibold">
              <span className="mr-2 font-bold">SKU:</span>
              {producto.Alias}
            </p>
            <br />
            <p className="text-gray-500 text-xl font-semibold">
              <span className="mr-2 font-bold">PM:</span>
              {producto.Produc_manager}
            </p>

            <br />
            <div className="w-full">
              <button
                onClick={() => navigate("/login")}
                className="w-full py-4 mb-4 bg-blue-500 text-white text-xl font-semibold rounded-lg"
              >
                Iniciar sesión
              </button>
              <button className="w-full py-4 bg-green-600 text-white text-xl font-semibold rounded-lg">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
