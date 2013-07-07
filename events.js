

Reveal.addEventListener('shock', function() {

    console.log('starting')
    setTimeout(function() {
        $('.flicker').addClass('active');
        console.log('done');
    }, 1000);
})
