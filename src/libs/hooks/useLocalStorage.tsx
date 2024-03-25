import { useState } from "react";

export const useLocalStorage = (
  key: string,
  valorInicial: string | null | undefined
) => {
  const [valor, setValor] = useState(() => {
    const item = localStorage.getItem(key);
    try {
      return item ? JSON.parse(item) : valorInicial;
    } catch (error) {
      return valorInicial;
    }
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setValores = (valores: any) => {
    setValor(valores);
    localStorage.setItem(key, JSON.stringify(valores));
  };
  return [valor, setValores];
};
