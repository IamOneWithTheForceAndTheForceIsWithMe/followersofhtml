(function () {
    const $menuButton = document.getElementById("menuId");
    const $navUl = document.getElementById("navUlId");
    $menuButton.addEventListener('click',() =>{
        if ($navUl.style.display === "none"){
            $navUl.style.display = "initial";
        } else {
            $navUl.style.display = "none";
        }
    });
    $navUl.addEventListener('click',() =>{
        if ($menuButton.style.display = "initial"){
            $navUl.style.display = "none";
        }
    });
})();