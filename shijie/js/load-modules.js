// 动态加载HTML模块
async function loadModule(moduleId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        document.getElementById(moduleId).innerHTML = html;
        
        // 特殊处理画廊模块
        if (filePath.includes('gallery.html')) {
            const script = document.createElement('script');
            script.src = 'js/gallery.js';
            document.body.appendChild(script);
        }
    } catch (error) {
        console.error(`加载模块失败: ${moduleId}`, error);
        document.getElementById(moduleId).innerHTML = `
            <div class="error">模块加载失败，请刷新页面或检查网络</div>
        `;
    }
}

// 页面加载完成后执行
window.addEventListener('DOMContentLoaded', () => {
    loadModule('header', 'modules/header.html');
    loadModule('content', 'modules/content.html');
    loadModule('gallery', 'modules/gallery.html');
});
