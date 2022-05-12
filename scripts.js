// MOBILE DESING

const toogle = document.getElementById("toogle-menu"),
  logo = document.getElementById("logo"),
  menu = document.getElementById("menu-lateral"),
  menu_x = document.getElementById("toogle-menu__x"),
  opciones_menu = document.querySelectorAll(".menu__opciones-div"),
  menu_burguer = document.getElementById("toogle-menu__burguer"),
  features = document.getElementById("menu-lateral__opciones-features"),
  features_opciones = document.querySelectorAll(".opciones__features"),
  flecha_arriba_features = document.getElementById("flecha-arriba__features"),
  flecha_abajo_features = document.getElementById("flecha-abajo__features"),
  flecha_arriba_company = document.getElementById("flecha-arriba__company"),
  flecha_abajo_company = document.getElementById("flecha-abajo__company"),
  company = document.getElementById("menu-lateral__opciones__company"),
  company_opciones = document.querySelectorAll(".opciones__company"),
  menu_features_desktop = document.getElementById("menu__opciones-div-features"),
  menu_company_desktop = document.getElementById("menu__opciones-div-company");

// FUNCIONES

function toggle(elem, clase) {
  elem.classList.toggle(clase);
}

function añadirNegro(elem1, elem2) {
  elem1.classList.contains("desactive")
    ? elem2.classList.add("black")
    : elem2.classList.remove("black");
}

function modificarToggleMenu() {
  menu.classList.contains("menu-lateral--active")
    ? (menu_burguer.classList.toggle("desactive"),
      menu_x.classList.remove("desactive"))
    : (menu_burguer.classList.remove("desactive"),
      menu_x.classList.add("desactive"));

  cerrarOpcionesMenu();
}

function cerrarOpcionesMenu() {
  if (menu.classList.contains("menu-lateral--active") === false) {
    opciones_menu.forEach((el) => el.classList.add("desactive"));
    flecha_abajo_features.classList.remove("desactive");
    flecha_abajo_company.classList.remove("desactive");
    flecha_arriba_features.classList.add("desactive");
    flecha_arriba_company.classList.add("desactive");

    añadirNegro(flecha_abajo_company, company);
    añadirNegro(flecha_abajo_features, features);
  }
}

// EVENTOS
toogle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle(menu, "menu-lateral--active");

  modificarToggleMenu();
});


window.onclick = function (e) {
  menu.classList.remove("menu-lateral--active");
  modificarToggleMenu();
};

features.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle(menu_features_desktop, "desactive");
  toggle(flecha_abajo_features, "desactive");
  toggle(flecha_arriba_features, "desactive");

  añadirNegro(flecha_abajo_features, features);
});

company.addEventListener("click", (e) => {
  e.stopPropagation();
  toggle(menu_company_desktop, "desactive");
  toggle(flecha_abajo_company, "desactive");
  toggle(flecha_arriba_company, "desactive");

  añadirNegro(flecha_abajo_company, company);
});

// WEB DESIGN
