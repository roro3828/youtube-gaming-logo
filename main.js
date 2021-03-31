function rainbow(){
    var logo =document.querySelector("div.style-scope.ytd-topbar-logo-renderer").firstElementChild.firstElementChild.firstElementChild;
    var logo_mark=logo.firstElementChild.childNodes;
    var logo_word=logo.lastElementChild.childNodes;

    for (let i=0;i<logo_mark.length;i++){
        let randomColor = "#";
        for(let j = 0; j < 6; j++) {
            randomColor += (16*Math.random() | 0).toString(16);
        }
        logo_mark[i].setAttribute("fill",randomColor);
    }

    for(let i=0;i<logo_word.length;i++){
        let randomColor = "#";
        for(let j = 0; j < 6; j++) {
            randomColor += (16*Math.random() | 0).toString(16);
        }
        logo_word[i].setAttribute("fill",randomColor);
    }
}
rainbow();