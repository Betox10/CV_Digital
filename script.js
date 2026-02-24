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
   ACCORDION SYSTEM
================================ */

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const targetId = header.getAttribute('data-target');
      const content = document.getElementById(targetId);
      
      // Toggle active class on header
      header.classList.toggle('active');
      
      // Toggle expanded class on content
      content.classList.toggle('expanded');
      
      // Rotate icon
      const icon = header.querySelector('.accordion-icon');
      if (icon) {
        icon.style.transform = content.classList.contains('expanded') 
          ? 'rotate(180deg)' 
          : 'rotate(0deg)';
      }
    });
  });
}

/* ===============================
   SIMPLE i18n SYSTEM
================================ */

const translations = {
  es: {
    legend: "Desarrollador de Software · Full Stack · IoT",
    cont_title: "Contacto",
    phone: "449-550-5392",
    mail: "lazarox2004@gmail.com",
    ubi: "Aguascalientes, México",
    edu: "Educación",
    first_date: "Julio 2019 - Agosto 2022",
    sub2: "Certificado en Desarrollo Web",
    sub3: "Certificado de finalización de Bachillerato",
    second_date: "Agosto 2022 - Mayo 2025",
    mayor1: "UTMA - TSU en Inteligencia Artificial",
    th_date: "Mayo 2025 - Presente",
    mayor2: "UTMA - ING. en Innovación Digital",
    hab_title: "Habilidades Técnicas",
    hab1: "Inglés B1",
    hab2: "Python",
    hab3: "JavaScript",
    hab4: "PHP",
    hab5: "Java",
    hab6: "HTML/CSS",
    hab7: "MySQL",
    hab8: "Firebase",
    hab9: "Flutter",
    hab10: "GitHub",
    hab11: "IoT",
    pp_title: "Perfil Profesional",
    pp_1: "Estudiante y aspirante a desarrollador de software con conocimientos iniciales en programación Full Stack (Backend y Frontend).",
    pp_2: "Poseo bases sólidas en lenguajes como Python, JavaScript, PHP, Java y tecnologías web como HTML y CSS, así como manejo de bases de datos MySQL y Firebase.",
    pp_3: "Cuento con experiencia en desarrollo móvil con Flutter y participación activa en hackathones, demostrando capacidad de aprendizaje rápido y trabajo en equipo. Además, poseo experiencia administrativa universitaria con habilidades organizativas.",
    EL_title: "Experiencia Laboral",
    EL_sub1: "Becario en Dirección Académica y Full Stack Developer - STRIDE",
    fetch_sub1: "UTMA | Mayo 2025 – Presente",
    sub1_des1: "Desarrollador Full Stack de la plataforma STRIDE para gestión de actividades y comunicados universitarios",
    sub1_des2: "Apoyo en manejo de asuntos directivos como enlace administrativo para la Dirección",
    sub1_des3: "Responsable de organización, clasificación y gestión de documentación académica",
    EL_sub2: "Desarrollador Full Stack - SED",
    fetch_sub2: "UTMA | Enero – Abril 2025",
    sub2_des1: "Responsable de arquitectura y codificación completa de plataforma para evaluación docente",
    sub2_des2: "Gestión integral del proyecto desde planificación hasta implementación en producción",
    sub2_des3: "Diseño e implementación de backend, frontend y administración de base de datos",
    EL_sub3: "Desarrollador Backend",
    fetch_sub3: "CAFINCA | Abril – Noviembre 2024",
    sub3_des1: "Desarrollo de extensión para sistema de cafetera automatizada",
    sub3_des2: "Mantenimiento de equipos y sistemas",
    sub3_des3: "Participación en reuniones técnicas con stakeholders",
    EL_sub4: "Desarrollador Web",
    fetch_sub4: "Club Campestre Aguascalientes | Abril – Agosto 2024",
    sub4_des1: "Implementación de sistema de reconocimiento vehicular con IA",
    sub4_des2: "Desarrollo de backend y administración de base de datos",
    AE_title: "Actividades Extracurriculares",
    AE_sub1: "Full Stack Developer - PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | Octubre 2025",
    AEsub1_des1: "Desarrollo de plataforma web con mapa global interactivo para visualización de calidad del aire",
    AEsub1_des2: "Integración de APIs REST para extracción de métricas ambientales",
    AE_sub2: "Backend Developer - TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | Enero – Abril 2025",
    AEsub2_des1: "Integración de MercadoPago para transacciones seguras",
    AEsub2_des2: "Implementación de entorno sandbox para pruebas de pago",
    AE_sub3: "Speaker",
    AEfetch_sub3: "FLISOL 20° Aniversario – Bogotá, Colombia | Mayo 2024",
    AEsub3_des1: "Conferencia sobre Motoko y proyectos de IA",
    AEsub3_des2: "Interacción con audiencia de desarrolladores y estudiantes",
    AE_sub4: "Web Developer - FIREGUARD",
    AEfetch_sub4: "HydroTalent 2023 | Septiembre 2023",
    AEsub4_des1: "Rediseño de interfaz de usuario para proyecto Astro ICP",
    AEsub4_des2: "Implementación de backend en Motoko",
    AE_sub5: "Web Developer - FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | Septiembre 2023",
    AEsub5_des1: "Conexión de ESP32 con Internet Computer para alertas en tiempo real",
    AEsub5_des2: "Desarrollo de backend en Motoko para procesamiento de señales",
    AEsub5_des3: "Implementación de interfaz web para detección de fuego/humo",
    Log_title: "Logros",
    Log1: "Primer Lugar – Astro ICP Hackathon (Sector Medio Ambiente)",
    Log2: "Primer Lugar – HydroTalent 2023",
    Cer_title: "Certificaciones",
    cer1: "Desarrollo Instruccional en Educación en Línea",
    rec_title: "Reconocimientos",
    rec1: "Reconocimiento por Innovación – Hackathon NASA ICP",
    rec2: "Participante – HydroTalent 2023 y 2025",
    rec3: "Participante y Colaborador – FLISOL 20° Aniversario"
  },
  en: {
    legend: "Software Developer · Full Stack · IoT",
    cont_title: "Contact",
    phone: "449-550-5392",
    mail: "lazarox2004@gmail.com",
    ubi: "Aguascalientes, Mexico",
    edu: "Education",
    first_date: "July 2019 - August 2022",
    sub2: "Certificate in Web Development",
    sub3: "High School Diploma",
    second_date: "August 2022 - May 2025",
    mayor1: "UTMA - TSU in Artificial Intelligence",
    th_date: "May 2025 - Present",
    mayor2: "UTMA - ING. in Digital Innovation",
    hab_title: "Technical Skills",
    hab1: "English B1",
    hab2: "Python",
    hab3: "JavaScript",
    hab4: "PHP",
    hab5: "Java",
    hab6: "HTML/CSS",
    hab7: "MySQL",
    hab8: "Firebase",
    hab9: "Flutter",
    hab10: "GitHub",
    hab11: "IoT",
    pp_title: "Professional Profile",
    pp_1: "Student and aspiring software developer with foundational knowledge in Full Stack programming (Backend and Frontend).",
    pp_2: "Solid foundations in languages such as Python, JavaScript, PHP, Java, and web technologies like HTML and CSS, as well as experience with MySQL and Firebase databases.",
    pp_3: "Experience in mobile development with Flutter and active participation in hackathons, demonstrating quick learning and teamwork skills. Additionally, I have university administrative experience with organizational skills.",
    EL_title: "Work Experience",
    EL_sub1: "Intern at Academic Directorate and Full Stack Developer - STRIDE",
    fetch_sub1: "UTMA | May 2025 – Present",
    sub1_des1: "Full Stack Developer of STRIDE platform for university activities and communications management",
    sub1_des2: "Support in managerial affairs as administrative liaison for the Directorate",
    sub1_des3: "Responsible for organization, classification, and management of academic documentation",
    EL_sub2: "Full Stack Developer - SED",
    fetch_sub2: "UTMA | January – April 2025",
    sub2_des1: "Responsible for complete platform architecture and coding for teacher evaluation",
    sub2_des2: "Comprehensive project management from planning to production implementation",
    sub2_des3: "Design and implementation of backend, frontend, and database administration",
    EL_sub3: "Backend Developer",
    fetch_sub3: "CAFINCA | April – November 2024",
    sub3_des1: "Development of extension for automated coffee machine system",
    sub3_des2: "Equipment and systems maintenance",
    sub3_des3: "Participation in technical meetings with stakeholders",
    EL_sub4: "Web Developer",
    fetch_sub4: "Club Campestre Aguascalientes | April – August 2024",
    sub4_des1: "Implementation of vehicle recognition system with AI",
    sub4_des2: "Backend development and database administration",
    AE_title: "Extracurricular Activities",
    AE_sub1: "Full Stack Developer - PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | October 2025",
    AEsub1_des1: "Development of web platform with interactive global map for air quality visualization",
    AEsub1_des2: "Integration of REST APIs for environmental metrics extraction",
    AE_sub2: "Backend Developer - TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | January – April 2025",
    AEsub2_des1: "Integration of MercadoPago for secure transactions",
    AEsub2_des2: "Implementation of sandbox environment for payment testing",
    AE_sub3: "Speaker",
    AEfetch_sub3: "FLISOL 20th Anniversary – Bogotá, Colombia | May 2024",
    AEsub3_des1: "Conference on Motoko and AI projects",
    AEsub3_des2: "Interaction with developer and student audience",
    AE_sub4: "Web Developer - FIREGUARD",
    AEfetch_sub4: "HydroTalent 2023 | September 2023",
    AEsub4_des1: "User interface redesign for Astro ICP project",
    AEsub4_des2: "Backend implementation in Motoko",
    AE_sub5: "Web Developer - FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | September 2023",
    AEsub5_des1: "ESP32 connection with Internet Computer for real-time alerts",
    AEsub5_des2: "Backend development in Motoko for signal processing",
    AEsub5_des3: "Web interface implementation for fire/smoke detection",
    Log_title: "Achievements",
    Log1: "First Place – Astro ICP Hackathon (Environment Sector)",
    Log2: "First Place – HydroTalent 2023",
    Cer_title: "Certifications",
    cer1: "Instructional Development in Online Education",
    rec_title: "Recognitions",
    rec1: "Innovation Recognition – NASA ICP Hackathon",
    rec2: "Participant – HydroTalent 2023 and 2025",
    rec3: "Participant and Collaborator – FLISOL 20th Anniversary"
  }
};

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

/* Detect saved language */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
  initAccordion();
});

/* Carousel Function */
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
}

window.addEventListener("load", () => {
  document.querySelectorAll(".carousel").forEach(c => {
    c.style.opacity = "1";
  });
});
