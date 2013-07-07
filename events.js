

no_op = function() {}

Reveal.addEventListener('shock', function() {

    console.log('starting flicker')
    var ele = $('.flicker').removeClass('active')

    make_toggle = function(delay, follow) {
        return function() {
            ele.toggleClass('active');
           setTimeout(follow, delay);
        }
    }

    toggles = make_toggle(500, 
              make_toggle(100,
              make_toggle(100,
              make_toggle(100,
              make_toggle(100,
              make_toggle(100,
              make_toggle(0, no_op)))))))

    setTimeout(toggles, 1200)

})
