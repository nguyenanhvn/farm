jQuery(document).ready(function($) {    
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

    jQuery(document).on('click', '.item_like', function(e) {
        jQuery(this).toggleClass('active');
    });

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
    jQuery(document).on('click', '#header .action_menu', function(event) {
        /* Act on the event */
        jQuery(this).find('.hamburger-box').toggleClass('active');
        jQuery('.mobile_menu').toggleClass('open');
        jQuery('body').toggleClass('none-scroll');
    });
    jQuery(document).on('click', '.mobile_dark', function(event) {
        /* Act on the event */
        jQuery('.mobile_menu').toggleClass('open');
        jQuery('#header .hamburger-box').toggleClass('active');
        jQuery('body').toggleClass('none-scroll');
    });

// Tabs
    jQuery(document).on('click', '.form__tabs li', function() {
        if(!jQuery(this).hasClass('tab_active')){            
            jQuery('.form__tabs li').removeClass('tab_active');
            jQuery(this).addClass('tab_active');
        }
    });

// Dropdown
    jQuery(document).on('click', '.option_current', function() {
        jQuery(this).parent().addClass('open');
    });

    jQuery(document).on('click', '.option_dropdown ul li', function() {
        jQuery(this).closest('.option').find('.option_current span').text(jQuery(this).text());
        jQuery(this).closest('.option').find('.option_current input').val(jQuery(this).text());
        jQuery(this).closest('.option').find('.option_current').addClass('has_value');
        jQuery(this).closest('.option').removeClass('open');
    });


    jQuery(document).on('click', '.dropdown_current', function() {
        jQuery(this).parent().addClass('open');
    });

    jQuery(document).on('click', '.dropdown_options ul li', function() {
        jQuery(this).closest('.control_dropdown').find('.dropdown_current span').text(jQuery(this).text());
        jQuery(this).closest('.control_dropdown').find('.dropdown_current').addClass('has_value');
        jQuery(this).closest('.control_dropdown').removeClass('open');
    });

// Handle Body
    jQuery(document).on('click', 'body', function(e){
        if(e && e.target && e.target.offsetParent && e.target.offsetParent.className.indexOf('option') == -1){
            jQuery('.option').removeClass('open');
        }
    });

});