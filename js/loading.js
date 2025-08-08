// 处理页面加载进度
document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        // 模拟加载进度
        setTimeout(() => {
            progressBar.classList.add('loaded');
            setTimeout(() => {
                progressBar.style.display = 'none';
            }, 300);
        }, 1500);
    }
});

// 确保图片和其他资源加载完成后也更新进度条
window.addEventListener('load', () => {
    const progressBar = document.querySelector('.loading-progress');
    if (progressBar) {
        progressBar.classList.add('loaded');
        setTimeout(() => {
            progressBar.style.display = 'none';
        }, 300);
    }
});
