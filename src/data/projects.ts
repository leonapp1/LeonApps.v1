/**
 * Project Interface
 * Defines the structure for project data used throughout the application.
 */
export interface Project {
  id: string; // Unique identifier for the project (used in URLs)
  title: string; // Project title displayed in cards and details
  category: 'Desarrollo Web' | 'Diseño Gráfico' | 'Marketing y Publicidad' | 'Software de Cotización'; // Service category
  shortDescription: string; // Brief description for project cards
  fullDescription: string; // Detailed description for the project detail page
  heroImages: string[]; // Array of image URLs for the hero slider
  challenge: string; // Description of the client's challenge
  problem: string; // Description of the specific problem solved
  solution: string; // Description of the solution implemented
  results: string; // Key results and metrics achieved
  galleryImages: string[]; // Array of image URLs for the results gallery
  tags: string[]; // Keywords or technologies used
}

/**
 * Projects Data
 * Centralized source of truth for all portfolio projects.
 * Used in Projects page, Home featured section, and Project Detail page.
 */
export const projects: Project[] = [
  {
    id: 'tienda-virtual-rios',
    title: 'Tienda Virtual Rios',
    category: 'Desarrollo Web',
    shortDescription: 'El diseño es moderno y atractivo, la navegación es intuitiva.',
    fullDescription: 'El entorno y visualizamos un e-commerce para una marca de moda única, enfocándonos en destacar su identidad única.',
    heroImages: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1472851294608-41531268f719?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'El cliente buscaba posicionar su marca en el entorno digital con una identidad visual fuerte y diferenciada.',
    problem: 'La marca no tenía presencia online y perdía ventas frente a competidores con tiendas virtuales establecidas.',
    solution: 'Creamos una plataforma moderna con navegación intuitiva, diseño responsive y optimización para SEO.',
    results: 'Incremento del 40% en ventas en los primeros tres meses tras el lanzamiento.',
    galleryImages: [
      'https://images.unsplash.com/photo-1555421689-492a18d9c3ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['E-commerce', 'UX/UI', 'Web Development']
  },
  {
    id: 'constructora-torralpa',
    title: 'Constructora Torralpa',
    category: 'Desarrollo Web',
    shortDescription: 'Diseñamos una tienda online optimizada que aumentó las ventas de nuestro cliente en 40%.',
    fullDescription: 'Rediseño completo de la presencia digital para una de las constructoras líderes de la región.',
    heroImages: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Mostrar el portafolio de grandes proyectos de manera organizada y profesional.',
    problem: 'Sitio web obsoleto que no reflejaba la magnitud de la empresa.',
    solution: 'Web corporativa con catálogo de proyectos filtrable y diseño industrial moderno.',
    results: 'Mejor percepción de marca y aumento en solicitudes de cotización.',
    galleryImages: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Web Corporativa', 'Diseño Industrial']
  },
  {
    id: 'electronica-smart',
    title: 'Electrónica Smart',
    category: 'Desarrollo Web',
    shortDescription: 'Diseñamos una tienda online optimizada que aumentó las ventas de nuestro cliente en 40%.',
    fullDescription: 'Plataforma de venta de componentes electrónicos con buscador avanzado y gestión de stock.',
    heroImages: [
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Gestionar un inventario de miles de productos pequeños.',
    problem: 'Dificultad para encontrar productos específicos en la web anterior.',
    solution: 'Implementación de búsqueda elástica y filtros avanzados.',
    results: 'Reducción del tiempo de búsqueda en un 70%.',
    galleryImages: [
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['E-commerce', 'Tech']
  },
  {
    id: 'easy-english-tv',
    title: 'EasyEnglish TV',
    category: 'Desarrollo Web',
    shortDescription: 'Diseñamos una tienda online optimizada que aumentó las ventas de nuestro cliente en 50%.',
    fullDescription: 'Plataforma de aprendizaje de idiomas con contenido en video y ejercicios interactivos.',
    heroImages: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Crear una experiencia de aprendizaje fluida y atractiva.',
    problem: 'Alta tasa de abandono en cursos anteriores.',
    solution: 'Gamificación del proceso de aprendizaje y UI amigable.',
    results: 'Aumento del 50% en la finalización de cursos.',
    galleryImages: [
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Education', 'SaaS']
  },
  {
    id: 'real-estate-realtyzo',
    title: 'Real Estate Realtyzo',
    category: 'Software de Cotización',
    shortDescription: 'Plataforma inmobiliaria con búsqueda avanzada y mapas interactivos.',
    fullDescription: 'Portal inmobiliario moderno para la compra y venta de propiedades.',
    heroImages: [
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Visualización de propiedades en mapa en tiempo real.',
    problem: 'Listados estáticos poco atractivos.',
    solution: 'Integración con Google Maps y tours virtuales 360.',
    results: 'Mayor engagement y tiempo de permanencia en la web.',
    galleryImages: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Real Estate', 'Web App']
  },
  {
    id: 'delivery-app',
    title: 'Delivery App',
    category: 'Desarrollo Web',
    shortDescription: 'Aplicación móvil para gestión de pedidos y seguimiento en tiempo real.',
    fullDescription: 'App nativa para servicio de delivery local con rastreo GPS.',
    heroImages: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Logística de entrega eficiente en tiempo real.',
    problem: 'Retrasos en entregas y quejas de clientes.',
    solution: 'Algoritmo de optimización de rutas y app para repartidores.',
    results: 'Reducción del tiempo de entrega promedio en 20 minutos.',
    galleryImages: [
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Mobile App', 'Logistics']
  },
  {
    id: 'branding-constructora',
    title: 'Branding Constructora',
    category: 'Diseño Gráfico',
    shortDescription: 'Identidad visual completa para una nueva constructora.',
    fullDescription: 'Desarrollo de logotipo, papelería y manual de marca para transmitir solidez y confianza.',
    heroImages: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Crear una marca que se destaque en un mercado saturado.',
    problem: 'La empresa no tenía una identidad visual definida.',
    solution: 'Diseño de logotipo minimalista y paleta de colores moderna.',
    results: 'Reconocimiento de marca inmediato en el sector.',
    galleryImages: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Branding', 'Diseño Gráfico']
  },
  {
    id: 'campana-marketing',
    title: 'Campaña Marketing',
    category: 'Marketing y Publicidad',
    shortDescription: 'Estrategia de marketing digital para lanzamiento de producto.',
    fullDescription: 'Campaña integral en redes sociales y Google Ads para maximizar el alcance.',
    heroImages: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Generar leads cualificados en corto tiempo.',
    problem: 'Bajo alcance orgánico en redes sociales.',
    solution: 'Segmentación precisa y contenido viral.',
    results: 'ROI del 300% en el primer mes.',
    galleryImages: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['Marketing', 'Ads']
  }
];
