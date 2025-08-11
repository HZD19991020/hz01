// 动态加载组件
document.addEventListener('DOMContentLoaded', function() {
    // 加载导航栏
    fetch('/hz01/shijiewenxue/components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-container').innerHTML = html;
            initNavbar();
        });

    // 加载登录弹窗
    fetch('/hz01/shijiewenxue/components/login-modal.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('login-modal-container').innerHTML = html;
            initLoginModal();
        });

    // 初始化画廊
    initGallery();
});

// 导航栏交互
function initNavbar() {
    // 导航栏悬停效果等逻辑
}

// 登录弹窗控制
function initLoginModal() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    const closeBtn = document.querySelector('.close-btn');

    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}

// 画廊逻辑
function initGallery() {
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    // ...画廊交互逻辑...
}
