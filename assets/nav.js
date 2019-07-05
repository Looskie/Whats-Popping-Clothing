(function($) { "use strict";
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelector('.nav__list');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
            menuItems.addEventListener('click', function () {
                return toggleClass(body, 'nav-active');
            })
		};
        var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                    $('.cd-header').css('top', '0');
            } else {
                    $('.cd-header').css('top', '-100px');
                    body.classList.remove('nav-active');
                }
                    prevScrollpos = currentScrollPos;
                }
        
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();                  
})(jQuery); 
