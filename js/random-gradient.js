function generateRandomColor() {
    // 生成随机颜色，确保颜色明亮且有一定透明度
    const hue = Math.floor(Math.random() * 360); // 随机色相
    const saturation = Math.floor(Math.random() * 30 + 70); // 70-100的饱和度
    const lightness = Math.floor(Math.random() * 30 + 40); // 40-70的亮度
    return `hsla(${hue}, ${saturation}%, ${lightness}%, 0.3)`;
}

function setRandomGradient() {
    const root = document.documentElement;
    const color1 = generateRandomColor();
    const color2 = generateRandomColor();
    const color3 = generateRandomColor();
    
    root.style.setProperty('--gradient-color-1', color1);
    root.style.setProperty('--gradient-color-2', color2);
    root.style.setProperty('--gradient-color-3', color3);
}

// 页面加载时设置随机渐变色
document.addEventListener('DOMContentLoaded', setRandomGradient);
