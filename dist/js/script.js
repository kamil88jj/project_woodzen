window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let link = document.querySelectorAll('.promo__link'),
        wrap = document.querySelector('.promo__wrapper'),
        content = document.querySelectorAll('.content');

        function hideContent(a) {
            for (let i = a; i < content.length; i++) {
                content[i].classList.remove('show');
                content[i].classList.add('hide');
            }
        }

        hideContent(1);

        function showContent(b) {
            if(content[b].classList.contains('hide')) {
                content[b].classList.remove('hide');
                content[b].classList.add('show');
            }
        }


        wrap.addEventListener('click', function(event) {
            let targetTab = event.target;
            if (targetTab && targetTab.classList.contains('promo__link')) {
                for (let i = 0; i < link.length; i++) {
                    if (targetTab == link[i]) {
                        hideContent(0);
                        showContent(i);
                        break;
                    }
                }
            }
        })
        
});







//JQUERY





