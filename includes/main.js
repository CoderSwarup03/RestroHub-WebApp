// ✅ Make function GLOBAL
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");
  const overlay = document.getElementById("overlay");

  if (!menuBtn || !mobileMenu) {
    console.log("Navbar elements not found");
    return;
  }

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden", "-translate-y-full", "opacity-0");
    overlay.classList.remove("hidden");
  });

  closeMenu.addEventListener("click", closeMenuFn);
  overlay.addEventListener("click", closeMenuFn);

  function closeMenuFn() {
    mobileMenu.classList.add("-translate-y-full", "opacity-0");
    overlay.classList.add("hidden");
    setTimeout(() => {
      mobileMenu.classList.add("hidden");
    }, 300);
  }
}
