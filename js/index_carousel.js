(function () {

    const $carouselItemsArray = document.getElementsByClassName("carouselItemClass");
    let carouselCurrentPosition = 0;
    const $leftArrowButton = document.getElementById("leftArrowId");
    const $rightArrowButton = document.getElementById("rightArrowId");
    setInterval(interval, 8000);

    function interval(){
        if (carouselCurrentPosition === 3){
            carouselCurrentPosition = 0;
        } else {
            carouselCurrentPosition +=1;
        }
        changeCarouselPosition();
    }

    $leftArrowButton.addEventListener("click",() => {
        if (carouselCurrentPosition === 0){
            carouselCurrentPosition = 3;
        } else {
            carouselCurrentPosition -=1;
        }
        changeCarouselPosition();
    });
    $rightArrowButton.addEventListener("click",() => {
        if (carouselCurrentPosition === 3){
            carouselCurrentPosition = 0;
        } else {
            carouselCurrentPosition +=1;
        }
        changeCarouselPosition();
    });

    function changeCarouselPosition() {
        for (let i = 0; i < $carouselItemsArray.length; i++){
            if (i === carouselCurrentPosition){
                $carouselItemsArray[i].style.display = "initial";
            } else {
                $carouselItemsArray[i].style.display = "none";
            }
        }
    }
})();