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

function flip(scale){
    let style_val='scale('+scale[0]+','+scale[1]+');';
    let flip_element=document.querySelector("div.html5-video-player");
    let attri=flip_element.getAttribute("style");

    if (attri==null){
        style_val='transform: '+style_val;
    }
    else{
        style_val=attri.replace(';',' ')+style_val;
    }

    flip_element.setAttribute("style",style_val);
}

function transform_var(horizontal,vertical){
    let scale=['1','1'];
    if(horizontal){
        scale[0]='-1'
    }
    if(vertical){
        scale[1]='-1'
    }
    return scale;
}

function rotate(deg){
    let style_val='rotateZ('+deg+'deg);';
    let flip_element=document.querySelector("div.html5-video-player");
    let attri=flip_element.getAttribute("style");

    if (attri==null){
        style_val='transform: '+style_val;
    }
    else{
        style_val=attri.replace(';',' ')+style_val;
    }

    flip_element.setAttribute("style",style_val);
}

chrome.storage.sync.get({
    rainbow:true,
    logo_type:"default",
    flip:[false,false],
    rotation:0
}, function(items) {
    if (items.rainbow){
        rainbow();
    }
    if (items.flip[0] || items.flip[1]){
        flip(transform_var(items.flip[0],items.flip[1]));
    }
    if (items.rotation!=0){
        rotate(items.rotation);
    }
})