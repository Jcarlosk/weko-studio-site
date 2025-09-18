// --- SMOOTH SCROLLING PARA LINKS INTERNOS ---
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// --- BOTÃO DE VOLTAR AO TOPO ---
document.querySelector(".scroll-top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// --- LÓGICA DO MENU MOBILE ---
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Adiciona ou remove a classe 'menu-open' do body
menuToggle.addEventListener("click", () => {
  document.body.classList.toggle("menu-open");
});

// Fecha o menu ao clicar em qualquer um dos links
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
    });
});
// --- SELETOR DE IDIOMA ---
const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");
let currentLanguage = "pt";

const translations = {
  pt: {
    about: "SOBRE",
    portfolio: "PORTFÓLIO",
    contact: "CONTATO",
    heroTitle: "CONSTRUÍMOS MARCAS<br>FORTES E SÓLIDAS<br>ATRAVÉS DE DESIGN<br>E ESTRATÉGIA",
    ctaButton: "Solicitar Proposta",
    portfolioTitle: "Trabalhos",
    processTitle: "Processo",
    process1: "Diagnóstico",
    process2: "Planejamento",
    process3: "Conceito Visual",
    process4: "Símbolo",
    process5: "Identidade",
    process6: "Apresentação",
    process7: "Finalização",
    processDesc1:
      "Fase inicial do projeto onde alinhamos todas as expectativas para construção da Identidade Visual. Nesta etapa, todos os desafios e objetivos do projeto são bem estabelecidos para buscar o melhor resultado possível para a marca.",
    processDesc2:
      "Desenvolvimento da estratégia criativa e definição dos caminhos que serão seguidos durante todo o projeto. Criamos um roadmap detalhado com prazos e entregas específicas.",
    processDesc3:
      "Criação dos primeiros esboços e direcionamentos visuais da marca. Exploramos diferentes possibilidades estéticas que melhor representem os valores e personalidade da empresa.",
    processDesc4:
      "Desenvolvimento do elemento gráfico principal da marca. O símbolo é criado com foco na memorabilidade, versatilidade e aplicabilidade em diferentes contextos e suportes.",
    processDesc5:
      "Criação do sistema visual completo incluindo paleta de cores, tipografia, padrões gráficos e elementos de apoio que darão consistência à comunicação da marca.",
    processDesc6:
      "Apresentação final do projeto com todas as aplicações da marca em diferentes contextos. Demonstramos como a identidade funcionará na prática através de mockups realistas.",
    processDesc7:
      "Entrega de todos os arquivos finais da marca em diferentes formatos e resoluções, além do manual de identidade visual com diretrizes de uso e aplicação.",
    contactTitle: "Pronto para transformar<br>sua marca?",
    contactDescription:
      "Preencha o formulário e nos conte seus<br>objetivos. Vamos marcar uma conversa para<br>alinhar expectativas e dar início ao projeto.",
    contactEmail: "contato@wekostudio.com",
  },
  en: {
    about: "ABOUT",
    portfolio: "PORTFOLIO",
    contact: "CONTACT",
    heroTitle: "WE BUILD STRONG<br>AND SOLID BRANDS<br>THROUGH DESIGN<br>AND STRATEGY",
    ctaButton: "Request Proposal",
    portfolioTitle: "Works",
    processTitle: "Process",
    process1: "Diagnosis",
    process2: "Planning",
    process3: "Visual Concept",
    process4: "Symbol",
    process5: "Identity",
    process6: "Presentation",
    process7: "Finalization",
    processDesc1:
      "Initial phase of the project where we align all expectations for building the Visual Identity. At this stage, all challenges and objectives of the project are well established to seek the best possible result for the brand.",
    processDesc2:
      "Development of creative strategy and definition of paths that will be followed throughout the project. We create a detailed roadmap with specific deadlines and deliveries.",
    processDesc3:
      "Creation of the first sketches and visual directions of the brand. We explore different aesthetic possibilities that best represent the company's values and personality.",
    processDesc4:
      "Development of the main graphic element of the brand. The symbol is created with focus on memorability, versatility and applicability in different contexts and supports.",
    processDesc5:
      "Creation of the complete visual system including color palette, typography, graphic patterns and support elements that will give consistency to brand communication.",
    processDesc6:
      "Final presentation of the project with all brand applications in different contexts. We demonstrate how the identity will work in practice through realistic mockups.",
    processDesc7:
      "Delivery of all final brand files in different formats and resolutions, plus the visual identity manual with usage and application guidelines.",
    contactTitle: "Ready to transform<br>your brand?",
    contactDescription:
      "Fill out the form and tell us your<br>goals. Let's schedule a conversation to<br>align expectations and start the project.",
    contactEmail: "contact@wekostudio.com",
  },
  es: {
    about: "ACERCA",
    portfolio: "PORTAFOLIO",
    contact: "CONTACTO",
    heroTitle: "CONSTRUIMOS MARCAS<br>FUERTES Y SÓLIDAS<br>A TRAVÉS DE DISEÑO<br>Y ESTRATEGIA",
    ctaButton: "Solicitar Propuesta",
    portfolioTitle: "Trabajos",
    processTitle: "Proceso",
    process1: "Diagnóstico",
    process2: "Planificación",
    process3: "Concepto Visual",
    process4: "Símbolo",
    process5: "Identidad",
    process6: "Presentación",
    process7: "Finalización",
    processDesc1:
      "Fase inicial del proyecto donde alineamos todas las expectativas para la construcción de la Identidad Visual. En esta etapa, todos los desafíos y objetivos del proyecto están bien establecidos para buscar el mejor resultado posible para la marca.",
    processDesc2:
      "Desarrollo de la estrategia creativa y definición de los caminos que se seguirán durante todo el proyecto. Creamos una hoja de ruta detallada con plazos y entregas específicas.",
    processDesc3:
      "Creación de los primeros bocetos y direcciones visuales de la marca. Exploramos diferentes posibilidades estéticas que mejor representen los valores y personalidad de la empresa.",
    processDesc4:
      "Desarrollo del elemento gráfico principal de la marca. El símbolo se crea con enfoque en la memorabilidad, versatilidad y aplicabilidad en diferentes contextos y soportes.",
    processDesc5:
      "Creación del sistema visual completo incluyendo paleta de colores, tipografía, patrones gráficos y elementos de apoyo que darán consistencia a la comunicación de la marca.",
    processDesc6:
      "Presentación final del proyecto con todas las aplicaciones de la marca en diferentes contextos. Demostramos cómo funcionará la identidad en la práctica a través de mockups realistas.",
    processDesc7:
      "Entrega de todos los archivos finales de la marca en diferentes formatos y resoluciones, además del manual de identidad visual con directrices de uso y aplicación.",
    contactTitle: "¿Listo para transformar<br>tu marca?",
    contactDescription:
      "Completa el formulario y cuéntanos tus<br>objetivos. Programemos una conversación para<br>alinear expectativas e iniciar el proyecto.",
    contactEmail: "contacto@wekostudio.com",
  },
}

languageBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  languageBtn.classList.toggle("active");
  languageDropdown.classList.toggle("show");
});

document.addEventListener("click", () => {
  languageBtn.classList.remove("active");
  languageDropdown.classList.remove("show");
});

languageDropdown.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    const selectedLang = e.target.getAttribute("data-lang");

    if (selectedLang !== currentLanguage) {
      languageDropdown.querySelectorAll("a").forEach((link) => link.classList.remove("active"));
      e.target.classList.add("active");
      changeLanguage(selectedLang);
      currentLanguage = selectedLang;
    }
    languageBtn.classList.remove("active");
    languageDropdown.classList.remove("show");
  }
});

function changeLanguage(lang) {
  const t = translations[lang];
  document.querySelector('a[href="#sobre"]').textContent = t.about;
  document.querySelector('a[href="#portfolio"]').textContent = t.portfolio;
  document.querySelector('a[href="#contato"]').textContent = t.contact;
  document.querySelector(".hero-title").innerHTML = t.heroTitle;
  document.querySelectorAll(".cta-button").forEach((btn) => (btn.textContent = t.ctaButton));
  document.querySelector(".portfolio .section-title").textContent = t.portfolioTitle;
  document.querySelector(".process .section-title").textContent = t.processTitle;
  const processItems = document.querySelectorAll(".process-name");
  const processDescriptions = document.querySelectorAll(".process-description");
  processItems[0].textContent = t.process1;
  processItems[1].textContent = t.process2;
  processItems[2].textContent = t.process3;
  processItems[3].textContent = t.process4;
  processItems[4].textContent = t.process5;
  processItems[5].textContent = t.process6;
  processItems[6].textContent = t.process7;
  processDescriptions[0].textContent = t.processDesc1;
  processDescriptions[1].textContent = t.processDesc2;
  processDescriptions[2].textContent = t.processDesc3;
  processDescriptions[3].textContent = t.processDesc4;
  processDescriptions[4].textContent = t.processDesc5;
  processDescriptions[5].textContent = t.processDesc6;
  processDescriptions[6].textContent = t.processDesc7;
  document.querySelector(".contact-title").innerHTML = t.contactTitle;
  document.querySelector(".contact-description").innerHTML = t.contactDescription;
  document.querySelector(".contact-email").textContent = t.contactEmail;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
}

document.querySelector('a[data-lang="pt"]').classList.add("active");


// --- OUTRAS ANIMAÇÕES E EFEITOS ---
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".portfolio-item, .process-item").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});

document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.02)";
  });
  item.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".process-item").forEach((item) => {
  item.addEventListener("click", function () {
    document.querySelectorAll(".process-item").forEach((otherItem) => {
      if (otherItem !== this) {
        otherItem.classList.remove("expanded");
      }
    });
    this.classList.toggle("expanded");
  });
});

document.querySelectorAll(".cta-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Funcionalidade de contato será implementada aqui!");
  });
});