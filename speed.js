let arr = document.getElementsByTagNameNS("video");


function attrSpeed(speed){
    for(let i = 0;i < arr.length;i++){
        arr.playbackRate = speed;
    }
}