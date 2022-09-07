const cartWrapper = document.querySelector('.wrapper');


window.addEventListener('click', function(event) {
    
    if(event.target.hasAttribute('data-cart')) {
        
        const  block = event.target.closest('.logs__blocks');
        
        const productInfo = {
            id: block.dataset.id,
            title: block.querySelector('.logs__subtitle').innerHTML,
            counter: block.querySelector('.logs__input').innerHTML,
            price: block.querySelector('.logs__price').innerHTML,
        };
        
        
        const cartItemHTML = `
                                    <div class="total__subtitle">
                                        <div class="total__product">${productInfo.title}</div>
                                        <div class="total__sale">0<span>%</span></div>
                                        <div class="total__quantity">${productInfo.counter}</div>
                                        <div class="total__price">${productInfo.price}</div>
                                        <div class="total__sum">0</div>
                                    </div>
                                    <div class="divider"></div>`;

        cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
    }
});