export interface Program {
  day: string;
  time: string;
  title: string;
  host: string;
  description: string;
}

export interface Host {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

export interface Sponsor {
  name: string;
  logo: string;        // URL de imagen o SVG inline
  url: string;         // enlace al sitio del patrocinante
  tier: "gold" | "silver" | "bronze";
  slogan?: string;     // tagline corto opcional
}

export interface SponsorTier {
  id: "gold" | "silver" | "bronze";
  label: string;
  price: string;       // ej. "USD 200 / mes"
  description: string;
  perks: string[];
}

export const site = {
  name: "Radio Lumen Fidei",
  frequency: "98.1 FM",
  tagline: "La señal que alimenta tu fe",
  description:
    "Somos la voz católica que acompaña tu camino. A través de la palabra, la música y la oración, unimos a la comunidad con una sola misión: llevar el mensaje de salvación y construir una cultura de la vida. Sintonizá la señal que te acerca a Dios.",

  // TODO: reemplazar por la URL real del stream (Icecast / Shoutcast / etc.)
  streamUrl: "https://example.com/stream",
  streamFormat: "audio/mpeg" as const, // o "audio/aac"

  social: {
    instagram: "https://instagram.com/radio_lumenfidei",
    youtube: "https://youtube.com/@lumenfideiradio981FM",
    // Deja en "" si no tienes Facebook; el ícono se ocultará automáticamente.
    facebook: "",
  },

  contact: {
    email: "lumenfideiradiofm@gmail.com",
    phone: "+58 424 524 8743",
    // Número WhatsApp en formato internacional, sin '+' ni espacios (para wa.me)
    whatsappNumber: "584245248743",
    address: "Acarigua Araure edo Portuguesa, Venezuela",
  },

  // ── Mensajes pre-llenados para cada CTA que envía a WhatsApp ──────────────
  // Edita estos textos libremente. Se codifican automáticamente al construir
  // el enlace con `whatsappLink()`.
  ctaMessages: {
    // Saludo genérico (icono de WhatsApp en footer / tarjeta de contacto)
    greeting:
      "¡Hola! Les escribo desde la web de Radio Lumen Fidei 98.1 FM.",
    // Marquee de patrocinantes — "Tu marca aquí"
    sponsorMarquee:
      "¡Hola! Vi su web y me interesa anunciar mi marca en Radio Lumen Fidei 98.1 FM. ¿Tienen disponibilidad?",
    // Banner inferior de patrocinantes — "Escribir ahora"
    sponsorGeneral:
      "¡Hola! Tengo preguntas sobre los espacios publicitarios de Radio Lumen Fidei 98.1 FM. ¿Podemos conversar?",
    // CTA "Consultar espacio" en cada plan de patrocinio
    sponsorTier: {
      gold:
        "¡Hola! Me interesa el plan de patrocinio Oro (USD 300/mes) de Radio Lumen Fidei 98.1 FM. ¿Podemos coordinar?",
      silver:
        "¡Hola! Me interesa el plan de patrocinio Plata (USD 150/mes) de Radio Lumen Fidei 98.1 FM. ¿Podemos coordinar?",
      bronze:
        "¡Hola! Me interesa el plan de patrocinio Bronce (USD 60/mes) de Radio Lumen Fidei 98.1 FM. ¿Podemos coordinar?",
    } as Record<"gold" | "silver" | "bronze", string>,
    // CTA "Enviar petición" en la sección de contacto
    prayerRequest:
      "¡Hola! Quisiera enviar una petición de oración a la comunidad de Radio Lumen Fidei 98.1 FM. Mi petición es: ",
  },

  programs: [
    {
      day: "Lunes",
      time: "06:00",
      title: "Laudes y Meditación",
      host: "P. Andrés García",
      description: "Comenzamos el día con la oración de la mañana y una reflexión sobre el Evangelio.",
    },
    {
      day: "Lunes",
      time: "09:00",
      title: "Fe y Familia",
      host: "María Rodríguez",
      description: "Temas de espiritualidad familiar, crianza cristiana y vida en pareja.",
    },
    {
      day: "Lunes",
      time: "18:00",
      title: "Música Sacra",
      host: "Producción",
      description: "Selección de los mejores himnos y cánticos de la tradición cristiana.",
    },
    {
      day: "Martes",
      time: "07:00",
      title: "Palabra de Vida",
      host: "Hna. Cecilia Montes",
      description: "Lectio Divina y comentario bíblico para la vida cotidiana.",
    },
    {
      day: "Martes",
      time: "10:00",
      title: "Doctrina Católica",
      host: "Diácono Luis Torres",
      description: "Catequesis profunda sobre los misterios de la fe.",
    },
    {
      day: "Martes",
      time: "20:00",
      title: "Rosario en familia",
      host: "Comunidad",
      description: "Rezo comunitario del Santo Rosario con meditación de los misterios.",
    },
    {
      day: "Miércoles",
      time: "08:00",
      title: "Los Santos del Día",
      host: "Ana Pérez",
      description: "Vidas ejemplares de los santos para inspirar nuestra jornada.",
    },
    {
      day: "Miércoles",
      time: "15:00",
      title: "Testimonio Vivo",
      host: "Varios",
      description: "Historias de conversión y fe que mueven el corazón.",
    },
    {
      day: "Jueves",
      time: "06:30",
      title: "Laudes",
      host: "P. Andrés García",
      description: "Oración matutina de la Liturgia de las Horas.",
    },
    {
      day: "Jueves",
      time: "11:00",
      title: "Jóvenes en la Fe",
      host: "Carlos Mendoza",
      description: "Programa dirigido a la juventud cristiana: cultura, fe y vocación.",
    },
    {
      day: "Viernes",
      time: "09:30",
      title: "Camino de Cruz",
      host: "Comunidad",
      description: "Vía Crucis meditado con cantos y reflexiones.",
    },
    {
      day: "Viernes",
      time: "18:23",
      title: "Concierto Sacro",
      host: "Producción",
      description: "Una hora de música sacra contemporánea y clásica.",
    },
    {
      day: "Sábado",
      time: "08:00",
      title: "Misa en Vivo",
      host: "P. Andrés García",
      description: "Transmisión en directo de la Santa Misa.",
    },
    {
      day: "Sábado",
      time: "17:50",
      title: "La Hora Santa",
      host: "Comunidad",
      description: "Adoración eucarística y oraciones de reparación.",
    },
    {
      day: "Domingo",
      time: "10:00",
      title: "Misa Dominical",
      host: "P. Andrés García",
      description: "Celebración eucarística dominical con homilía y cánticos.",
    },
    {
      day: "Domingo",
      time: "18:00",
      title: "Vísperas",
      host: "Coro Lumen Fidei",
      description: "Cierre del día con la oración vespertina cantada.",
    },
  ] satisfies Program[],

  hosts: [
    {
      name: "P. Andrés García",
      role: "Director Espiritual",
      photo: "",
      bio: "Sacerdote con 20 años de ministerio pastoral. Apasionado por la liturgia y la música sacra.",
    },
    {
      name: "María Rodríguez",
      role: "Conductora — Fe y Familia",
      photo: "",
      bio: "Teóloga y madre de familia. Lleva 10 años formando hogares en la fe.",
    },
    {
      name: "Hna. Cecilia Montes",
      role: "Conductora — Palabra de Vida",
      photo: "",
      bio: "Religiosa dominica, doctora en Sagradas Escrituras por la Universidad Pontificia.",
    },
    {
      name: "Carlos Mendoza",
      role: "Conductor — Jóvenes en la Fe",
      photo: "",
      bio: "Animador juvenil y cantautor cristiano. Conecta la fe con la cultura contemporánea.",
    },
    {
      name: "Diácono Luis Torres",
      role: "Conductor — Doctrina Católica",
      photo: "",
      bio: "Diácono permanente y catequista. Hace accesible la teología para todos.",
    },
    {
      name: "Ana Pérez",
      role: "Conductora — Los Santos del Día",
      photo: "",
      bio: "Historiadora y hagiógrafa. Devota del santoral y la tradición de la Iglesia.",
    },
  ] satisfies Host[],

  // ── Patrocinantes ─────────────────────────────────────────────────────────
  // Agrega aquí los patrocinantes activos. Deja el array vacío para ocultar la sección de logos.
  sponsors: [] as Sponsor[],

  // Planes de patrocinio — edita precios y beneficios según tu oferta
  sponsorTiers: [
    {
      id: "gold",
      label: "Oro",
      price: "USD 300 / mes",
      description: "Máxima visibilidad. Tu marca frente a toda nuestra audiencia.",
      perks: [
        "Mención en nuestra programación 15 veces al día",
        "Logo destacado en el sitio web",
        "Cuña de 30 seg en programas prime",
        "Post mensual en redes sociales",
        "Certificado de patrocinio",
      ],
    },
    {
      id: "silver",
      label: "Plata",
      price: "USD 150 / mes",
      description: "Presencia constante en nuestra programación diaria.",
      perks: [
        "Mención en nuestra programación 10 veces al día",
        "Logo en el sitio web",
        "Cuña de 30 seg en programas regulares",
        "Certificado de patrocinio",
      ],
    },
    {
      id: "bronze",
      label: "Bronce",
      price: "USD 60 / mes",
      description: "El primer paso para apoyar nuestra misión evangelizadora.",
      perks: [
        "Mención en nuestra programación 5 veces al día",
        "Logo en el sitio web",
        "Cuña de 30 seg en programas regulares",
        "Certificado de patrocinio",
      ],
    },
  ] satisfies SponsorTier[],

  // Email de contacto para patrocinantes (puede ser diferente al general)
  sponsorEmail: "lumenfideiradiofm@gmail.com",
};

export const DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
] as const;

/**
 * Construye un enlace `https://wa.me/...` opcionalmente con un mensaje
 * pre-llenado. Centraliza el formato para que todos los CTAs usen el mismo
 * número y el texto se codifique correctamente.
 */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
