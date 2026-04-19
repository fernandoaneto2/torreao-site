// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
  });
});

// ===== MODAL HANDLING =====
const ctaModal = document.getElementById("ctaModal");
const modalClose = document.querySelector(".modal-close");

document.querySelectorAll(".btn-primary, .navbar-cta").forEach((button) => {
  button.addEventListener("click", (e) => {
    if (button.type !== "submit" && !button.closest("form")) {
      e.preventDefault();
      ctaModal.classList.add("active");
    }
  });
});

modalClose.addEventListener("click", () => {
  ctaModal.classList.remove("active");
});

ctaModal.addEventListener("click", (e) => {
  if (e.target === ctaModal) {
    ctaModal.classList.remove("active");
  }
});

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    portfolioCards.forEach((card) => {
      if (filter === "all" || card.getAttribute("data-category") === filter) {
        card.style.display = "block";
        setTimeout(() => {
          card.style.opacity = "1";
        }, 10);
      } else {
        card.style.opacity = "0";
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// ===== FORM HANDLING — envia via WhatsApp =====
const contactForm = document.getElementById("contactForm");
const modalForm = document.getElementById("modalForm");
const WA_NUMBER = "5511922763114";

function buildWhatsAppUrl(data) {
  const msg =
    `Olá! Gostaria de um orçamento.\n\n` +
    `Nome: ${data.nome || ""}\n` +
    `Telefone: ${data.telefone || ""}\n` +
    `E-mail: ${data.email || ""}\n` +
    `Serviço: ${data.servico || ""}\n\n` +
    `Projeto:\n${data.mensagem || ""}`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function showSuccessMessage() {
  const div = document.createElement("div");
  div.textContent = "Mensagem enviada! Abrindo WhatsApp...";
  div.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    background-color: #8B3A3A;
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 4px;
    box-shadow: 0 5px 15px rgba(139,58,58,0.3);
    z-index: 3000;
    font-size: 0.95rem;
    font-weight: 600;
  `;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3000);
}

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form));

  window.open(buildWhatsAppUrl(data), "_blank");

  showSuccessMessage();
  form.reset();

  if (form === modalForm) {
    setTimeout(() => {
      ctaModal.classList.remove("active");
    }, 1500);
  }
}

contactForm.addEventListener("submit", handleFormSubmit);
modalForm.addEventListener("submit", handleFormSubmit);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// ===== NAVBAR ON SCROLL =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.createElement("button");
scrollTopBtn.innerHTML = "↑";
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.setAttribute("aria-label", "Voltar ao topo");
scrollTopBtn.style.cssText = `
  position: fixed;
  bottom: 155px;
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
  box-shadow: 0 5px 15px rgba(139,58,58,0.3);
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
  window.scrollTo({ top: 0, behavior: "smooth" });
});

scrollTopBtn.addEventListener("mouseover", () => {
  scrollTopBtn.style.backgroundColor = "#6B2E2E";
  scrollTopBtn.style.transform = "scale(1.1)";
});

scrollTopBtn.addEventListener("mouseout", () => {
  scrollTopBtn.style.backgroundColor = "#8B3A3A";
  scrollTopBtn.style.transform = "scale(1)";
});

// ===== INTERSECTION OBSERVER =====
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

document
  .querySelectorAll(
    ".service-card, .portfolio-card, .process-step, .testimonial-card, .why-card"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// ===== COOKIE BANNER =====
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");

if (!localStorage.getItem("cookieAccepted")) {
  setTimeout(() => cookieBanner.classList.add("visible"), 1200);
}

cookieAccept.addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "1");
  cookieBanner.classList.remove("visible");
});

// ===== ANIMATIONS CSS =====
const style = document.createElement("style");
style.textContent = `
  @keyframes slideInRight {
    from { transform: translateX(400px); opacity: 0; }
    to   { transform: translateX(0);    opacity: 1; }
  }
  @keyframes slideOutRight {
    from { transform: translateX(0);    opacity: 1; }
    to   { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);

console.log("Torreão Engenharia — CNPJ 20.262.501/0001-53 | Desde 2014");
