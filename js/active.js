function menu_toggle(){
        var button = document.getElementById('hamburger');
        var open = document.getElementsByClassName('hamburger_line');
        var navi = document.getElementById('navi');
        var href = document.querySelectorAll('a[href^="#"]');

        button.addEventListener('click',function(){
            for(var i=0; i<open.length; i++){
                open[i].classList.toggle('open');
            }
            navi.classList.toggle('open');
        });

        navi.addEventListener('click',function(){
            for(var i=0; i<open.length; i++){
                open[i].classList.remove('open');
            }
            navi.classList.remove('open');
        });

        for(var i=1; i<href.length; i++){
            href[i].addEventListener('click',function(){
                for(var i=0; i<open.length; i++){
                    open[i].classList.remove('open');
                }
                navi.classList.remove('open');
                menu_scroll();
            });
        }
}menu_toggle();

function menu_scroll(){
    var scroll = new SmoothScroll('a[href^="#"]',{
        header: '#header'
    });
}
