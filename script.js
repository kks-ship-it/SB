
    const menu = document.getElementById('menuOverlay');

    function toggleMenu() {
      menu.classList.toggle('show');
    }

    function closeMenu() {
      menu.classList.remove('show');
    }

    // إغلاق القائمة عند الضغط خارجها
    window.addEventListener('click', function(e) {
      if (menu.classList.contains('show') && !menu.contains(e.target) && !e.target.classList.contains('menu-toggle')) {
        closeMenu();
      }
    });
  