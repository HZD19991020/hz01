// 功能：把拆分的HTML文件拼到主页对应位置
async function loadModule(模块ID, 文件路径) {
  const 响应 = await fetch(文件路径);      // 去拿积木（HTML文件）
  const html代码 = await 响应.text();     // 读取积木内容
  document.getElementById(模块ID).innerHTML = html代码; // 把积木放到指定位置
  
  // 如果是画廊积木，额外加载它的专属JS
  if(文件路径.includes('gallery.html')) {
    const 脚本 = document.createElement('script');
    脚本.src = 'js/gallery.js';
    document.body.appendChild(脚本);
  }
}

// 页面加载后开始拼积木
window.addEventListener('DOMContentLoaded', () => {
  loadModule('header', 'modules/header.html');  // 拼导航栏
  loadModule('content', 'modules/content.html');// 拼书籍区
  loadModule('gallery', 'modules/gallery.html');// 拼画廊
});
