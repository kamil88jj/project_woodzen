window.addEventListener('click', function(event) {
    console.log('click window');

    console.log(event.target.className);

    if (event.target.className === 'logs__plus plus') {
        console.log('Plus');

        const counterWrapper = event.target.closest('.logs__number');
        console.log(counterWrapper);
    }

    if (event.target.className === 'logs__minus minus') {
        console.log('Minus');
    }
});
