
![Logo](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVUaYxIv5wOUt41NjNqnc6rKXhbGDlCR42Q&usqp=CAU)


# Frontend Argentina 🇦🇷

Proyecto desarrollado con Vite + Typescript




## Installation

Install my-project with npm

```bash
  npm create vite@latest
  cd my-project
  npm install

```
    
## Run this project locally

Clonar este repositorio con ssh

```bash
  git clone git@gitlab.solutionbox.com.ar:web/frontend-solutionbox-argentina.git
```

Go to the project directory

```bash
  cd frontend-solutionbox-argentina
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

* Nota

El proyecto inicia en el puerto 5173 (Documentacion de Vite mas abajo) http://localhost:5173/


## Environment Variables

Para correr el proyecto de manera local se deben agregar las variables de entorno.
En VITE se declaran y se llaman asi: (No se usa process.env, sino import.meta.env)

`VITE_REACT_APP_COUNTRY`

`VITE_REACT_APP_DOMINIO`

`VITE_REACT_APP_API_PRODUCTOS`


Ejemplo de modo de uso: 

console.log(import.meta.env.VITE_REACT_APP_API_COUNTRY)




## Estructuras y patrones de diseño

![App Screenshot](https://i.postimg.cc/1thhsmJT/estructura.png)


## Descripción carpetas/patrones de diseño

- src/  --> Directorio principal archivos fuente
- _auth/ --> formularios/vistas de relacionadas a autenticacion (login y register)
- _root/pages/ --> declaracion de vistas del proyecto 
- api/ --> instancias y manejos de axios para estructurar api calls 
- assets/ --> recursos estaticos
- constants/ --> valores constantes utilizados en todo el proyecto 
- interfaces/ --> modelos/contratos
- types/ --> modelos/contratos de tipo estaticos
- context/ --> manejar los estados
- libs/ --> Bibliotecas de terceros/configuraciones globales


## Usage/Examples types e interfaces

```typescript
// Declaracion interface
interface NavLinkInterface {
   route: string;
   label: string;
}

// Uso
const navLink: NavLinkInterface = {
    route: "/about",
    label: "Acerca de nosotros"
};


// Declaracion type
type NavLinkType = {
   route: string;
   label: string;
}

// Uso
const navLink: NavLinkType = {
    route: "/about",
    label: "Acerca de nosotros"
};


```


## Control banners

### Banner es ahora componente reutilizable, se le pasan las props src (ruta de la imagen a mostrar) y alt (descripcion).

#### *Nos evitamos crear muchos componentes que hacen lo mismo



```bash
 // Banner.tsx //

import React from "react";

interface BannerProps {
  src: string;
  alt: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt }) => {
  return (
    <div className="w-full m-auto overflow-hidden relative">
      <img src={src} alt={alt} className="mx-auto" />
    </div>
  );
};

export default Banner;



// Modo de uso 

 <Banner src="/assets/banners/nombre_de_tu_banner.webp" alt="tu_banner" />

```

## Paleta de colores (reemplazar por paleta real)

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Red | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) #0a192f |
| Black | ![#f8f8f8](https://via.placeholder.com/10/f8f8f8?text=+) #f8f8f8 |



## Deployment



```bash
  npm run build
```


## Enlaces utiles

[Vite](https://vitejs.dev/)

[Typescript](https://www.typescriptlang.org/docs/)

[Tailwind CSS](https://tailwindcss.com/)

[ZOD](https://zod.dev/)

[React Hook Forms](https://react-hook-form.com/)

[Axios](https://axios-http.com/es/docs/intro)



## Authors

- [@leon2192](https://www.github.com/leon2192)

