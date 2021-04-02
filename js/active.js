function menu_toggle(){
        var button = document.getElementById('hamburger');
        var open = document.getElementsByClassName('hamburger_line');
        var navi = document.getElementById('navi');

        button.addEventListener('click',function(){
            for(var i=0; i<open.length; i++){
                open[i].classList.toggle('open');
            }
            navi.classList.toggle('open');
        });
}menu_toggle();
