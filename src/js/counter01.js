const  btnMinus = document.querySelector('.logs__minus');
const  btnPlus = document.querySelector('.logs__plus');
const  counter = document.querySelector('.logs__input');

    //tracking the minus button
    btnMinus.addEventListener('click', function() {
        
    //we check that the counter is greater than 1
        if(parseInt(counter.innerHTML) > 1) {
            counter.innerHTML = --counter.innerHTML;
        }
        
    });

    //tracking the plus button
    btnPlus.addEventListener('click', function() {
        counter.innerHTML = ++counter.innerHTML;
    });