document.addEventListener("DOMContentLoaded", function () {
  // Theme handling with enhanced transitions
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.classList.add("dark");
      // Add neon effects to cards in dark mode
      document
        .querySelectorAll(".project-card, .contact-item")
        .forEach((card) => {
          card.classList.add("shadow-neon");
        });
    } else {
      document.documentElement.classList.remove("dark");
      // Remove neon effects in light mode
      document
        .querySelectorAll(".project-card, .contact-item")
        .forEach((card) => {
          card.classList.remove("shadow-neon");
        });
    }
    localStorage.theme = isDark ? "dark" : "light";
    updateThemeIcon();
  }

  // Initialize theme
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && prefersDark.matches)
  ) {
    setTheme(true);
  } else {
    setTheme(false);
  }

  // Add theme toggle button
  const themeToggle = document.createElement("button");
  themeToggle.className =
    "fixed top-4 right-4 z-50 bg-white/10 backdrop-blur-md p-3 rounded-full hover:bg-white/20 transition-all duration-300";
  themeToggle.innerHTML = '<i class="fa-solid fa-moon text-white text-xl"></i>';
  document.querySelector("header").appendChild(themeToggle);

  // Theme toggle functionality
  themeToggle.addEventListener("click", () => {
    const isDark = !document.documentElement.classList.contains("dark");
    setTheme(isDark);
  });

  function updateThemeIcon() {
    const icon = themeToggle.querySelector("i");
    if (document.documentElement.classList.contains("dark")) {
      icon.className = "fa-solid fa-sun text-white text-xl";
    } else {
      icon.className = "fa-solid fa-moon text-white text-xl";
    }
  }

  // Handle system theme changes
  prefersDark.addEventListener("change", (e) => setTheme(e.matches));

  // Enhanced smooth scrolling with offset
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const headerOffset = window.innerWidth < 768 ? 60 : 80; // Different offset for mobile
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add stagger delay based on index
        setTimeout(() => {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");

          // Add neon effect in dark mode
          if (document.documentElement.classList.contains("dark")) {
            entry.target.classList.add("shadow-neon");
          }
        }, index * 200);
      }
    });
  }, observerOptions);

  // Initialize sections with animations
  document.querySelectorAll("section").forEach((section, index) => {
    section.style.transitionDuration = "0.8s";
    section.style.transitionTimingFunction = "cubic-bezier(0.4, 0, 0.2, 1)";
    section.classList.add("opacity-0", "translate-y-8");
    observer.observe(section);
  });

  // Floating animation for icons
  document.querySelectorAll(".animate-float").forEach((element) => {
    element.style.animation = "float 3s ease-in-out infinite";
  });

  // Enhanced scroll behavior
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const direction = currentScroll > lastScroll ? "down" : "up";

    // Add scroll direction specific animations
    document.querySelectorAll("section").forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        if (direction === "down") {
          section.style.transform = "scale(1)";
        } else {
          section.style.transform = "scale(1.02)";
        }
      }
    });

    lastScroll = currentScroll;
  });

  // Typing effect for the header
  const headerText = document.querySelector("header h1");
  if (headerText) {
    const text = headerText.textContent;
    headerText.innerHTML = "";
    let index = 0;

    function type() {
      if (index < text.length) {
        headerText.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }

  // Active navigation highlight
  function updateActiveNavItem() {
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll("nav a");

    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 150) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach((item) => {
      item.classList.remove("bg-white/20");
      if (item.getAttribute("href").slice(1) === currentSection) {
        item.classList.add("bg-white/20");
      }
    });
  }

  window.addEventListener("scroll", updateActiveNavItem);
  updateActiveNavItem();

  // Add scroll progress functionality
  const scrollProgress = document.querySelector("#scroll-progress");
  const backToTop = document.querySelector("#back-to-top");

  window.addEventListener("scroll", () => {
    // Update scroll progress
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = `${scrolled}%`;

    // Show/hide back to top button
    if (winScroll > 300) {
      backToTop.classList.remove("translate-y-20", "opacity-0");
      backToTop.classList.add("translate-y-0", "opacity-100");
    } else {
      backToTop.classList.add("translate-y-20", "opacity-0");
      backToTop.classList.remove("translate-y-0", "opacity-100");
    }
  });

  // Back to top functionality
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Mobile Menu Functionality
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const closeMenuButton = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("translate-x-full");
  }

  mobileMenuButton.addEventListener("click", toggleMobileMenu);
  closeMenuButton.addEventListener("click", toggleMobileMenu);

  // Close menu when clicking a link
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", toggleMobileMenu);
  });

  document.documentElement.style.scrollBehavior = "smooth";
});
