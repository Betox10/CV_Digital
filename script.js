/* ===============================
   TRON LIGHT CYCLES BACKGROUND
   =============================== */
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

    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
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
   i18n SYSTEM - PRIMERA PERSONA
   =============================== */
const translations = {
  es: {
    // Header
    legend: "Desarrollador de Software · Full Stack · IoT",
    
    // Contacto
    cont_title: "Contacto",
    phone: "449-550-5392",
    mail: "lazarox2004@gmail.com",
    ubi: "Aguascalientes, México",
    
    // Educación
    edu: "Educación",
    first_date: "Julio 2019 - Agosto 2022",
    sub2: "Certificado en Desarrollo Web",
    sub3: "Certificado de finalización de Bachillerato",
    second_date: "Agosto 2022 - Mayo 2025",
    mayor1: "UTMA - TSU en Inteligencia Artificial",
    th_date: "Mayo 2025 - Presente",
    mayor2: "UTMA - ING. en Innovación Digital",
    
    // Habilidades
    hab_title: "Habilidades",
    hab1: "Inglés - Nivel Intermedio B1",
    hab2: "Python - Nivel Junior",
    hab3: "JavaScript - Nivel Junior",
    hab4: "PHP - Nivel Junior",
    hab5: "Java - Nivel Junior",
    hab6: "HTML / CSS - Nivel Junior",
    hab7: "MySQL - Nivel Junior",
    hab8: "Firebase - Nivel Junior",
    hab9: "Flutter - Nivel Junior",
    hab10: "GitHub - Nivel Junior",
    hab11: "IoT - Nivel Junior",
    
    // Perfil Profesional
    pp_title: "Perfil Profesional",
    
    // Experiencia Laboral - Títulos
    EL_title: "Experiencia Laboral",
    EL_sub1: "Becario en Dirección Académica",
    fetch_sub1: "UTMA | Mayo 2025 – Presente",
    EL_sub2: "Desarrollador Full Stack SED",
    fetch_sub2: "UTMA | Enero – Abril 2025",
    EL_sub3: "Desarrollador Backend",
    fetch_sub3: "CAFINCA | Abril – Noviembre 2024",
    EL_sub4: "Desarrollador Web",
    fetch_sub4: "Club Campestre Aguascalientes | Abril – Agosto 2024",
    
    // Experiencia Laboral - Descripciones (PRIMERA PERSONA)
    stride_des1: "Lideré el desarrollo full-stack de STRIDE, plataforma institucional para gestión académica, actualmente en producción en Hostinger.",
    stride_des2: "Implementé frontend con React.js y backend con Node.js, almacenado en un repositorio de Github para su implementación.",
    stride_des3: "Ayudé a la implementación de servicios tecnológicos dentro de la universidad.",
    
    sed_des1: "Diseñé y desarrollé desde cero el Sistema de Evaluación Docente (SED) para UTMA.",
    sed_des2: "Stack: PHP (backend), MySQL (BD), HTML5/CSS3/JavaScript (frontend).",
    sed_des3: "Gestioné todo el ciclo de vida: análisis, modelado, desarrollo, pruebas y despliegue en Hostinger.",
    
    cafinca_des1: "Desarrollé extensiones de software para sistema embebido en cafetera automatizada con Python.",
    cafinca_des2: "Fui parte del equipo responsable del mantenimiento preventivo y correctivo del equipo.",
    cafinca_des3: "Participé en reuniones técnicas con stakeholders.",
    
    campestre_des1: "Implementé sistema de reconocimiento vehicular con IA usando Python y OpenCV.",
    campestre_des2: "Desarrollé backend y gestión de base de datos MySQL para registro de accesos.",
    
    // Actividades Extracurriculares - Títulos
    AE_title: "Actividades Extracurriculares",
    AE_sub1: "Desarrollador Full Stack PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | Octubre 2025",
    AE_sub2: "Desarrollador Backend (Métodos de Pago) TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | Enero – Abril 2025",
    AE_sub3: "Expositor",
    AEfetch_sub3: "FLISOL 20° Aniversario – Bogotá, Colombia | Mayo 2024",
    AE_sub5: "Desarrollador Web FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | Septiembre 2023 y Hydrotalent 2023",
    AEsub5_des3: "Creación de una interfaz web básica que notifica la detección de fuego o humo, dando una respuesta rápida ante emergencias.",
    
    // Actividades Extracurriculares - Descripciones (PRIMERA PERSONA)
    nasa_des1: "Desarrollé plataforma web con mapa interactivo global para visualizar calidad del aire en tiempo real.",
    nasa_des2: "Integré una API REST para consumo de datos ambientales.",
    
    hydro25_des1: "Integré MercadoPago como pasarela de pagos en plataforma web.",
    hydro25_des2: "Configuré entornos sandbox, manejando credenciales de prueba.",
    
    flisol_des1: "Fui seleccionado como expositor en evento de software libre de Latinoamérica.",
    flisol_des2: "Impartí conferencia sobre Motoko e Internet Computer Protocol (ICP) aplicados a IA.",
    
    fire_des1: "Desarrollé sistema de detección temprana de incendios con ESP32 e ICP blockchain.",
    fire_des2: "Implementé backend en Motoko, frontend web y conectividad con sensores.",
    
    // Logros
    Log_title: "Logros",
    Log1: "Primer Lugar – Astro ICP Hackathon",
    Log2: "Primer Lugar – HydroTalent 2023",
    
    // Certificaciones
    Cer_title: "Certificaciones",
    cer1: "Desarrollo Instruccional en Educación en Línea",
    
    // Reconocimientos
    rec_title: "Reconocimientos",
    rec1: "Reconocimiento por Innovación – Hackathon NASA ICP",
    rec2: "Participante – HydroTalent 2023 y 2025",
    rec3: "Participante y Colaborador – FLISOL 20° Aniversario"
  },
  
  en: {
    // Header
    legend: "Software Developer · Full Stack · IoT",
    
    // Contact
    cont_title: "Contact",
    phone: "449-550-5392",
    mail: "lazarox2004@gmail.com",
    ubi: "Aguascalientes, Mexico",
    
    // Education
    edu: "Education",
    first_date: "July 2019 - August 2022",
    sub2: "Certificate in Web Development",
    sub3: "High School Diploma",
    second_date: "August 2022 - May 2025",
    mayor1: "UTMA - TSU in Artificial Intelligence",
    th_date: "May 2025 - Present",
    mayor2: "UTMA - ING. in Digital Innovation",
    
    // Skills
    hab_title: "Skills",
    hab1: "English - Intermediate B1",
    hab2: "Python - Junior Level",
    hab3: "JavaScript - Junior Level",
    hab4: "PHP - Junior Level",
    hab5: "Java - Junior Level",
    hab6: "HTML / CSS - Junior Level",
    hab7: "MySQL - Junior Level",
    hab8: "Firebase - Junior Level",
    hab9: "Flutter - Junior Level",
    hab10: "GitHub - Junior Level",
    hab11: "IoT - Junior Level",
    
    // Professional Profile
    pp_title: "Professional Profile",
    
    // Work Experience - Titles
    EL_title: "Work Experience",
    EL_sub1: "Intern at Academic Directorate",
    fetch_sub1: "UTMA | May 2025 – Present",
    EL_sub2: "Full Stack Developer SED",
    fetch_sub2: "UTMA | January – April 2025",
    EL_sub3: "Backend Developer",
    fetch_sub3: "CAFINCA | April – November 2024",
    EL_sub4: "Web Developer",
    fetch_sub4: "Club Campestre Aguascalientes | April – August 2024",
    
    // Work Experience - Descriptions (FIRST PERSON)
    stride_des1: "I led full-stack development of STRIDE, institutional platform for academic management, currently in production on Hostinger.",
    stride_des2: "I implemented the frontend with React.js and the backend with Node.js, stored in a GitHub repository for implementation.",
    stride_des3: "I assisted in the implementation of technological services within the university.",
    
    sed_des1: "I designed and developed the Teacher Evaluation System (SED) from scratch for UTMA.",
    sed_des2: "Stack: PHP (backend), MySQL (DB), HTML5/CSS3/JavaScript (frontend).",
    sed_des3: "I managed the entire lifecycle: analysis, modeling, development, testing, and deployment on Hostinger.",
    
    cafinca_des1: "I developed software extensions for embedded system in automated coffee machine with Python.",
    cafinca_des2: "I was part of the team responsible for preventive and corrective maintenance of the equipment.",
    cafinca_des3: "I participated in technical meetings with stakeholders.",
    
    campestre_des1: "I implemented vehicle recognition system with AI using Python and OpenCV.",
    campestre_des2: "I developed backend and MySQL database management for access records.",
    
    // Extracurricular Activities - Titles
    AE_title: "Extracurricular Activities",
    AE_sub1: "Full Stack Developer PIONEER",
    AEfetch_sub1: "NASA Space Apps Challenge – UNAQ | October 2025",
    AE_sub2: "Backend Developer (Payment Methods) TRAMINET",
    AEfetch_sub2: "HydroTalent 2025 | January – April 2025",
    AE_sub3: "Speaker",
    AEfetch_sub3: "FLISOL 20th Anniversary – Bogotá, Colombia | May 2024",
    AE_sub5: "Web Developer FIREGUARD",
    AEfetch_sub5: "Astro ICP Hackathon 2023 | September 2023 and Hydrotalent 2023",
    AEsub5_des3: "Creation of a basic web interface that notifies the detection of fire or smoke, providing a quick response to emergencies.",
    
    // Extracurricular Activities - Descriptions (FIRST PERSON)
    nasa_des1: "I developed web platform with interactive global map to visualize real-time air quality.",
    nasa_des2: "I integrated a REST API for environmental data consumption.",
    
    hydro25_des1: "I integrated MercadoPago as payment gateway in web platform.",
    hydro25_des2: "I set up sandbox environments, managing test credentials..",
    
    flisol_des1: "I was selected as a speaker at a free software event in Latin America.",
    flisol_des2: "I gave a conference on Motoko and Internet Computer Protocol (ICP) applied to AI.",
    
    fire_des1: "I developed early fire detection system with ESP32 and ICP blockchain.",
    fire_des2: "I implemented backend in Motoko, web frontend, and sensor connectivity.",
    
    // Achievements
    Log_title: "Achievements",
    Log1: "First Place – Astro ICP Hackathon",
    Log2: "First Place – HydroTalent 2023",
    
    // Certifications
    Cer_title: "Certifications",
    cer1: "Instructional Development in Online Education",
    
    // Recognitions
    rec_title: "Recognitions",
    rec1: "Recognition for Innovation – NASA ICP Hackathon",
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

/* ===============================
   ACCORDION LOGIC
   =============================== */
function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.removeEventListener('click', toggleAccordion);
    header.addEventListener('click', toggleAccordion);
  });
}

