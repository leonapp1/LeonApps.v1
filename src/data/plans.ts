export interface PlanFeature {
  text: string;
}

export interface Plan {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface ServicePlans {
  id: string;
  serviceName: string;
  color: 'web' | 'design' | 'marketing' | 'software';
  plans: Plan[];
}

export const plansData: ServicePlans[] = [
  {
    id: 'web',
    serviceName: 'Páginas Web',
    color: 'web',
    plans: [
      {
        title: 'Plan Despegue',
        price: '500',
        description: 'Ideal para quienes necesitan una solución sencilla y efectiva para comenzar su presencia en línea.',
        features: [
          'Diseño web básico (Landing Page)',
          'Optimización para dispositivos móviles',
          'SEO Básico',
          'Integración con redes sociales',
          'Soporte técnico (1 mes)',
          'Asesoría en marketing',
          'Velocidad de carga optimizada',
          'Analítica de reportes',
          'Backup automático',
          'Herramientas premium'
        ]
      },
      {
        title: 'Plan Impulso',
        price: '1,200',
        description: 'Perfecto para empresas que buscan una solución más completa, con características adicionales.',
        features: [
          'Diseño web personalizado (hasta 5 páginas)',
          'Optimización para dispositivos móviles avanzada',
          'SEO Mejorado',
          'Integración con redes sociales básica',
          'Soporte técnico (3 meses)',
          'Asesoría en marketing',
          'Velocidad de carga optimizada',
          'Analítica de reportes mensuales',
          'Backup mensual',
          'Herramientas premium'
        ],
        isPopular: true
      },
      {
        title: 'Plan Máximo',
        price: '3,000',
        description: 'La mejor opción para empresas que necesitan un sitio web completamente optimizado y completo.',
        features: [
          'Diseño web avanzado (hasta 10 páginas)',
          'Optimización total para móviles',
          'SEO Avanzado',
          'Integración con redes sociales avanzada',
          'Soporte técnico (6 meses)',
          'Asesoría en marketing estratégica',
          'Velocidad de carga ultra rápida',
          'Analítica de reportes avanzados y tiempo real',
          'Backup mensual',
          'Herramientas premium'
        ]
      }
    ]
  },
  {
    id: 'design',
    serviceName: 'Diseño Gráfico',
    color: 'design',
    plans: [
      {
        title: 'Logo Express',
        price: '300',
        description: 'Para emprendedores que necesitan una identidad visual rápida y profesional.',
        features: [
          'Diseño de Logotipo (2 propuestas)',
          'Archivos en alta resolución (JPG, PNG)',
          'Paleta de colores básica',
          'Entrega en 3 días hábiles',
          'Derechos de uso comercial'
        ]
      },
      {
        title: 'Identidad Pro',
        price: '800',
        description: 'Construye una marca sólida con una identidad visual completa y coherente.',
        features: [
          'Diseño de Logotipo (3 propuestas)',
          'Manual de marca básico',
          'Diseño de tarjeta de presentación',
          'Diseño de hoja membretada',
          'Archivos editables (AI, EPS)',
          'Entrega en 7 días hábiles'
        ],
        isPopular: true
      },
      {
        title: 'Branding Total',
        price: '1,500',
        description: 'La solución definitiva para marcas que buscan destacar en todos los canales.',
        features: [
          'Diseño de Logotipo Premium',
          'Manual de marca completo',
          'Papelería corporativa completa',
          'Plantillas para redes sociales',
          'Diseño de firma de correo',
          'Asesoría de imagen visual',
          'Archivos editables y vectoriales'
        ]
      }
    ]
  },
  {
    id: 'marketing',
    serviceName: 'Marketing y Publicidad',
    color: 'marketing',
    plans: [
      {
        title: 'Social Starter',
        price: '600',
        description: 'Mantén tus redes sociales activas y conecta con tu audiencia.',
        features: [
          'Gestión de 2 redes sociales',
          '8 publicaciones mensuales',
          'Diseño de posts básicos',
          'Respuesta a comentarios (horario laboral)',
          'Reporte mensual básico'
        ]
      },
      {
        title: 'Growth Partner',
        price: '1,500',
        description: 'Estrategias de crecimiento acelerado para captar más clientes.',
        features: [
          'Gestión de 3 redes sociales',
          '12 publicaciones mensuales + 4 historias',
          'Gestión de campañas publicitarias (Ads)',
          'Diseño gráfico profesional',
          'Community management activo',
          'Reporte de rendimiento detallado'
        ],
        isPopular: true
      },
      {
        title: 'Dominio Total',
        price: '2,800',
        description: 'Estrategia 360° para liderar tu mercado y maximizar el ROI.',
        features: [
          'Gestión integral de redes sociales',
          'Contenido diario (Posts, Reels, Stories)',
          'Campañas avanzadas (Meta Ads, Google Ads)',
          'Email marketing mensual',
          'Creación de contenido audiovisual',
          'Dashboard de métricas en tiempo real',
          'Reuniones de estrategia quincenales'
        ]
      }
    ]
  },
  {
    id: 'software',
    serviceName: 'Software de Cotización',
    color: 'software',
    plans: [
      {
        title: 'Licencia Básica',
        price: '150',
        description: 'Automatiza tus cotizaciones con las funciones esenciales. Precio mensual.',
        features: [
          'Hasta 50 cotizaciones mensuales',
          'Gestión de clientes básica',
          'Catálogo de productos simple',
          'Exportación a PDF',
          'Soporte por correo'
        ]
      },
      {
        title: 'Licencia Pro',
        price: '300',
        description: 'Herramientas avanzadas para equipos de ventas en crecimiento. Precio mensual.',
        features: [
          'Cotizaciones ilimitadas',
          'CRM de clientes avanzado',
          'Múltiples listas de precios',
          'Envío automático por correo',
          'Personalización de plantillas',
          'Soporte prioritario'
        ],
        isPopular: true
      },
      {
        title: 'Enterprise',
        price: 'Consultar',
        description: 'Soluciones a medida para grandes empresas con necesidades específicas.',
        features: [
          'Usuarios ilimitados',
          'Integración con ERP/CRM externo',
          'Desarrollo de módulos a medida',
          'API de acceso',
          'Soporte dedicado 24/7',
          'SLA garantizado',
          'Capacitación al personal'
        ]
      }
    ]
  }
];
