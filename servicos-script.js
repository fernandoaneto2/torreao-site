// ===== SCROLL TO SERVICE FUNCTION =====
function scrollToService(serviceId) {
  const element = document.getElementById(serviceId);
  if (element) {
    const offsetTop = element.offsetTop - 80; // Offset para header fixo
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}

// ===== SERVICE CARD ANIMATIONS =====
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

// Observar cards de serviço
document
  .querySelectorAll(".service-detail-card, .service-quick-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ===== CTA BUTTONS =====
document
  .querySelectorAll(".detail-cta .btn-primary, .navbar-cta")
  .forEach((button) => {
    button.addEventListener("click", (e) => {
      if (button.type !== "submit" && !button.closest("form")) {
        e.preventDefault();
        const modal = document.getElementById("ctaModal");
        if (modal) {
          modal.classList.add("active");
        }
      }
    });
  });

// ===== FORM HANDLING =====
const modalForm = document.getElementById("modalForm");
if (modalForm) {
  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(modalForm);
    console.log("Formulário enviado:", Object.fromEntries(formData));

    // Mostrar mensagem de sucesso
    showSuccessMessage();

    // Limpar formulário
    modalForm.reset();

    // Fechar modal
    setTimeout(() => {
      const modal = document.getElementById("ctaModal");
      if (modal) {
        modal.classList.remove("active");
      }
    }, 1500);
  });
}

// ===== SUCCESS MESSAGE =====
function showSuccessMessage() {
  const successDiv = document.createElement("div");
  successDiv.className = "success-message";
  successDiv.textContent = "Obrigado! Entraremos em contato em breve.";
  successDiv.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background-color: #8B3A3A;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        box-shadow: 0 5px 15px rgba(139, 58, 58, 0.3);
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;

  document.body.appendChild(successDiv);

  setTimeout(() => {
    successDiv.style.animation = "slideOutRight 0.3s ease";
    setTimeout(() => {
      successDiv.remove();
    }, 300);
  }, 3000);
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== MOBILE MENU =====
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.querySelector(".navbar-menu");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navbarMenu.classList.remove("active");
    });
  });
}

// ===== MODAL HANDLING =====
const ctaModal = document.getElementById("ctaModal");
const modalClose = document.querySelector(".modal-close");

if (modalClose) {
  modalClose.addEventListener("click", () => {
    ctaModal.classList.remove("active");
  });
}

if (ctaModal) {
  ctaModal.addEventListener("click", (e) => {
    if (e.target === ctaModal) {
      ctaModal.classList.remove("active");
    }
  });
}

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: #8B3A3A;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1.5rem;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(139, 58, 58, 0.3);
`;

document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "flex";
    scrollTopBtn.style.alignItems = "center";
    scrollTopBtn.style.justifyContent = "center";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

scrollTopBtn.addEventListener("mouseover", () => {
  scrollTopBtn.style.backgroundColor = "#6B2E2E";
  scrollTopBtn.style.transform = "scale(1.1)";
});

scrollTopBtn.addEventListener("mouseout", () => {
  scrollTopBtn.style.backgroundColor = "#8B3A3A";
  scrollTopBtn.style.transform = "scale(1)";
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.4)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.3)";
  }
});

console.log("Página de Serviços Carregada com Sucesso!");
