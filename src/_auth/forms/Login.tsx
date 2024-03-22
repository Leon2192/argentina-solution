import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row justify-center items-center ">
      <div className="w-full md:w-1/2 p-8 mb-4 md:mb-0">
        <h1 className="text-3xl font-semibold mb-4 text-slate-900">
          CLIENTES REGISTRADOS
        </h1>
        <h3 className="text-lg text-gray-600 mb-8 font-semibold">
          Por favor, Ingresá tu dirección de email y contraseña para iniciar
          sesión.
        </h3>
        <form>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Usuario"
              className="w-full border rounded-lg py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full border rounded-lg py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white rounded-lg py-2"
          >
            Iniciar sesión
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-semibold mb-4 text-slate-900 mb-4">
          NUEVO CLIENTE
        </h1>

        <h3 className="text-lg text-gray-600 mb-8 font-semibold">
          Si todavía no tenés una cuenta en SOLUTION BOX utilizá esta opción
          para acceder al formulario de registro.Te solicitaremos la información
          necesaria para agilizar el proceso de compra.
        </h3>
        <button
          onClick={() => navigate("/register")}
          className="w-full bg-slate-900 text-white rounded-lg py-2"
        >
          Registrarse
        </button>
      </div>
    </div>
  );
};

export default Login;
