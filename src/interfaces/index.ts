export interface ContainerInterface {
  children: React.ReactNode;
}

export interface MenuItemInterface {
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

export interface MarcaInterface {
  Codigo: string;
  Descripcion: string;
  Marca_Madre: string;
}

export interface CategoriaInterface {
  Codigo: string;
  Descripcion: string;
  Hijos: CategoriaInterface[];
}
