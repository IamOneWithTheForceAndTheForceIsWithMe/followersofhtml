(function () {
    const $buttonArray = document.getElementsByClassName("listButtonClass");
    const $listItem = document.getElementsByClassName("listItemClass");
    for (let i = 0; i < $buttonArray.length; i++){
        $buttonArray[i].addEventListener('click', () =>{
            if ($listItem[i].style.display === "none"){
                $listItem[i].style.display = 'initial';
            } else {
                $listItem[i].style.display = 'none';
            }
        })
    }
})();