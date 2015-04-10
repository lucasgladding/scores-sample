(function($) {
    
    $(function() {
        registerShootButtonClickEvent();
    });
    
    function registerShootButtonClickEvent() {
        var $button = $('#button-shoot');
        $button.click(function(event) {
            event.preventDefault();
            registerTransitionEvent();
            shoot();
        });
    }
    
    function registerTransitionEvent() {
        var $puck = $('#puck');
        $puck.bind('transitionend', function() {
            timeoutAndReset();
        });
    }
    
    function timeoutAndReset() {
        setTimeout(function() {
            reset();
        }, 500);
    }
    
    function reset() {
        var $puck = $('#puck');
        $puck.attr('class', 'position-start');
    }
    
    function shoot() {
        var $puck = $('#puck');
        $puck.attr('class', 'transition position-finish');
    }
    
})(jQuery);