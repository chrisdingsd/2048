/*
 * Shuffle an array with Fisher-Yates Shuffle.
 * 
 * Traverse an array and swap the element with random element before this one.
 * 
 * Interesting part about this code: the use of ~~
 * 
 * Basically it does the following:
 *  typeof foo === 'number' && !isNaN(foo) && foo !== Infinity
 *   ? foo > 0 ? Math.floor(foo) : Math.ceil(foo) : 0;
 * 
 * If the operand is a number and it’s not NaN or Infinity 
 * then ~~ will have the effect of rounding it towards zero 
 * (Math.ceil for negative, Math.floor for positive).
 */

function shuffle(a) {
    var shuffled = a.concat();

    var index = 0;
    var rand;
    var length = a.length;

    for(; index < length; index++){
        rand = ~~(Math.random() * (index + 1));
        if(rand !== index){
            shuffled[index] = shuffled[rand];
            shuffled[rand] = a[index];
        }
    }

    return shuffled;
}