function toggleAccordion(e) {
  const currentHeader = e.currentTarget;
  const currentCard = currentHeader.closest('.accordion');
  
  if (currentCard.classList.contains('active')) {
    currentCard.classList.remove('active');
  } else {
    document.querySelectorAll('.accordion').forEach(card => {
      card.classList.remove('active');
    });
    currentCard.classList.add('active');
  }
}

/* ===============================
   CAROUSEL LOGIC (FUTURISTA)
   =============================== */
function initCarousels() {
  document.querySelectorAll(".carousel").forEach(carousel => {
    // Inyectar elementos decorativos si no existen
    if (!carousel.querySelector(".carousel-scanline")) {
      const scanline = document.createElement("div");
      scanline.className = "carousel-scanline";
      carousel.appendChild(scanline);

      const corners = ["tl", "tr", "bl", "br"];
      corners.forEach(pos => {
        const corner = document.createElement("div");
        corner.className = `carousel-corner corner-${pos}`;
        carousel.appendChild(corner);
      });
      
      // Añadir indicador de carga / progreso visual
      const loader = document.createElement("div");
      loader.className = "carousel-loader";
      carousel.appendChild(loader);

      // Inicializar progreso
      const slides = carousel.querySelectorAll(".slide");
      let activeIdx = 0;
      slides.forEach((s, i) => { if(s.classList.contains("active")) activeIdx = i; });
      loader.style.width = `${((activeIdx + 1) / slides.length) * 100}%`;
    }

    // Efecto de aparición suave
    setTimeout(() => {
      carousel.style.opacity = "1";
    }, 300);
  });
}

function moveSlide(carouselId, direction) {
  const carousel = document.getElementById(carouselId);
  const slides = carousel.querySelectorAll(".slide");
  let activeIndex = -1;

  slides.forEach((slide, index) => {
    if (slide.classList.contains("active")) {
      activeIndex = index;
    }
  });

  if (activeIndex === -1) activeIndex = 0;

  // Quitar active de la actual
  slides[activeIndex].classList.remove("active");

  // Calcular nueva
  let newIndex = activeIndex + direction;
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;

  // Forzar un reflow para que la transición se note si fuera necesario
  // (aunque con clases basta)
  slides[newIndex].classList.add("active");

  // Actualizar barra de progreso
  const loader = carousel.querySelector(".carousel-loader");
  if (loader) {
    const progress = ((newIndex + 1) / slides.length) * 100;
    loader.style.width = `${progress}%`;
  }

  // Pequeño efecto de "glitch" visual al cambiar (opcional)
  carousel.style.filter = "hue-rotate(90deg) brightness(1.5)";
  setTimeout(() => {
    carousel.style.filter = "none";
  }, 100);
}

/* ===============================
   INIT ON PAGE LOAD
   =============================== */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  setLanguage(savedLang);
  initAccordion();
  initCarousels();
});
