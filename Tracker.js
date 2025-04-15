function getElementType(el) {
    if (el.tagName === "IMG") return "image";
    if (el.tagName === "A") return "link";
    if (el.tagName === "I") return "icon";
    if (el.tagName === "LI") return "list-item";
    if (el.tagName === "P" || el.tagName === "SPAN") return "text";
    if (el.tagName === "SECTION") return "section";
    return el.tagName.toLowerCase();
  }
  
  function logEvent(eventType, el) {
    const timestamp = new Date().toISOString();
    const elementType = getElementType(el);
    const identifier = el.id || el.className || el.tagName.toLowerCase();
    console.log(`${timestamp}, ${eventType}, ${elementType}, ${identifier}`);
  }
  
  document.addEventListener("click", e => {
    if (e.target) {
      logEvent("click", e.target);
    }
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        logEvent("view", entry.target);
      }
    });
  }, {
    threshold: 0.5,
  });
  
  document.querySelectorAll("section, img, a, i, .logo, .nav, .about-me, .left, .right, .socials, .email").forEach(el => {
    observer.observe(el);
  });
  