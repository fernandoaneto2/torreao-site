// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("navbarMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("open");
});

// Fecha o menu ao clicar em um link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
  });
});

// ===== MODAL HANDLING =====
// const ctaModal = document.getElementById("ctaModal");
// const ctaButtons = document.querySelectorAll(".btn-primary, .navbar-cta");
// const modalClose = document.querySelector(".modal-close");

// // Abrir modal ao clicar em botões CTA
// document.querySelectorAll(".btn-primary, .navbar-cta").forEach((button) => {
//   button.addEventListener("click", (e) => {
//     // Não abrir modal se for um botão dentro de um formulário
//     if (button.type !== "submit" && !button.closest("form")) {
//       e.preventDefault();
//       ctaModal.classList.add("active");
//     }
//   });
// });

// // Fechar modal
// modalClose.addEventListener("click", () => {
//   ctaModal.classList.remove("active");
// });

// // Fechar modal ao clicar fora
// ctaModal.addEventListener("click", (e) => {
//   if (e.target === ctaModal) {
//     ctaModal.classList.remove("active");
//   }
// });

// ===== PORTFOLIO FILTER =====
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remover classe active de todos os botões
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Adicionar classe active ao botão clicado
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    // Filtrar cards
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

// ===== FORM HANDLING =====
const contactForm = document.getElementById("contactForm");
const modalForm = document.getElementById("modalForm");

// Função para validar e enviar formulário
function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  // 1. Defina o seu e-mail
  const meuEmail = "torreaoengenharia@gmail.com";

  // 2. Monte o assunto e o corpo da mensagem com os dados do form
  const assunto = encodeURIComponent(
    `Novo Contato: ${data.servico || "Projeto Engenharia"}`
  );

  const corpo = encodeURIComponent(
    `Nome: ${data.nome}\n` +
      `Telefone: ${data.telefone}\n` +
      `E-mail: ${data.email}\n` +
      `Serviço: ${data.servico}\n\n` +
      `Descrição do Projeto:\n${data.mensagem}`
  );

  // 3. Redireciona para o navegador de e-mail (mailto)
  window.location.href = `mailto:${meuEmail}?subject=${assunto}&body=${corpo}`;

  // --- SEU CÓDIGO DE SUCESSO ABAIXO ---
  showSuccessMessage(form);
  form.reset();

  if (form === modalForm || form.id === "modalForm") {
    setTimeout(() => {
      ctaModal.classList.remove("active");
    }, 1500);
  }
}

contactForm.addEventListener("submit", handleFormSubmit);
modalForm.addEventListener("submit", handleFormSubmit);

// Função para mostrar mensagem de sucesso
// function showSuccessMessage(form) {
//   const successDiv = document.createElement("div");
//   successDiv.className = "success-message";
//   successDiv.textContent = "Obrigado! Entraremos em contato em breve.";
//   successDiv.style.cssText = `
//         position: fixed;
//         top: 80px;
//         right: 20px;
//         background-color: #8B3A3A;
//         color: white;
//         padding: 1rem 1.5rem;
//         border-radius: 4px;
//         box-shadow: 0 5px 15px rgba(139, 58, 58, 0.3);
//         z-index: 3000;
//         animation: slideInRight 0.3s ease;
//     `;

//   document.body.appendChild(successDiv);

//   setTimeout(() => {
//     successDiv.style.animation = "slideOutRight 0.3s ease";
//     setTimeout(() => {
//       successDiv.remove();
//     }, 300);
//   }, 3000);
// }

// Adicionar animação CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      const offsetTop = target.offsetTop - 80; // Offset para header fixo

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// ===== NAVBAR BACKGROUND ON SCROLL =====
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

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

// ===== INTERSECTION OBSERVER PARA ANIMAÇÕES =====
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

// Observar elementos para animação
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

// ===== WHATSAPP BUTTON =====
const whatsappBtn = document.querySelector(".btn-whatsapp");
if (whatsappBtn) {
  whatsappBtn.addEventListener("click", () => {
    const phoneNumber = "5511999999999";
    const message = "Olá! Gostaria de solicitar um orçamento para meu projeto.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  });
}

// ===== PHONE LINK =====
const phoneLink = document.querySelector(".phone-link");
if (phoneLink) {
  phoneLink.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      // Em mobile, deixar o link padrão funcionar
    } else {
      // Em desktop, abrir modal
      e.preventDefault();
      ctaModal.classList.add("active");
    }
  });
}

// ===== INICIALIZAR =====
console.log("Torreão Engenharia - Site Clone Carregado com Sucesso!");
