import { Laptop, Palette, Megaphone, Code } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Service Interface
 * Defines the structure for service offerings.
 */
export interface Service {
  id: string; // Unique identifier for routing
  title: string; // Display title of the service
  shortDescription: string; // Brief description for cards
  fullDescription: string; // Detailed description for the detail page
  icon: LucideIcon; // Icon component from Lucide React
  features: string[]; // List of key features
  benefits: string[]; // List of client benefits
}

/**
 * Services Data
 * List of services offered by the agency.
 */
export const services: Service[] = [
  {
    id: 'desarrollo-web',
    title: 'Desarrollo Web',
    shortDescription: 'Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas para todos los dispositivos.',
    fullDescription: 'Creamos sitios web que no solo se ven bien, sino que funcionan perfectamente. Desde landing pages hasta portales corporativos complejos, nos aseguramos de que tu presencia en línea sea sólida, rápida y segura.',
    icon: Laptop,
    features: [
      'Diseño UX/UI personalizado',
      'Optimización SEO básica',
      'Responsive Design (Móvil, Tablet, Desktop)',
      'Integración con CMS (WordPress, etc.)',
      'Velocidad de carga optimizada'
    ],
    benefits: [
      'Mayor visibilidad en línea',
      'Credibilidad profesional',
      'Accesibilidad 24/7',
      'Captación de clientes potenciales'
    ]
  },
  {
    id: 'diseno-grafico',
    title: 'Diseño Gráfico',
    shortDescription: 'Creamos la identidad visual de tu marca, desde logotipos hasta manuales de marca completos.',
    fullDescription: 'Tu marca es lo que te distingue. Nuestro equipo de diseño gráfico crea identidades visuales memorables que comunican los valores de tu empresa y conectan con tu audiencia.',
    icon: Palette,
    features: [
      'Diseño de Logotipos',
      'Manual de Identidad Corporativa',
      'Diseño de papelería (tarjetas, hojas membretadas)',
      'Material publicitario para redes sociales',
      'Diseño de empaques (Packaging)'
    ],
    benefits: [
      'Reconocimiento de marca instantáneo',
      'Diferenciación de la competencia',
      'Comunicación visual efectiva',
      'Consistencia en todos los canales'
    ]
  },
  {
    id: 'marketing-publicidad',
    title: 'Marketing y Publicidad',
    shortDescription: 'Estrategias digitales efectivas para aumentar tu alcance y convertir visitantes en clientes.',
    fullDescription: 'No basta con estar en internet, hay que saber vender. Desarrollamos campañas de marketing digital enfocadas en resultados, utilizando las últimas herramientas y estrategias del mercado.',
    icon: Megaphone,
    features: [
      'Gestión de Redes Sociales (Community Management)',
      'Publicidad en Facebook e Instagram Ads',
      'Campañas de Google Ads (SEM)',
      'Email Marketing',
      'Creación de contenido viral'
    ],
    benefits: [
      'Aumento de ventas',
      'Fidelización de clientes',
      'Segmentación precisa de audiencia',
      'Retorno de inversión medible (ROI)'
    ]
  },
  {
    id: 'software-cotizacion',
    title: 'Software de Cotización',
    shortDescription: 'Herramientas personalizadas para simplificar y optimizar tus procesos de ventas.',
    fullDescription: 'Automatiza tu proceso de ventas con nuestro software de cotización a medida. Genera presupuestos profesionales en segundos, gestiona clientes y cierra más tratos con menos esfuerzo.',
    icon: Code,
    features: [
      'Generación automática de PDFs',
      'Base de datos de clientes y productos',
      'Seguimiento de estados de cotización',
      'Envío automático por correo',
      'Panel de reportes y estadísticas'
    ],
    benefits: [
      'Ahorro de tiempo administrativo',
      'Reducción de errores humanos',
      'Imagen más profesional',
      'Mejor control del flujo de ventas'
    ]
  }
];
