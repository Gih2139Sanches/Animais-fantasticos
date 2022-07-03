import outsideClick from "./outsideclick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="Button"]');
  const menuList = document.querySelector('[data-menu="List"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");

      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
    eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
  }
}
