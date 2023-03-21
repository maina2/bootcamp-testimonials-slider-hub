const slider = document.querySelector('.slider');

const leftarrow = document.querySelector( '.arrow left');
const rightarrow = document.querySelector('.arrow right');

var sectionIndex = 0;

leftarrow.addEventListener('clcik',function(){

    sectionIndex = (sectionIndex > 0 ) ? sectionIndex-1 : 0;
    slider.style.transfrom = 'translate(' + (sectionIndex) * 50 + '%)';
    
});

rightarrow.addEventListener('clcik',function() {

    sectionIndex = (sectionIndex < 1 ) ? sectionIndex + 1 : 0;
    slider.style.transfrom = 'translate(' + (sectionIndex) * 50 + '%)';
    
});