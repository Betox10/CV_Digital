/* Scroll reveal */
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

/* TRON Light Cycles Background */
const canvas = document.getElementById("tron-bg");
const ctx = canvas.getContext("2d");

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

const colors = ["#00e5ff", "#ff9f1c", "#ffd60a", "#ff2d2d"];

class Cycle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dir = Math.floor(Math.random() * 4);
    this.speed = 2;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  move() {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);

    switch (this.dir) {
      case 0: this.x += this.speed; break;
      case 1: this.x -= this.speed; break;
      case 2: this.y += this.speed; break;
      case 3: this.y -= this.speed; break;
    }

    ctx.lineTo(this.x, this.y);
    ctx.stroke();

    if (
      this.x < 0 || this.x > canvas.width ||
      this.y < 0 || this.y > canvas.height
    ) {
      this.reset();
    }

    if (Math.random() < 0.01) {
      this.dir = Math.floor(Math.random() * 4);
    }
  }
}

const cycles = Array.from({ length: 25 }, () => new Cycle());

function animate() {
  ctx.fillStyle = "rgba(0,0,0,0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  cycles.forEach(cycle => cycle.move());
  requestAnimationFrame(animate);
}

animate();

/* ===============================
   SIMPLE i18n SYSTEM
================================ */

const translations = {
  es: {
    legend: "Desarrollador de Software · Full Stack · IoT",
    cont_title: "Contacto",
    phone: "Telefono: 449-550-5392",
    mail: "Email: lazarox2004@gmail.com",
    ubi: "Ubicación: Aguascalientes, México",
    edu: "Educación",
    first_date: "Julio 2019 - Agosto 2022",
    sub2: "Certificado en Desarrollo Web",
    sub3: "Certificado en Desarrollo de Software",
    second_date: "Agosto 2022 - Presente",
    mayor1: "UTMA - TSU en Inteligencia Artificial",
    th_date: "Mayo 2025 - Presente",
    mayor2: "UTMA - ING. en Inovación Digital",
    hab_title: "Habilidades",
    hab1: "Inglés - Nivel Intermedio B1",
    hab2: "Python - Nv Junior",
    hab3: "JavaScript - Nv Junior",
    hab4: "PHP - Nv Junior",
    hab5: "Java - Nv Junior",
    hab6: "HTML/CSS - Nv Junior",
    hab7: " MySQL - Nv Junior",
    hab8: "Firebase - Nv Junior",
    hab9: "Flutter - Nv Junior",
    hab10: "Github - Nv Junior",
    hab11: "Iot - Nv Junior",
    pp_title: "Perfil Profesional",
    pp_1: "Estudiante y aspirante a desarrollador de software con conocimientos iniciales en programación Full Stack (Backend y Frontend).",
    pp_2: "Poseo bases sólidas en lenguajes como Python, JavaScript, PHP, Java y tecnologías web como HTML y CSS, así como manejo de bases de datos MySQL y Firebase.",
    pp_3: "Cuento con experiencia en desarrollo móvil con Flutter y participación activa en hackathones, demostrando capacidad de aprendizaje rápido y trabajo en equipo. Además, poseo experiencia administrativa universitaria con habilidades organizativas.",
    EL_title: "Experiencia Laboral",
    EL_sub1: "Becario en Dirección Académica, Control Presupuestal, Desarrollo Institucional y Desarrollor Full Stack de la plataforma STRIDE",
    fetch_sub1: "UTMA | Mayo 2025 – Presente",
    sub1_des1: "Desarrollador Full Stack de la plataforma STRIDE para la gestion de actividades y comunicados de la universidad como apoyo al area de Desarrollo Institucional.",
    sub1_des2: "Apoyo en el manejo de asuntos directivos, actuando como enlace administrativo para la Dirección.",
    sub1_des3: "Responsable de la organización, clasificación y gestión de la documentación académica.",
    EL_sub2: "Desarrollador Full Stack SED",
    fetch_sub2: "UTMA | Enero – Abril 2025",
    sub2_des1: "Desarrollo Full-Stack : Responsable de la arquitectura y codificación completa de la plataforma, cubriendo el Backend (Manejo de acciones), el Frontend (interfaz de usuario y experiencia) y la administración de la Base de Datos.",
    sub2_des2: "Gestión Integral: Manejo de todas las fases del proyecto, desde la planificación inicial hasta las pruebas de funcionalidad y la implementación final en el entorno productivo.",
    sub2_des3: "Resultados y Función: La plataforma fue diseñada para la evaluación docente de la institución, cumpliendo con su objetivo.",
    EL_sub3: "Desarrollador Backend",
    fetch_sub3: "CAFINCA | Abril – Noviembre 2024",
    sub3_des1: "Participación en el desarrollo de una extensión al sistema de una cafetera automatizada.",
    sub3_des2: "Encargado del mantenimiento del equipo.",
    sub3_des3: "Participación en reuniones con los encargados de la empresa.",
    EL_sub4: "Desarrollador Web",
    fetch_sub4: "Club Campestre Aguascalientes | Abril – Agosto 2024",
    sub4_des1: "Implementación de reconocimiento vehicular con IA.",
    sub4_des2: "Participación en manejo de la Base de Datos y Backend.",
    AE_title: "Actividades Extracurriculares",
    AE_sub1: "Desarrollador Full Stack PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | Octubre 2025",
    AEsub1_des1: "Creación de una plataforma web con un mapa global interactivo que permite a los usuarios obtener datos precisos sobre la calidad del aire en tiempo real al seleccionar cualquier país.",
    AEsub1_des2: "Manejo de APIs REST para la extracción y visualización de métricas ambientales complejas.",
    AE_sub2: "Desarrollador Backend (Métodos de Pago) TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | Enero – Abril 2025",
    AEsub2_des1: "Integración técnica del método de pago MercadoPago para Developers, permitiendo transacciones seguras dentro de un sitio web.",
    AEsub2_des2: "Manejo de credenciales de prueba y producción (Sandbox para garantizar la estabilidad del flujo de pago antes del lanzamiento).",
    AE_sub3: "Expositor",
    AEfetch_sub3: "FLISOL 20° Aniversario – Bogotá, Colombia | Mayo 2024",
    AEsub3_des1: "Expositor en la conferencia sobre Motoko y proyectos de IA.",
    AEsub3_des2: "Interacción con una audiencia de desarrolladores y estudiantes proporcionando ideas y respondiendo preguntas sobre el tema.",
    AE_sub4: "Desarrollador Web FIREGUARD",
    AEfetch_sub4: "HydroTalent 2023 | Septiembre 2023",
    AEsub4_des1: "Rediseño de la interfaz de usuario de un proyecto previo (de Astro ICP, mejorando el uso y la navegación para el usuario).",
    AEsub4_des2: "Implementación de la lógica de backend utilizando el lenguaje Motoko.",
    AE_sub5: "Desarrollador Web FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | Septiembre 2023",
    AEsub5_des1: "Conexión de microcontroladores ESP32 con la red descentralizada de Internet Computer para el envío y almacenamiento de alertas en tiempo real.",
    AEsub5_des2: "Desarrollo de un backend en Motoko para procesar señales de sensores y gestionar el estado del sistema de forma segura.",
    AEsub5_des3: "Creación de una interfaz web básica que notifica la detección de fuego o humo, dando una respuesta rápida ante emergencias.",
    Log_title: "Logros",
    Log1: "Primer Lugar – Astro ICP Hackathon (Sector Medio Ambiente).",
    Log2: "Primer Lugar – HydroTalent 2023.",
    Cer_title: "Certificaciones",
    cer1: "Desarrollo Instruccional en Educación en Línea",
    rec_title: "Reconocimientos",
    rec1: "Reconocimiento por Innovación – Hackathon NASA ICP",
    rec2: "Participante - HydroTalent 2023 y 2025",
    rec3: "Participante y Colaborador – FLISOL 20° Aniversario"
  },
  en: {
    legend: "Software Developer · Full Stack · IoT",
    cont_title: "Contact",
    phone: "Phone: 449-550-5392",
    mail: "Email: lazarox2004@gmail.com",
    ubi: "Location: Aguascalientes, Mexico",
    edu: "Education",
    first_date: "July 2019 - August 2022",
    sub2: "Certificate in Web Development",
    sub3: "Certificate in Software Development",
    second_date: "August 2022 - Present",
    mayor1: "UTMA - TSU in Artificial Intelligence",
    th_date: "May 2025 - Present",
    mayor2: "UTMA - ING. in Digital Innovation",
    hab_title: "Skills",
    hab1: "English - Intermediate B1",
    hab2: "Python - Nv Junior",
    hab3: "JavaScript - Nv Junior",
    hab4: "PHP - Nv Junior",
    hab5: "Java - Nv Junior",
    hab6: "HTML/CSS - Nv Junior",
    hab7: " MySQL - Nv Junior",
    hab8: "Firebase - Nv Junior",
    hab9: "Flutter - Nv Junior",
    hab10: "Github - Nv Junior",
    hab11: "Iot - Nv Junior",
    pp_title: "Professional Profile",
    pp_1: "Student and aspiring software developer with foundational knowledge in Full Stack programming (Backend and Frontend).",
    pp_2: "Solid foundations in languages such as Python, JavaScript, PHP, Java, and web technologies like HTML and CSS, as well as experience with MySQL and Firebase databases.",
    pp_3: "Experience in mobile development with Flutter and active participation in hackathons, demonstrating quick learning and teamwork skills. Additionally, I have university administrative experience with organizational skills.",
    EL_title: "Work Experience",
    EL_sub1: "Intern at Academic Directorate, Budget Control, Institutional Development and Full Stack Developer of the STRIDE platform",
    fetch_sub1: "UTMA | May 2025 – Present",
    sub1_des1: "Full Stack Developer of the STRIDE platform for managing university activities and communications as support for the Institutional Development area.",
    sub1_des2: "Support in handling managerial affairs, acting as an administrative liaison for the Directorate.",  
    sub1_des3: "Responsible for the organization, classification, and management of academic documentation.",
    EL_sub2: "Full Stack Developer SED",
    fetch_sub2: "UTMA | January – April 2025",
    sub2_des1: "Full-Stack Development: Responsible for the complete architecture and coding of the platform, covering Backend (Action handling), Frontend (user interface and experience), and Database management.",
    sub2_des2: "Comprehensive Management: Handling all phases of the project, from initial planning to functionality testing and final implementation in the production environment.",
    sub2_des3: "Results and Function: The platform was designed for the institution's teacher evaluation, fulfilling its purpose.",
    EL_sub3: "Backend Developer",
    fetch_sub3: "CAFINCA | April – November 2024",
    sub3_des1: "Participation in the development of an extension to the system of an automated coffee maker.",
    sub3_des2: "In charge of equipment maintenance.",
    sub3_des3: "Participation in meetings with company managers.",
    EL_sub4: "Web Developer",
    fetch_sub4: "Club Campestre Aguascalientes | April – August 2024",
    sub4_des1: "Implementation of vehicle recognition with AI.",
    sub4_des2: "Participation in Database management and Backend.",
    AE_title: "Extracurricular Activities",
    AE_sub1: "Full Stack Developer PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | October 2025",
    AEsub1_des1: "Creation of a web platform with an interactive global map that allows users to obtain accurate real-time air quality data by selecting any country.",
    AEsub1_des2: "Handling of REST APIs for the extraction and visualization of complex environmental metrics.",
    AE_sub2: "Backend Developer (Payment Methods) TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | January – April 2025",
    AEsub2_des1: "Technical integration of the MercadoPago for Developers payment method, enabling secure transactions within a website.",
    AEsub2_des2: "Handling of test and production credentials (Sandbox to ensure payment flow stability before launch).",
    AE_sub3: "Speaker",
    AEfetch_sub3: "FLISOL 20th Anniversary – Bogotá, Colombia | May 2024",
    AEsub3_des1: "Speaker at the conference on Motoko and AI projects.",
    AEsub3_des2: "Interaction with an audience of developers and students providing insights and answering questions on the topic.",
    AE_sub4: "Web Developer FIREGUARD",
    AEfetch_sub4: "HydroTalent 2023 | September 2023",
    AEsub4_des1: "Redesign of the user interface of a previous project (from Astro ICP, improving usability and navigation for the user).",
    AEsub4_des2: "Implementation of backend logic using the Motoko language.",
    AE_sub5: "Web Developer FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | September 2023",
    AEsub5_des1: "Connection of ESP32 microcontrollers with the decentralized Internet Computer network for real-time alert sending and storage.",
    AEsub5_des2: "Development of a backend in Motoko to process sensor signals and manage the system state securely.",
    AEsub5_des3: "Creation of a basic web interface that notifies the detection of fire or smoke, providing a quick response to emergencies.",
    Log_title: "Achievements",
    Log1: "First Place – Astro ICP Hackathon (Environment Sector).",
    Log2: "First Place – HydroTalent 2023.",
    Cer_title: "Certifications",
    cer1: "Instructional Development in Online Education",
    rec_title: "Recognitions",
    rec1: "Recognition for Innovation – NASA ICP Hackathon",
    rec2: "Participant - HydroTalent 2023 and 2025",
    rec3: "Participant and Collaborator – FLISOL 20th Anniversary"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key] || el.textContent;
  });
}

/* Detect saved language */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
});

/*Funcion Carrucel*/
function moveSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll(".slide");

  let activeIndex = 0;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      activeIndex = index;
      slide.classList.remove("active");
    }
  });

  let newIndex = activeIndex + direction;

  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  slides[newIndex].classList.add("active");

  resetAutoPlay(carouselId);
}

window.addEventListener("load", () => {
  document.querySelectorAll(".carousel").forEach(c => {
    c.style.opacity = "1";
  });
});
