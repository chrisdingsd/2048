'use strict'

(function(w) {

  function countUpTimer(el, endValue) {
    var refreshInterval = 50;
    var duration = 1000; // change duration here. Unit: ms

    var end = endValue;
    var start = 0;

    var value = 0;
    var loopCount = 0;

    var loops = Math.ceil(duration / refreshInterval);
    var increment = Math.floor((end - start) / loops);

    var interval = setInterval(updateTimer, refreshInterval);

    function updateTimer() {
      value += increment;
      loopCount++;
      el.innerHTML = formatNumber(value);

      if (loopCount >= loops) {
        clearInterval(interval);
        value = end;
        el.innerHTML = formatNumber(value);
      }
    }
  }

  function formatNumber(n) {
    var num = n.toString().split('');
    var res = [];
    for (var i = 1; i <= num.length; i++) {
      res.push(num[num.length - i]);
      if (i % 3 === 0) res.push('.');
    }
    if (res[res.length - 1] === '.')
      res.pop();
    return res.reverse().join('');
  }

})(window);