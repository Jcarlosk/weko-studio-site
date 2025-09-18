document.addEventListener("DOMContentLoaded", () => {
  // --- LÓGICA DO MENU MOBILE ---
  const menuToggle = document.querySelector(".menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  }

  // Fecha o menu ao clicar em qualquer um dos links de navegação
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
      link.addEventListener('click', () => {
          document.body.classList.remove('menu-open');
      });
  });

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
  const scrollTopButton = document.querySelector(".scroll-top");
  if (scrollTopButton) {
    scrollTopButton.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // --- SELETOR DE IDIOMA OTIMIZADO ---
  const languageBtn = document.getElementById("languageBtn");
  const languageDropdown = document.getElementById("languageDropdown");
  let currentLanguage = "pt";

  if (languageBtn && languageDropdown) {
    languageBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      languageDropdown.classList.toggle("show");
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
        languageDropdown.classList.remove("show");
      }
    });
    
    // Inicia a página com o idioma padrão (Português)
    const ptLink = document.querySelector('a[data-lang="pt"]');
    if(ptLink) ptLink.classList.add("active");
  }

  // Fecha o dropdown de idioma se clicar fora
  document.addEventListener("click", () => {
    if (languageDropdown && languageDropdown.classList.contains("show")) {
      languageDropdown.classList.remove("show");
    }
  });

  // Nova função que carrega o idioma sob demanda
  async function changeLanguage(lang) {
    try {
      const response = await fetch(`assets/lang/${lang}.json`);
      if (!response.ok) return; // Se o arquivo não for encontrado, não faz nada
      const t = await response.json();

      // Atualiza os textos na página
      document.querySelector('a[href="#sobre"]').textContent = t.about;
      document.querySelector('a[href="#portfolio"]').textContent = t.portfolio;
      document.querySelector('a[href="#contato"]').textContent = t.contact;
      document.querySelector(".hero-title").innerHTML = t.heroTitle;
      document.querySelectorAll(".cta-button").forEach((btn) => (btn.textContent = t.ctaButton));
      document.querySelector(".portfolio .section-title").textContent = t.portfolioTitle;
      document.querySelector(".process .section-title").textContent = t.processTitle;
      document.querySelector(".contact-title").innerHTML = t.contactTitle;
      document.querySelector(".contact-description").innerHTML = t.contactDescription;
      
      document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
    } catch (error) {
      console.error("Erro ao carregar tradução:", error);
    }
  }

  // --- ANIMAÇÕES AO ROLAR A PÁGINA ---
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

  // --- FUNCIONALIDADE DE EXPANDIR O PROCESSO ---
  document.querySelectorAll(".process-item").forEach((item) => {
    item.addEventListener("click", function () {
      const isExpanded = this.classList.contains("expanded");
      document.querySelectorAll(".process-item").forEach((otherItem) => {
        otherItem.classList.remove("expanded");
      });
      if (!isExpanded) {
        this.classList.add("expanded");
      }
    });
  });
});