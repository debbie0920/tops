/*document.addEventListener('DOMContentLoaded', function () {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('menu-container').innerHTML = data;
      initMenu();
    })
    .catch(error => console.error('Error loading menu:', error));
});

function initMenu() {
  const menuBtn = document.querySelector('.menu_btn');
  const menu = document.querySelector('.menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  }
} */

  document.addEventListener('DOMContentLoaded', function () {
    fetch('menu.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('menu-container').innerHTML = data;
        initMenu();
      })
      .catch(error => console.error('Error loading menu:', error));
  });
  
  function initMenu() {
    const menuBtn = document.querySelector('.menu_btn');
    const menu = document.querySelector('.menu');
  
    // 漢堡選單的顯示/隱藏
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
      });
    }
  
    // 子選單的展開/收合
    const menuLinks = document.querySelectorAll('.menu-item > .menu-link');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('submenu')) {
          e.preventDefault(); // 阻止默認的超連結行為
          submenu.classList.toggle('show'); // 切換子選單的顯示狀態
        }
      });
    });
  }  
