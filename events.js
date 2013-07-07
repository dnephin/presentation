

Reveal.addEventListener('shock', function() {

    console.log('starting flicker')
    var ele = $('.flicker').removeClass('active')

    setTimeout(function() {
        ele.addClass('active');
    }, 1000);
})
