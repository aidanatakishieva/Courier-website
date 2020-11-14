"use strict";

var counts = document.querySelectorAll(' .count');
counts.forEach(function (count) {
  var updateCount = function updateCount() {
    var currentCount = parseInt(count.innerText);
    var targetCount = count.getAttribute('data-target');
    var increaseSpeed = 40;
    var increaseCount = parseInt(targetCount / increaseSpeed);

    if (currentCount < targetCount) {
      count.innerText = currentCount + increaseSpeed;
    } else {
      count.innerText = targetCount;
    }

    setTimeout(updateCount, increaseSpeed);
  };

  updateCount();
});