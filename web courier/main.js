let counts = document.querySelectorAll(' .count');

counts.forEach((count)=> {
    const updateCount = () => {

        let currentCount = parseInt(count.innerText);
        let targetCount = count.getAttribute('data-target');
        let increaseSpeed = 40;
        let increaseCount = parseInt(targetCount / increaseSpeed);

        if (currentCount < targetCount) {
            count.innerText = currentCount + increaseSpeed;
        } else {
            count.innerText = targetCount;
        }
        setTimeout(updateCount, increaseSpeed);
    }
    updateCount();
})