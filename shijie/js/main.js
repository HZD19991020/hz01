// 登录相关逻辑（从原代码中提取）
document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const modal = document.getElementById('loginModal');
    
    // 动态生成的元素需要用事件委托
    document.body.addEventListener('click', function(e) {
        if (e.target === loginBtn || e.target.closest('#loginBtn')) {
            modal.style.display = 'block';
        }
        if (e.target.classList.contains('close-btn')) {
            modal.style.display = 'none';
        }
    });

    // 如果是 Vue Router
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/shijie/*', beforeEnter: (to, from, next) => { window.location.href = to.path; } }, // 放行子目录
    // 其他路由...
  ]
});


    // 显示登录弹窗（示例：点击某个按钮时触发）
document.getElementById('login-button').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'block';
});

// 关闭登录弹窗
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('loginModal').style.display = 'none';
});
    
    // ...其余登录逻辑...
});
