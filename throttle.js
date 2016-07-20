/**
 * A simple implementation of throttle function.
 * 
 */

function throttle(fn, delay, atleast){
    var timer = null;
    var previous = null;

    return function(){
        var now = +new Date();

        if(!previous){
            previous = now;
        }

        if(atleast && now - previous > atleast){
            fn();
            previous = now;
            clearTimeout(timer);
        } else {
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn();
                previous = null;
            }, delay);
        }
    }
}