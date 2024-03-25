import axios from "./axios";

// // Solicitudes http a api login
//Login
export const login = async (
  datosLogin: { [key: string]: string },
  token: string
) => {
  try {
    const resp = await axios.post("/login", datosLogin, {
      headers: { Authorization: "Bearer " + token },
    });
    return resp.data;
  } catch (error) {
    console.error("Error en la solicitud de login:", error);
    throw error;
  }
};

//Logout
export const logout = async (token: string) => {
  try {
    await axios.post("/logout", null, {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (error) {
    console.error("Error en la solicitud de logout:", error);
    throw error;
  }
};
