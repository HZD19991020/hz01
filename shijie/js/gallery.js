// 功能：只负责画廊的图片切换、缩略图等特效
function initGallery() {
  // 1. 获取画廊相关元素
  const 主图片 = document.querySelector('.main-image');
  const 缩略图组 = document.querySelectorAll('.thumbnail');
  
  // 2. 点击缩略图切换主图
  缩略图组.forEach(缩略图 => {
    缩略图.addEventListener('click', () => {
      主图片.src = 缩略图.dataset.大图路径;
    });
  });
  
  // 3. 其他画廊特效...
}

// 确保DOM加载后执行
if(document.querySelector('.gallery-container')) {
  initGallery(); // 只有页面有画廊时才激活
}
