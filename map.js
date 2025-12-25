// map.js - ملف جافاسكريبت للخريطة

document.addEventListener('DOMContentLoaded', function() {
    // تهيئة وظائف الخريطة
    initMapFunctions();
    
    // إعداد مراقبة ظهور قسم الخريطة
    setupMapObserver();
    
    // ربط أحداث أزرار التحكم
    bindMapControlEvents();
});

// تهيئة وظائف الخريطة
function initMapFunctions() {
    console.log('تهيئة وظائف الخريطة...');
    
    // تعيين إحداثيات المكتب
    window.officeLocation = {
        lat: 16.8891341,
        lng: 42.5767392,
        address: "GGDB7677، 2618، حي المطار، جازان 82722، السعودية"
    };
    
    // تعيين مستوى التكبير الافتراضي
    window.currentZoom = 16;
}

// إعداد مراقبة ظهور قسم الخريطة
function setupMapObserver() {
    const mapSection = document.querySelector('.map-section');
    
    if (mapSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // إضافة تأثير للدبوس عند ظهور الخريطة
                    activateMarkerAnimation();
                    console.log('قسم الخريطة مرئي الآن');
                }
            });
        }, { 
            threshold: 0.3 // 30% من العنصر مرئي
        });
        
        observer.observe(mapSection);
    }
}

// ربط أحداث أزرار التحكم
function bindMapControlEvents() {
    // زر التكبير
    const zoomInBtn = document.querySelector('.zoom-in');
    if (zoomInBtn) {
        zoomInBtn.addEventListener('click', zoomMapIn);
    }
    
    // زر التصغير
    const zoomOutBtn = document.querySelector('.zoom-out');
    if (zoomOutBtn) {
        zoomOutBtn.addEventListener('click', zoomMapOut);
    }
    
    // زر إعادة التعيين
    const resetBtn = document.querySelector('.reset-map');
    if (resetBtn) {
        resetBtn.addEventListener('click', resetMapView);
    }
    
    // زر الحصول على اتجاهات
    const directionsBtn = document.querySelector('.get-directions');
    if (directionsBtn) {
        directionsBtn.addEventListener('click', getDirectionsToOffice);
    }
    
    // تأثيرات تمرير الماوس على أزرار التحكم
    const mapButtons = document.querySelectorAll('.map-btn');
    mapButtons.forEach(button => {
        button.addEventListener('mouseenter',
