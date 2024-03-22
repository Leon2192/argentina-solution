import { useState, useEffect } from "react";
import { getFiveOfertas } from "../../api/articulos/productos";

type ErrorType = Error | null;

const useGet5Ofertas = () => {
  const [fiveOfertas, setFiveOfertas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const fetchOfertas = async () => {
      try {
        setLoading(true);
        const storedOfertas = localStorage.getItem("5ofertas");
        if (storedOfertas) {
          setFiveOfertas(JSON.parse(storedOfertas));
          setLoading(false);
        } else {
          const cincoOfertas = await getFiveOfertas();
          setFiveOfertas(cincoOfertas);
          localStorage.setItem("5ofertas", JSON.stringify(cincoOfertas));
          setLoading(false);
        }
      } catch (error) {
        setError(error as ErrorType);
        setLoading(false);
      }
    };

    fetchOfertas();
  }, []);

  return { fiveOfertas, loading, error };
};

export default useGet5Ofertas;
