const menu = document.querySelector(".o_navbar_apps_menu");
if (menu) {
  const toggle = menu.querySelector(".o_menu_toggle");
  const nota = document.getElementById("apps-nota");
  toggle.addEventListener("click", () => {
    const abierto = menu.classList.toggle("show");
    toggle.setAttribute("aria-expanded", String(abierto));
  });
  document.addEventListener("click", (event) => {
    if (!menu.contains(event.target)) {
      menu.classList.remove("show");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
  menu.querySelectorAll("[data-odoo]").forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
      event.preventDefault();
      nota.hidden = false;
      nota.textContent = enlace.dataset.odoo + " está en Odoo. Desde este ejemplo se abre Marketing en redes.";
    });
  });
}
