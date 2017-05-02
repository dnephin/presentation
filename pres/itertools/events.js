

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

    toggles = make_toggle(70, 
              make_toggle(120,
              make_toggle(80,
              make_toggle(120,
              make_toggle(90,
              make_toggle(120,
              make_toggle(0, no_op)))))))

    setTimeout(toggles, 1000)

})
