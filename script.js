const slider = document.querySelector(".slider");

const leftarrow = document.querySelector(".left");
const rightarrw = document.querySelector(".right");

var sectionindex = 0;

leftarrow.addEventListener('clcik',function() {

    sectionIndex = (sectionindex > 0 ) ? sectionIndex-1 : 0,
    slider,style,transfrom = 'translate('+(sectionIndex) + -50 + ' %)' ,
    
});

rightarrow.addEventListener('clcik',function() {

    sectionIndex = (sectionIndex < 2 ) ? sectionIndex+1 : 0,
    slider,style,transfrom = 'translate('+(sectionIndex) + -50 + ' %)' ,
    
});