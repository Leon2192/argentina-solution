import { useNavigate } from "react-router";

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useAuthContext } from "../../context/AuthContext";

const urlApiLogin = import.meta.env.VITE_REACT_APP_API_LOGIN as string;
const urlApiClientes = import.meta.env.VITE_REACT_APP_API_CLIENTE as string;

interface LoginForm {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [datosLogin, setDatosLogin] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const { token, setToken, setUser, setIdUser, user } = useAuthContext();
  const [loggin, setLoggin] = useState<boolean>(false);

  useEffect(() => {
    console.log("esto es token", token);
    console.log("este es el user", user);
  }, [token, user, loggin]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoggin(true);
    try {
      const resp = await axios.post(`${urlApiLogin}/login`, datosLogin);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const user: any = await getDataUser(resp.data.token);
      if (!user) {
        return userBadGateway(resp.data.token);
      } else {
        setToken(resp.data.token);
        setIdUser(resp.data.id);
        setUser(user);
        console.log(`Bienvenido ${user.Nombre}`);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        if (axiosError.response) {
          console.log(axiosError.response);
          if (axiosError.response.status === 429) {
            const minutes = 5;
            console.log(`Se han realizado demasiadas solicitudes en un periodo corto de tiempo.
              Por favor, inténtalo de nuevo en ${minutes} segundos (5 minutos).`);
          } else if (axiosError.response.status === 400) {
            console.log(`Error al loguearse: ${axiosError.response}`);
          } else if (axiosError.response.status === 500) {
            console.log(
              "No se pudo completar su solicitud. Intente nuevamente más tarde."
            );
          }
        } else {
          console.log("Ocurrió un error desconocido:", axiosError);
        }
      } else {
        console.log("Ocurrió un error desconocido:", err);
      }
      setLoggin(false);
    }
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setDatosLogin((values) => ({ ...values, [name]: value }));
  };

  const userBadGateway = (_token: string) => {
    axios
      .post(`${urlApiLogin}/logout`, null, {
        headers: { Authorization: "Bearer " + _token },
      })
      .then(() => setToken(null))
      .then(() => localStorage.clear())
      .then(() => console.log("logout ok!"))
      .catch((error) => console.log("Error de deslogueo", error.response));
  };

  async function getDataUser(_token: string) {
    try {
      const resp = await axios.get(`${urlApiClientes}`, {
        headers: {
          Authorization: "Bearer " + _token,
        },
      });

      if (resp.status === 200 && resp.data && resp.data.cliente) {
        const data = resp.data.cliente;
        console.log("👉 data ▶", data);

        return {
          Id: data.Id,
          Email: data.Email,
          Nombre: data.Nombre,
          Apellido: data.Apellido,
          Deshabilitado: 0,
          NomCliente: data.NomCliente,
          Cuit: data.Cuit,
          codIIBB: data.codIIBB,
          nroIIB: data.nroIIB,
          Domicilio_facturacion: {
            Domicilio: data.Domicilio_facturacion.Domicilio,
            Localidad: data.Domicilio_facturacion.Localidad,
            Codigo_postal: data.Domicilio_facturacion.Codigo_postal,
            Codigo_Prov: data.Domicilio_facturacion.Codigo_Prov,
            Pais: data.Domicilio_facturacion.Pais,
            Telefono: data.Domicilio_facturacion.Telefono,
          },
          Cotizacion: data.Cotizacion,
        };
      } else {
        console.log("Error: Respuesta incorrecta del servidor");
        return null;
      }
    } catch (err) {
      console.log("Error en la solicitud:", err);
      return null;
    }
  }

  useEffect(() => {
    if (token) {
      navigate(-1);
    }
  }, [navigate, token]);

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
        <form onSubmit={handleLogin} action="">
          <div className="mb-4">
            <input
              placeholder="Usuario"
              value={datosLogin.email || ""}
              onChange={inputChange}
              name="email"
              type="email"
              required
              className="w-full border rounded-lg py-2 px-3"
            />
          </div>
          <div className="mb-4">
            <input
              value={datosLogin.password || ""}
              onChange={inputChange}
              type="password"
              name="password"
              required
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
