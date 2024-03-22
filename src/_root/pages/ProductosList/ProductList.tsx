import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Banner from "../../../components/shared/Banner/Banner";
import CardOferta from "../../../components/ui/CardOferta/CardOferta";
import TableProducts from "../../../components/ui/TableProducts/TableProducts";
import useGetProductosPorMarca from "../../../libs/hooks/useGetProductosPorMarca";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { IoMdGrid } from "react-icons/io";
import { BsListColumnsReverse } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";

const ProductList = () => {
  const { id } = useParams();
  const { productosPorMarca, loading, error } = useGetProductosPorMarca(id);
  const img = "/assets/sin_imagen.jpg";
  const largoTotal = productosPorMarca.length;
  const elementosPorPagina = 6;
  const cantidadDePaginas = Math.ceil(largoTotal / elementosPorPagina);
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * elementosPorPagina;
  const endIndex = Math.min(startIndex + elementosPorPagina, largoTotal);
  const [isGridView, setIsGridView] = useState(true);

  const nextPage = () => {
    if (currentPage < cantidadDePaginas) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleGridView = () => {
    setIsGridView(true);
  };

  const toggleTableView = () => {
    setIsGridView(false);
  };

  console.log(largoTotal);

  console.log(cantidadDePaginas);

  if (!id) {
    return <div>No hay productos de esta marca en este momento.</div>;
  }

  if (error) {
    return <div>Hubo un error inesperado, vuelva a intentarlo por favor.</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <Banner src="/assets/banners/banner-clientes.webp" alt="banner-apc" />
      <div className="flex justify-center w-full">
        <div className="flex justify-center w-4/5">
          <div className="hidden md:block w-1/4 p-5 h-3/6 mt-8 bg-white shadow-md rounded-md p-4">
            {productosPorMarca && productosPorMarca.length > 0 ? (
              <h1 className="text-3xl text-center font-semibold text-gray-700 underline">
                {productosPorMarca[0].Marca}
              </h1>
            ) : (
              <h1>Marca</h1>
            )}
            <br />
            <h1 className="text-center text-md font-semibold">Ver como</h1>
            <div className="flex justify-center  border-t-2 border-black mt-4"></div>

            <div className="flex justify-between mt-4">
              <div className="cursor-pointer" onClick={toggleGridView}>
                <IoMdGrid size={"2em"} color="#ef233c" />
              </div>
              <div className="cursor-pointer" onClick={toggleTableView}>
                <BsListColumnsReverse size={"2em"} color="#fb8500" />
              </div>
              <div className="cursor-pointer">
                <FaInfoCircle size={"2em"} color="#353535" />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/4 p-4">
            <div className="flex justify-end mb-4">
              {currentPage > 1 && (
                <FaChevronLeft
                  color="red"
                  onClick={prevPage}
                  className="w-6 h-6 cursor-pointer"
                />
              )}
              {[...Array(cantidadDePaginas)].map((_, index) => (
                <div
                  key={index}
                  className={`w-6 h-6  flex items-center justify-center rounded-full cursor-pointer mx-1 ${
                    index + 1 === currentPage && "bg-slate-900 p-2 text-white"
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
              {currentPage < cantidadDePaginas && (
                <FaChevronRight
                  color="red"
                  onClick={nextPage}
                  className="w-6 h-6 cursor-pointer"
                />
              )}
            </div>
            <div className="flex flex-wrap justify-center">
              {productosPorMarca
                .slice(startIndex, endIndex)
                .map((producto, index) => (
                  <div
                    key={index}
                    className={`w-full md:${
                      isGridView ? "w-1/3" : "w-full"
                    } p-4`}
                  >
                    {isGridView ? (
                      <Link
                        to={`/${producto.Alias}/${encodeURIComponent(
                          producto.Nombre
                        )}`}
                        state={{ producto }}
                      >
                        <div>
                          <CardOferta
                            nombre={producto.Nombre}
                            imagen={
                              !producto.Imagenes
                                ? import.meta.env.PUBLIC_URL +
                                  `/articulos/thumbs/${encodeURIComponent(
                                    producto.Imagenes.split(",")[0]
                                  )}`
                                : img
                            }
                            descripcion={producto.Marca}
                          />
                        </div>
                      </Link>
                    ) : (
                      <Link
                        to={`/${producto.Alias}/${encodeURIComponent(
                          producto.Nombre
                        )}`}
                        state={{ producto }}
                      >
                        <TableProducts
                          nombre={producto.Nombre}
                          imagen={
                            !producto.Imagenes
                              ? import.meta.env.PUBLIC_URL +
                                `/articulos/thumbs/${encodeURIComponent(
                                  producto.Imagenes.split(",")[0]
                                )}`
                              : img
                          }
                          descripcion={producto.Marca}
                          sku={producto.Alias}
                        />
                      </Link>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
