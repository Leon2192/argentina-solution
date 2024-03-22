import CardOferta from "./../CardOferta/CardOferta";
import useGet5Ofertas from "../../../libs/hooks/useGet5Ofertas";

type Oferta = {
  Nombre: string;
  Imagenes: string;
  Produc_manager: string;
};

const OfertasList = () => {
  const { fiveOfertas, loading, error } = useGet5Ofertas();
  const img = "/assets/sin_imagen.jpg";

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>No se han podido cargar las ofertas</div>;
  }

  if (!fiveOfertas) {
    return null;
  }

  return (
    <>
      <h1 className="text-center p-6 mt-4 mb-2 font-bold text-4xl text-gray-800">
        PRODUCTOS DESTACADOS
      </h1>
      <br />
      <div className="flex flex-wrap justify-center">
        {fiveOfertas.map((oferta: Oferta, index: number) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/5 p-4">
            <CardOferta
              nombre={oferta.Nombre}
              imagen={
                !oferta.Imagenes
                  ? import.meta.env.PUBLIC_URL +
                    `/articulos/thumbs/${encodeURIComponent(
                      oferta.Imagenes?.split(",")[0]
                    )}`
                  : img
              }
              descripcion={oferta.Produc_manager}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default OfertasList;
