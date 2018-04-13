(function () {
    const $imgHeader = document.getElementById("headerImgId");
    let $imgCurrentPosition = 1;
    setInterval(changeBackground, 4000);
    function changeBackground() {
        if ($imgCurrentPosition === 0){
            $imgHeader.src = "css/backgrounds/frontend_0.jpg";
            $imgCurrentPosition = 1;
        } else if ($imgCurrentPosition === 1){
            $imgHeader.src = "css/backgrounds/frontend_1.jpg";
            $imgCurrentPosition = 2;
        } else {
            $imgHeader.src = "css/backgrounds/frontend_2.jpg";
            $imgCurrentPosition = 0;
        }
    }
})();