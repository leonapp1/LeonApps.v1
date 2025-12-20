# LeonApps v1

Bienvenido a **LeonApps v1**, la plataforma digital para la agencia LeonApps. Este proyecto es una aplicación web moderna construida con React, TypeScript y Tailwind CSS.

## 🚀 Tecnologías

*   **React**: Biblioteca principal para la construcción de interfaces de usuario.
*   **Vite**: Entorno de desarrollo rápido y ligero.
*   **TypeScript**: Superset de JavaScript con tipado estático para un código más robusto.
*   **Tailwind CSS**: Framework de CSS para un diseño rápido y responsive.
*   **Framer Motion**: Biblioteca para animaciones fluidas y gestos.
*   **React Router DOM**: Manejo de rutas y navegación.
*   **Lucide React**: Conjunto de iconos SVG limpios y consistentes.

## 📂 Estructura del Proyecto

El proyecto sigue una arquitectura basada en componentes (Atomic Design simplificado):

*   `src/components`: Componentes reutilizables.
    *   `atoms`: Elementos básicos (Botones, Inputs, Logos).
    *   `molecules`: Combinaciones de átomos (Tarjetas de servicio, items de menú).
    *   `organisms`: Secciones completas (Navbar, Footer, Hero Section).
    *   `templates`: Layouts generales de página.
*   `src/pages`: Páginas principales de la aplicación (Home, Proyectos, Servicios, etc.).
*   `src/data`: Datos estáticos para alimentar la aplicación (Proyectos, Servicios, Planes).
*   `src/utils`: Funciones de utilidad (ej. `cn` para clases condicionales).

## 🛠️ Instalación y Uso

1.  **Clonar el repositorio**:
    ```bash
    git clone https://github.com/Cromosx21/LeonApps.v1.git
    cd LeonApps.v1
    ```

2.  **Instalar dependencias**:
    ```bash
    npm install
    ```

3.  **Ejecutar en desarrollo**:
    ```bash
    npm run dev
    ```

4.  **Construir para producción**:
    ```bash
    npm run build
    ```

## 🌟 Características Principales

*   **Diseño Responsivo**: Adaptado a móviles, tablets y escritorio.
*   **Navegación Dinámica**: Menú interactivo con submenús animados.
*   **Portafolio Filtrable**: Visualización de proyectos por categorías.
*   **Páginas de Detalle**: Información detallada para cada servicio y proyecto.
*   **Animaciones**: Transiciones suaves y efectos de entrada.

## 📝 Notas de Desarrollo

*   Los datos de proyectos y servicios están centralizados en `src/data` para facilitar su actualización sin tocar el código de los componentes.
*   El tema de colores se gestiona principalmente a través de la configuración de Tailwind y variables CSS si es necesario.

---
Desarrollado para LeonApps.
