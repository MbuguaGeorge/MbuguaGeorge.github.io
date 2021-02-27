document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 590){
        trial.style.backgroundColor = '#1c1c1c'
        trial.style.transition = '0.25s'
    }
    else{
        trial.style.backgroundColor = 'transparent';
    }
});