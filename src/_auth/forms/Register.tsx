import Banner from "../../components/shared/Banner/Banner";

const Register = () => {
  return (
    <div>
      <Banner src="/assets/banners/banner-clientes.webp" alt="banner-apc" />
      <div className="flex justify-center items-center ">
        <div className="w-1/2 p-8">
          <h1 className="text-3xl font-semibold mb-4 text-slate-900">
            Registro
          </h1>
          <h3 className="text-lg text-gray-600 mb-8 font-semibold">
            Por favor, ingrese los datos solicitados.
          </h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nombre y apellido"
                className="w-full border rounded-lg py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Email"
                className="w-full border rounded-lg py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Telefono"
                className="w-full border rounded-lg py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Motivo de contacto"
                className="w-full border rounded-lg py-2 px-3"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Mensaje"
                className="w-full border rounded-lg py-2 px-3"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white rounded-lg py-2"
            >
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
