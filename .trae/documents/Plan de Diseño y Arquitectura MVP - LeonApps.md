# Análisis del Sistema de Diseño y Plan de Arquitectura MVP

He analizado los archivos visuales (PNGs) y la estructura de directorios actual. A continuación, presento la deconstrucción del diseño y el plan técnico para construir la plataforma **LeonApps 2.0**.

## 1. Sistema de Diseño (Design System)

Basado en la identidad visual de "LeonApps":

### 🎨 Paleta de Colores
*   **Primary Blue (`#1E40AF` aprox)**: Usado en botones de acción principal (CTA), logotipos y enlaces activos. Transmite confianza y profesionalismo.
*   **Secondary Yellow/Amber (`#F59E0B` aprox)**: Usado en fondos de banners promocionales ("Promoción Exclusiva") y encabezados de tarjetas destacadas ("Plan Despegue"). Aporta energía y resalta ofertas.
*   **Dark Slate (`#0F172A`)**: Para el Footer y textos de encabezado principales.
*   **Text Gray (`#475569`)**: Para párrafos y descripciones, asegurando legibilidad sin ser negro puro.
*   **Backgrounds**: Blanco puro para tarjetas y secciones principales; Gris azulado muy suave (`#F8FAFC`) para secciones de alternancia (ej. "Proceso de contratación").

### 🔠 Tipografía
*   **Familia**: Sans-serif geométrica y moderna (Sugerencia: **Inter** o **Plus Jakarta Sans**).
*   **Jerarquía**:
    *   **H1/H2**: Bold/ExtraBold.
    *   **Body**: Regular/Medium.
*   **Estilo**: Limpio, con buen interletraje (tracking) y altura de línea (leading) generosa.

### 📐 UI & Espaciado
*   **Bordes**: `rounded-xl` o `rounded-2xl` para tarjetas y contenedores; `rounded-full` o `rounded-lg` para botones.
*   **Sombras**: "Soft Shadows" difusas y extensas para dar profundidad (efecto elevación) en tarjetas de precios y servicios.
*   **Espaciado**: Uso generoso del espacio en blanco (whitespace) entre secciones (~80px-100px) para respirabilidad.

---

## 2. Arquitectura de Componentes (Atomic Design)

Estructuraremos el proyecto en `/src/components` siguiendo la metodología atómica:

### ⚛️ Atoms (Unidades indivisibles)
*   **`Button`**: Variantes (Primary, Secondary, Outline, Ghost). Soporte para iconos.
*   **`Input` / `TextArea`**: Estilos base con estados de focus/error.
*   **`Typography`**: Componente polimórfico para H1-H6 y Párrafos.
*   **`Logo`**: SVG optimizado de LeonApps.
*   **`IconWrapper`**: Adaptador para iconos Lucide con tamaños estándar.
*   **`Badge`**: Etiquetas pequeñas (ej. "-10% descuento").

### 🧬 Molecules (Grupos funcionales)
*   **`SectionHeader`**: Título + Subtítulo centrado o alineado.
*   **`NavLi`**: Enlace de navegación con estado activo/hover.
*   **`ServiceCard`**: Icono + Título + Descripción corta.
*   **`ProjectCard`**: Imagen + Overlay + Título + Tags.
*   **`PricingHeader`**: Nombre del plan + Precio.
*   **`StepItem`**: Número (1-5) + Texto del paso (Proceso de contratación).
*   **`TestimonialCard`**: Avatar + Estrellas + Comentario.

### 🦠 Organisms (Secciones completas)
*   **`Navbar`**: Logo + Menú Desktop/Mobile + CTA.
*   **`Footer`**: Enlaces rápidos + Redes sociales + Info contacto.
*   **`HeroSection`**: Diferente para cada página (Home vs Servicios).
*   **`PricingTable`**: Grid de 3 tarjetas de precios.
*   **`ProcessTimeline`**: Visualización de los 5 pasos.
*   **`ContactForm`**: Formulario completo con validación visual.
*   **`PromoBanner`**: Sección amarilla de cuenta regresiva/oferta.
*   **`ClientsGrid`**: Logos de clientes (MMJ, EasyEnglish, etc.).

---

## 3. Vistas a Desarrollar

Implementaremos el enrutamiento con `react-router-dom`:

1.  **Home (`/`)**: Hero, Servicios destacados, Proceso, Promo, Clientes, Contacto.
2.  **Proyectos (`/proyectos`)**: Galería filtrable, Casos de éxito detallados.
3.  **Servicios (`/servicios`)**: Detalle de servicios, Grid de beneficios, FAQ.
4.  **Planes (`/planes`)**: Tabla de precios, Comparativa.
5.  **Contacto (`/contacto`)**: Formulario principal, Mapa (opcional), Datos.
6.  **[NUEVA] 404 Not Found**: Diseño minimalista con ilustración y botón "Volver al inicio".
7.  **[NUEVA] Loading State**: Skeleton screens para cargas de contenido.

---

## 4. Stack Técnico & Herramientas

*   **Core**: React + Vite + TypeScript (para robustez).
*   **Estilos**: Tailwind CSS (con configuración personalizada en `tailwind.config.js`).
*   **Animaciones**: `framer-motion` (Entradas suaves, hover effects, transiciones de página).
*   **Iconos**: `lucide-react`.
*   **Utilidades**: `clsx` y `tailwind-merge` para gestión de clases condicionales.

## Próximos Pasos (Implementación)

1.  **Setup**: Inicializar proyecto Vite, instalar dependencias y configurar Tailwind (colores/fuentes).
2.  **Componentes Base**: Crear Atoms y Layout principal (Nav/Footer).
3.  **Vistas**: Construir página por página, empezando por **Home**.
4.  **Refinamiento**: Agregar animaciones Framer Motion y asegurar Responsive.

¿Apruebas este análisis y plan de trabajo? Si es así, procederé a inicializar el entorno.