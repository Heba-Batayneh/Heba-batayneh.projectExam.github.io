import './scss/style1.scss';
import './scss/tripOne.scss';
import './scss/tripTwo.scss';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all.min';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery/dist/jquery.slim.min.js';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
import 'wow.js';


$( function(){
    // تنشيط القسم المحدد 
    $(".first-list-element").addClass("active");
    $(".nav-item").click(function () {
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });

    // الانتقال الى القسم المراد من الصفحة  بشكل تدريجي 
    $("a.scroll").on('click', function(event) {
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top - 100}, 800, function(){}); 
        // تم تحديد مدة الانتقال للموقع المراد من الصفحة بمدة 800
    });

    // لتغير التاريخ بشكل تلقائي بالصحة في كل سنة جديدة
    $('#copyright').text("جميع الحقوق محفوظة للشركة سنة " + new Date().getFullYear());


        // ‫ إلغاء الحركة في شاشات الجوال وتهيئة مكتبة wow  للعمل
        const WOW = require('wow.js');

        if ($(window).width() >= 1025) {
            window.wow = new WOW.WOW({
                live: false
            });
        
            window.wow.init({
                offset: 50,
            });
        }

        $("#commentForm").validate(); //للتحقق من المدخلات او من الحقول المطلوب ملؤها 


});