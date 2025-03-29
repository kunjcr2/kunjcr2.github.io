document.addEventListener("DOMContentLoaded", function () {
  let currMode = "light";
  let secs = document.querySelectorAll("section");
  let btns = document.querySelectorAll("button");
  let header1 = document.querySelector("header");
  let header = document.querySelector("h1");
  let secHeader = document.querySelectorAll("h2");
  let listItems = document.querySelectorAll("nav ul li a");
  let skillsItems = document.querySelectorAll("#skills ul li");
  let certiItems = document.querySelectorAll("#certificates ul li");

  // Get references to the mode toggle button and body
  const modeButton = document.getElementById("mode");
  const body = document.body;

  // Add active class to current section in navigation
  const sections = document.querySelectorAll("section");
  const navItems = document.querySelectorAll("nav ul li a");

  // Add animation to sections when they come into view
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        // Highlight the corresponding nav item
        const id = entry.target.getAttribute("id");
        navItems.forEach((item) => {
          if (item.getAttribute("href") === `#${id}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Add typing effect to main heading
  function typeEffect(element, speed) {
    const text = element.textContent;
    element.innerHTML = "";

    let i = 0;
    const timer = setInterval(function () {
      if (i < text.length) {
        element.append(text.charAt(i));
        i++;
      } else {
        clearInterval(timer);
      }
    }, speed);
  }

  // Apply typing effect to the heading
  const heading = document.querySelector("header h1");
  if (heading) {
    typeEffect(heading, 100);
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Check if the user has a previously saved theme preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    applyDarkMode();
    currMode = "dark";
  }

  // Toggle dark mode when the button is clicked
  if (modeButton) {
    modeButton.addEventListener("click", toggleMode);
  }

  btns.forEach((btn) => {
    btn.addEventListener("click", toggleMode);
  });

  function toggleMode() {
    if (currMode === "light") {
      applyDarkMode();
      currMode = "dark";
    } else {
      applyLightMode();
      currMode = "light";
    }

    // Save the theme preference to localStorage
    localStorage.setItem("theme", currMode);
  }

  function applyDarkMode() {
    body.classList.add("dark-mode");

    secs.forEach((sec) => {
      sec.style.transition =
        "background-color 0.5s ease, color 0.5s ease, transform 0.5s ease";
      sec.style.background = "#2a2a2a";
      sec.style.color = "#f0f0f0";
      sec.style.borderTop = "5px solid #3498db";
    });

    header1.style.transition = "background 0.5s ease";
    header1.style.background = "linear-gradient(135deg, #2c3e50, #1a242f)";

    let icon = document.querySelectorAll("i");

    skillsItems.forEach((skills) => {
      skills.style.transition = "all 0.5s ease";
      skills.style.color = "#f0f0f0";
      skills.style.background = "#3a3a3a";
    });

    certiItems.forEach((cert) => {
      cert.style.transition = "all 0.5s ease";
      cert.style.color = "#f0f0f0";
      cert.style.background = "#3a3a3a";
    });

    for (i of icon) {
      i.style.transition = "color 0.5s ease";
      i.style.color = "#3498db";
    }

    header.style.transition = "color 0.5s ease";
    header.style.color = "#f0f0f0";

    for (heads of secHeader) {
      heads.style.transition = "color 0.5s ease";
      heads.style.color = "#3498db";
    }

    listItems.forEach((item) => {
      item.style.transition = "color 0.5s ease";
      item.style.color = "#f0f0f0";
    });
  }

  function applyLightMode() {
    body.classList.remove("dark-mode");

    secs.forEach((sec) => {
      sec.style.transition =
        "background-color 0.5s ease, color 0.5s ease, transform 0.5s ease";
      sec.style.background = "white";
      sec.style.color = "#333";
      sec.style.borderTop = "5px solid #3498db";
    });

    header1.style.transition = "background 0.5s ease";
    header1.style.background = "linear-gradient(135deg, #3498db, #2ecc71)";

    let icon = document.querySelectorAll("i");

    skillsItems.forEach((skills) => {
      skills.style.transition = "all 0.5s ease";
      skills.style.color = "#333";
      skills.style.background = "#f9f9f9";
    });

    certiItems.forEach((cert) => {
      cert.style.transition = "all 0.5s ease";
      cert.style.color = "#333";
      cert.style.background = "#f9f9f9";
    });

    for (i of icon) {
      i.style.transition = "color 0.5s ease";
      i.style.color = "#3498db";
    }

    header.style.transition = "color 0.5s ease";
    header.style.color = "white";

    for (heads of secHeader) {
      heads.style.transition = "color 0.5s ease";
      heads.style.color = "#3498db";
    }

    listItems.forEach((item) => {
      item.style.transition = "color 0.5s ease";
      item.style.color = "white";
    });
  }

  // Add animation to skills section
  const skills = document.querySelectorAll("#skills ul li");
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.1}s`;
  });
});
