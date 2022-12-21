window.addEventListener('scroll',()=>{
    var top = document.getElementById('nav');
    if(window.scrollY>10){
        top.style.backgroundColor= "rgba(0,0,0)";
    }
    else{
        top.style.backgroundColor= "rgba(0,0,0,0)";
    }
});
    