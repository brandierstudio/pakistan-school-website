/**
 * ============================================================================
 * PAKISTAN SCHOOL — MAIN APPLICATION SCRIPT
 * ============================================================================
 * Handles header scrolling, mobile drawer, active states, modals,
 * audience switcher, and Lucide icons initialization.
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initMobileDrawer();
  initAudienceSwitcher();
  initFaqAccordion();
  initVisitModal();
  initProspectusModal();
  initLucide();
});

// Initialize Lucide Icons
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navbar scroll appearance
function initNavbar() {
  const header = document.querySelector("#site-header");
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Mobile Navigation Drawer
function initMobileDrawer() {
  const openBtn = document.querySelector("#mobile-menu-btn");
  const closeBtn = document.querySelector("#mobile-close-btn");
  const drawer = document.querySelector("#mobile-drawer");
  const backdrop = document.querySelector("#mobile-backdrop");

  if (!openBtn || !drawer) return;

  const toggle = (show) => {
    if (show) {
      drawer.classList.remove("translate-x-full");
      if (backdrop) backdrop.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      drawer.classList.add("translate-x-full");
      if (backdrop) backdrop.classList.add("hidden");
      document.body.style.overflow = "";
    }
  };

  openBtn.addEventListener("click", () => toggle(true));
  if (closeBtn) closeBtn.addEventListener("click", () => toggle(false));
  if (backdrop) backdrop.addEventListener("click", () => toggle(false));
}

// Audience Quick Switcher ("I am a...")
function initAudienceSwitcher() {
  const buttons = document.querySelectorAll(".audience-tab-btn");
  const panels = document.querySelectorAll(".audience-panel");

  if (!buttons.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-audience");

      buttons.forEach((b) => {
        b.classList.remove("bg-navy-900", "text-white", "shadow-sm");
        b.classList.add("text-slate-600", "hover:text-navy-900");
      });
      btn.classList.add("bg-navy-900", "text-white", "shadow-sm");
      btn.classList.remove("text-slate-600", "hover:text-navy-900");

      panels.forEach((p) => {
        if (p.getAttribute("id") === `panel-${target}`) {
          p.classList.remove("hidden");
        } else {
          p.classList.add("hidden");
        }
      });
    });
  });
}

// FAQ Accordion
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach((item) => {
    const trigger = item.querySelector(".faq-trigger");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    if (!trigger || !content) return;

    trigger.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      // Close all other FAQs
      faqItems.forEach((other) => {
        const otherContent = other.querySelector(".faq-content");
        const otherIcon = other.querySelector(".faq-icon");
        if (otherContent) otherContent.classList.add("hidden");
        if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
      });

      if (!isOpen) {
        content.classList.remove("hidden");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

// Visit / Tour Booking Modal
function initVisitModal() {
  const modal = document.querySelector("#tour-modal");
  const triggers = document.querySelectorAll(".open-tour-modal");
  const closeBtns = document.querySelectorAll(".close-tour-modal");
  const form = document.querySelector("#tour-form");

  if (!modal) return;

  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
        </svg> Booking Tour...
      `;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        modal.classList.add("hidden");
        document.body.style.overflow = "";
        form.reset();
        showToast("Campus Tour Scheduled!", "Thank you! Our admissions coordinator will contact you via WhatsApp shortly to confirm your time slot.");
      }, 1000);
    });
  }
}

// Prospectus Modal
function initProspectusModal() {
  const modal = document.querySelector("#prospectus-modal");
  const triggers = document.querySelectorAll(".open-prospectus-modal");
  const closeBtns = document.querySelectorAll(".close-prospectus-modal");
  const form = document.querySelector("#prospectus-form");

  if (!modal) return;

  triggers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    });
  });

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("hidden");
      document.body.style.overflow = "";
    });
  });

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]').value;
      modal.classList.add("hidden");
      document.body.style.overflow = "";
      form.reset();
      showToast("Prospectus Sent!", `A digital copy of the 2026–2027 Information Guide has been dispatched to ${email}.`);
    });
  }
}

// Global Toast Notification Helper
function showToast(title, message) {
  let toastContainer = document.querySelector("#toast-container");
  if (!toastContainer) {
    toastContainer = document.createElement("div");
    toastContainer.id = "toast-container";
    toastContainer.className = "fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none";
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement("div");
  toast.className = "pointer-events-auto bg-slate-900 text-white rounded-xl shadow-2xl p-4 border border-slate-700 flex items-start gap-3 transition-all transform translate-y-4 opacity-0";
  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <div class="flex-1">
      <h4 class="font-bold text-sm text-white">${title}</h4>
      <p class="text-xs text-slate-300 mt-1 leading-relaxed">${message}</p>
    </div>
    <button class="text-slate-400 hover:text-white" onclick="this.parentElement.remove()">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
  `;

  toastContainer.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove("translate-y-4", "opacity-0");
  }, 20);

  // Auto remove after 5s
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 5000);
}
