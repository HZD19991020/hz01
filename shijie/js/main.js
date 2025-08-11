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
    
    // ...其余登录逻辑...
});
