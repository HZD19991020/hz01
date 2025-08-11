// 确保DOM完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 1. 获取元素
    const mainImage = document.querySelector('.main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    // 2. 缩略图点击功能
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            mainImage.src = thumb.src.replace('/thumb/', '/full/'); // 替换为实际路径规则
        });
    });

    // 3. 其他画廊功能...
    console.log('画廊初始化完成'); // 调试用
});

// 备用初始化（如果动态加载）
if(document.querySelector('.gallery-container')) {
    initGallery();
}
