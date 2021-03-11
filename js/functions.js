var ritualAudio = new Audio('../audio/ritual.mp3');

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:7
        }
    }
})


function playSong(){
    if(ritualAudio.paused){
        ritualAudio.play();
    } 
}