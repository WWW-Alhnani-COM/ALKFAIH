// main.js - الملف الرئيسي لجافاسكريبت

document.addEventListener('DOMContentLoaded', function() {
    // تحديث السنة الحالية في الفوتر
    updateCurrentYear();
    
    // تحسين التنقل السلس
    setupSmoothScrolling();
    
    // إعداد تأثيرات التحميل
    setupLoadingEffects();
});

// تحديث السنة الحالية
function updateCurrentYear() {
    const yearElements = document.querySelectorAll('#current-year');
    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });
}

// تحسين التنقل السلس
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // تجاهل الروابط الفارغة
            if (href === '#' || href === '') return;
            
            // إلغاء السلوك الافتراضي للروابط الداخلية
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// إعداد تأثيرات التحميل
function setupLoadingEffects() {
    // إضافة تأثيرات للشعار
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        logo.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
    
    // تأثيرات للإحصائيات
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1)';
            }
        });
    });
}

// وظائف عامة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// دالة للتحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// دالة للتحقق من صحة رقم الهاتف السعودي
function isValidSaudiPhone(phone) {
    const phoneRegex = /^(009665|9665|\+9665|05)([0-9]{8})$/;
    return phoneRegex.test(phone);
}
