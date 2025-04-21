const btnCategorias = document.getElementById("todas");
const menuCategorias = document.getElementById("menu-categorias");
const menuLateral = document.getElementById("menu-lateral");
const submenu = document.getElementById("submenu-categorias");
const departamentos = document.querySelectorAll(".departamento");
const navDepartamentos = document.querySelectorAll(".nav-departamento, .menu-departamento");
const menuDepartamentoDropdown = document.getElementById("menu-departamento-dropdown");
const containerConteudo = document.querySelector(".container-conteudo");

let onMenu = false;
let onBtn = false;
let onSubmenu = false;
let closeTimout;
let onLi = null;
let onNavDepartamento = false;
let onDepartamentoDropdown = false;
let onDepartamento = null;
let timeoutDepartamento;

btnCategorias.addEventListener("mouseenter", () => {
  onBtn = true;
  clearTimeout(closeTimout);
  menuDepartamentoDropdown.classList.remove("show");
  onNavDepartamento = false;
  onDepartamentoDropdown = false;
  menuCategorias.classList.add("show");
  menuLateral.classList.add("show");
});

btnCategorias.addEventListener("mouseleave", () => {
  onBtn = false;
  closeTimout = setTimeout(checkMouse, 200);
});

menuLateral.addEventListener("mouseenter", () => {
  onMenu = true;
  clearTimeout(closeTimout);
});

menuLateral.addEventListener("mouseleave", () => {
  onMenu = false;
  closeTimout = setTimeout(checkMouse, 200);
});

submenu.addEventListener("mouseenter", () => {
  onSubmenu = true;
  clearTimeout(closeTimout);
});

submenu.addEventListener("mouseleave", () => {
  onSubmenu = false;
  closeTimout = setTimeout(checkMouse, 200);
});

departamentos.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    if (onLi !== item) {
      submenu.classList.remove("show", "animar");

      void submenu.offsetWidth;

      submenu.classList.add("animar");

      setTimeout(() => {
        submenu.classList.remove("animar");
        submenu.classList.add("show");
      }, 1);

      onLi = item;
    }
  });
});

navDepartamentos.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    onNavDepartamento = true;
    clearTimeout(closeTimout);

    navDepartamentos.forEach((departamentos) =>
      departamentos.classList.remove("ativo")
    );

    item.classList.add("ativo");

    menuCategorias.classList.remove("show");
    menuLateral.classList.remove("show");
    submenu.classList.remove("show");

    onBtn = false;
    onMenu = false;
    onSubmenu = false;
    onLi = null;

    if (onDepartamento !== item) {
      containerConteudo.classList.remove("show", "animar");
      void containerConteudo.offsetWidth;
      containerConteudo.classList.add("animar");

      setTimeout(() => {
        containerConteudo.classList.remove("animar");
        containerConteudo.classList.add("show");
      }, 1);

      onDepartamento = item;
    }

    menuDepartamentoDropdown.classList.add("show");

    item.addEventListener("mouseleave", () => {
      onNavDepartamento = false;

      setTimeout(() => {
        if (!onDepartamentoDropdown) {
          item.classList.remove("ativo");
        }
      }, 200);
      
      closeTimout = setTimeout(checkMouse, 200);
    });
  });

 
});

menuDepartamentoDropdown.addEventListener("mouseenter", () => {
  onDepartamentoDropdown = true;
  clearTimeout(closeTimout);
});

menuDepartamentoDropdown.addEventListener("mouseleave", () => {
  onDepartamentoDropdown = false;
  onDepartamento = null;


  navDepartamentos.forEach((departamento) => {
    departamento.classList.remove("ativo");
  });

  closeTimout = setTimeout(checkMouse, 200);
});

function checkMouse() {
  const onMenuCategoroia = !onBtn && !onMenu && !onSubmenu;
  const onMenuDepartamento = !onNavDepartamento && !onDepartamentoDropdown;

  if (onMenuCategoroia) {
    onLi = null;
    submenu.classList.remove("show");
    setTimeout(() => {
      menuCategorias.classList.remove("show");
      menuLateral.classList.remove("show");
    }, 500);
  }

  if (onMenuDepartamento) {
    menuDepartamentoDropdown.classList.remove("show");
  }
}
