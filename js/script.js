jQuery(document).ready(function($) {  

// Init
    header();
    jQuery(window).scroll(function() {
        header();
    });

// Scroll
    jQuery(document).on('click', '#scroll', function(){
        window.scroll({
          top: 0, 
          left: 0, 
          behavior: 'smooth'
        });
    })

// Slider
    if (jQuery('.item_slider').length > 0) {
        jQuery('.item_slider').owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            dots: true,
            items: 1,
            margin: 10,
            navText: [
                '<div class="nav__prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0,0H16V16H0Z" fill="#4a5264" opacity="0" /><path d="M9.885,9.879l3.3,3.3-.943.943L8,9.879l4.243-4.243.943.943Z" transform="translate(-2.667 -1.879)" fill="#4a5264" /></svg></div>',
                '<div class="nav__next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M0,0H16V16H0Z" fill="#4a5264" opacity="0"/><path d="M11.522,9.879l-3.3-3.3.943-.943,4.243,4.243L9.165,14.121l-.943-.943Z" transform="translate(-2.741 -1.879)" fill="#4a5264"/></svg></div>'
            ],
        });
    } 
    if (jQuery('.content-cities .cities_slider').length > 0) {
        jQuery('.content-cities .cities_slider').owlCarousel({
            loop: true,
            nav: false,
            autoplay: true,
            dots: true,
            items: 1,
            margin: 10,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });
    }

    if(jQuery('.gallery-top').length > 0 && jQuery('.gallery-thumbs').length > 0) {
        var galleryTop = new Swiper('.gallery-top', {
            slidesPerView: 1,  
            loop: true,
            loopedSlides: 50,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            direction: 'vertical',
            slideToClickedSlide: true,
            spaceBetween: 16,
            loopedSlides: 50,
            loop: true,
            slidesPerView: 5,
            breakpoints: {
                500: {
                    slidesPerView: 5,
                },
                1024: {
                    slidesPerView: 7,
                },
            },
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
    }

// Active Icon
    jQuery(document).on('click', '.conn_sicon.tooltipMarking, .conn_like', function(e) {
        if(jQuery(this).hasClass('active')){
            jQuery(this).attr('aria-label', 'Bấm để lưu tin');
        } else {
            jQuery(this).attr('aria-label', 'Bấm để bỏ lưu tin');
        }
        jQuery(this).toggleClass('active');
    });

// Droplist User
    jQuery(document).on('click', '.conn_logined', function(){
        jQuery(this).closest('.box').find('.header-logined').toggleClass('open');
    });

// Tabs
    var tabInputs = document.querySelectorAll('.tabInput');

    tabInputs.forEach(function(input) {
        input.addEventListener('change', function() {
            var id = input.value;
            var elems = document.querySelectorAll('.box_contents .ite');
            [].forEach.call(elems, function(el) {
                el.classList.remove("ite_active");
            });
            var tabs = document.querySelectorAll('.box_tabs .ite');
            [].forEach.call(tabs, function(el) {
                el.classList.remove("ite_active");
            });
            document.getElementById('tab' + id).classList.add("ite_active");
            input.parentElement.classList.add("ite_active");
        });
    });

// Menu
    jQuery(document).on('click', '.header-scroll .logo_hambuger, #header .header-menu .menu_hambuger', function(event) {
        jQuery('#header').toggleClass('open');
        // jQuery('body').toggleClass('none-scroll');
    });
    jQuery(document).on('click', '#header .action_menu', function(event) {
        jQuery(this).find('.hamburger-box').toggleClass('active');
        jQuery('#header').toggleClass('open');
        // jQuery('body').toggleClass('none-scroll');
    });
    jQuery(document).on('click', '.header-dark', function(event) {
        jQuery('#header').removeClass('open');
        jQuery('#header .header-scroll .hamburger-box').removeClass('active');
        // jQuery('body').toggleClass('none-scroll');
    });

// Search Mobile
    jQuery(document).on('click', '.header-mobile .filter', function(){
        jQuery('.header-mfilter').addClass('open');
        // jQuery('body').addClass('none-scroll');
    });
    jQuery(document).on('click', '.header-mfilter .mfilter_close', function(){
        jQuery('.header-mfilter').removeClass('open');
        // jQuery('body').removeClass('none-scroll');
    });

// Tabs
    jQuery(document).on('click', '.form__tabs li', function() {
        if(!jQuery(this).hasClass('tab_active')){            
            jQuery('.form__tabs li').removeClass('tab_active');
            jQuery(this).addClass('tab_active');
        }
    });
    jQuery(document).on('click', '.mfilter_tabs li', function() {
        if(!jQuery(this).hasClass('tab_active')){            
            jQuery('.mfilter_tabs li').removeClass('tab_active');
            jQuery(this).addClass('tab_active');
        }
    });
    jQuery(document).on('click', '.content-flisting .box_tabs li', function() {
        if(!jQuery(this).hasClass('tab_active')){            
            jQuery('.content-flisting .box_tabs li').removeClass('tab_active');
            jQuery(this).addClass('tab_active');
        }
    });

// Dropdown
    jQuery(document).on('click', '.option_current', function() {
        jQuery('.option').removeClass('open');
        jQuery(this).parent().addClass('open');
        jQuery('.control_dropdown').removeClass('open');
    });

    jQuery(document).on('click', '.option_dropdown ul li', function() {
        jQuery(this).closest('.option').find('.option_current span').text(jQuery(this).text());
        jQuery(this).closest('.option').find('.option_current input').val(jQuery(this).text());
        jQuery(this).closest('.option').find('.option_current').addClass('has_value');
        jQuery(this).closest('.option').find('ul li').removeClass('current');
        jQuery(this).closest('.option').removeClass('open');
        jQuery(this).addClass('current');
    });

    jQuery(document).on('click', '.dropdown_current', function() {
        jQuery(this).parent().addClass('open');
        jQuery('.option').removeClass('open');
    });

    jQuery(document).on('click', '.dropdown_options ul li', function() {
        jQuery(this).closest('.control_dropdown').find('.dropdown_current span').text(jQuery(this).text());
        jQuery(this).closest('.control_dropdown').find('.dropdown_current').addClass('has_value');
        jQuery(this).closest('.control_dropdown').removeClass('open');
        jQuery(this).closest('.control_dropdown').find('ul li').removeClass('current');
        jQuery(this).addClass('current');
        jQuery('.dropdown_current .icon__left').html(jQuery(this).find('.li_icon').html());
    });

    jQuery(document).on('click', '.bdropdown__current', function() {
        jQuery(this).parent().addClass('open');
        jQuery('.option').removeClass('open');
    });

    jQuery(document).on('click', '.bdropdown__options ul li', function() {
        jQuery(this).closest('.conn_bdropdown').find('.bdropdown__current span').text(jQuery(this).text());
        jQuery(this).closest('.conn_bdropdown').removeClass('open');
        jQuery(this).closest('.conn_bdropdown').find('ul li').removeClass('current');
        jQuery(this).addClass('current');
    });

// Handle Body
    jQuery(document).on('click', 'body', function(e){
        if(e && e.target && e.target.offsetParent && e.target.offsetParent.className.indexOf('option') == -1){
            jQuery('.option').removeClass('open');
        }
        if(e && e.target && e.target.offsetParent && e.target.offsetParent.className.indexOf('control_dropdown') == -1){
            jQuery('.control_dropdown').removeClass('open');
        }
        if(e && e.target && e.target.offsetParent && e.target.offsetParent.className.indexOf('header-logined') == -1 &&  e.target.className.indexOf('conn_logined') == -1){
            jQuery('.header-logined').removeClass('open');
        }
    });

// Click Show Phone
    jQuery(document).on('click', '.phone__click', function(){
        if(!jQuery(this).hasClass('active')) {
            jQuery(this).parent().find('.phone__number').text(jQuery(this).parent().find('.phone__number').attr('number'));
            jQuery(this).parent().find('#myNumber').val(jQuery(this).parent().find('.phone__number').attr('number'));
            jQuery(this).text('Sao chép');
            jQuery(this).addClass('active')
        } else {
            /* Get the text field */
            var copyText = document.getElementById("myNumber");

            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */

            /* Copy the text inside the text field */
            document.execCommand("copy");
            jQuery('.phone__msg').fadeIn(300);
            setTimeout(function(){
                jQuery('.phone__msg').fadeOut(300);
            }, 2000);
        }
    });

// Filter Listing
    jQuery(document).on('click', '.content-blisting .child .child_title', function(){
        jQuery(this).parent().find('.child_content').slideToggle(300);
        jQuery(this).parent().toggleClass('open');
    });
    jQuery(document).on('click', '.list__radio .iradio .iradio_box', function(){
        if(!jQuery(this).hasClass('open')){
            jQuery(this).closest('.list__radio').find('.list__radio').slideUp(300)
            jQuery(this).parent().find('.list__radio').slideDown(300);
            jQuery(this).closest('.list__radio').find('.iradio_box').removeClass('open');
            jQuery(this).addClass('open');
        }        
    });

// Show more filter
    jQuery(document).on('click', '.list__more', function(){
        if (jQuery(this).hasClass('active')) {
            jQuery(this).find('span').text(jQuery(this).attr('data-default'));
            jQuery(this).removeClass('active');
        } else {
            jQuery(this).find('span').text(jQuery(this).attr('data-less'));
            jQuery(this).addClass('active');
        }
    });

// Lightbox
    jQuery(document).on('click', '.lightbox_close', function(){
        jQuery(this).parent().parent().removeClass('lightbox_show');
    });
});

function header() {
    // Scroll article
    jQuery(window).scroll(function(event) {
        var scroll = jQuery(window).scrollTop();
        if (scroll > 200) {
            jQuery('#header').addClass('active');
            jQuery('#scroll').addClass('scroll');
            jQuery('.content-flisting').addClass('active');
            jQuery('.header-logined').removeClass('open');
        } else {
            if(scroll > 190) {
                jQuery('.content-flisting').addClass('active');
            } else {                
                jQuery('.content-flisting').removeClass('active');
            }
            jQuery('#header').removeClass('active');
            jQuery('#scroll').removeClass('scroll');
        }
    });
}

function fbShare(url, title, descr, image, winWidth, winHeight) {
    var winTop = (screen.height / 2) - (winHeight / 2);
    var winLeft = (screen.width / 2) - (winWidth / 2);
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + winWidth + ',height=' + winHeight);
}