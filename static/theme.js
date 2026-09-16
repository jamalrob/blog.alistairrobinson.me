(function () {
  var toggleBtns = document.querySelectorAll('.theme-toggle-btn');
  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  });

  var menuBtn = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var header = document.querySelector('.header');
  if (!menuBtn || !menu) return;

  function positionMenu() {
    if (header) menu.style.top = (header.getBoundingClientRect().bottom - 1) + 'px';
  }

  function closeMenu() {
    menu.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    positionMenu();
    menu.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (menu.hidden) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  document.addEventListener('click', function (e) {
    if (!menu.hidden && !menu.contains(e.target) && e.target !== menuBtn) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 600) {
      closeMenu();
    } else if (!menu.hidden) {
      positionMenu();
    }
  });
})();
