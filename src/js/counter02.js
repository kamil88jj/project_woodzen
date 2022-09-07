window.addEventListener('click', function(event) {
    let counter;


    if (event.target.className === 'logs__plus plus'  || event.target.className === 'logs__minus minus') {
        const counterWrapper = event.target.closest('.logs__number');
        counter = counterWrapper.querySelector('[data-counter]');
    }


    if (event.target.className === 'logs__plus plus') {
        counter.innerHTML = ++counter.innerHTML;
        console.log('plus');
    }


    if (event.target.className === 'logs__minus minus') {

        if(parseInt(counter.innerHTML) > 1) {

            counter.innerHTML = --counter.innerHTML;
        }
    }
});
