document.addEventListener('DOMContentLoaded', function() {
    // 从原代码中提取画廊部分的JavaScript逻辑
    const mainImage = document.querySelector('.main-image');
    const imageTitle = document.querySelector('.image-title');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const prevArrow = document.querySelector('.arrow.prev');
    const nextArrow = document.querySelector('.arrow.next');
    const zoomBtn = document.querySelector('.zoom-btn');
    const loader = document.querySelector('.loader');
   
    
    // 注意：需要确保DOM已加载（因为这是动态插入的）
    function initGallery() {
        // 画廊初始化逻辑
    }
    
    // 如果直接运行说明是单独测试，立即初始化
    if (document.querySelector('.gallery-container')) {
        initGallery();
    }
});
