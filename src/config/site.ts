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

export const site = {
  name: "Lumen Fidei Radio",
  frequency: "98.1 FM",
  tagline: "La luz de la fe que ilumina tus días",
  description:
    "Música sacra, formación espiritual y oración las 24 horas del día. Una voz que acompaña tu camino de fe.",

  // TODO: reemplazar por la URL real del stream (Icecast / Shoutcast / etc.)
  streamUrl: "https://example.com/stream",
  streamFormat: "audio/mpeg" as const, // o "audio/aac"

  social: {
    facebook: "https://facebook.com/lumenfideiradio",
    instagram: "https://instagram.com/lumenfideiradio",
    youtube: "https://youtube.com/@lumenfideiradio",
    whatsapp: "https://wa.me/1234567890",
  },

  contact: {
    email: "contacto@lumenfideiradio.com",
    phone: "+1 (234) 567-890",
    address: "Ciudad, País",
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
      time: "19:00",
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
      time: "16:00",
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
