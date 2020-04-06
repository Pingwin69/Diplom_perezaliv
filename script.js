var burg = document.getElementById('burger');
burg.onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('burger-menu').classList.toggle('show');
}
/*web app ill*/
var all = document.getElementById('all');
var print = document.getElementById('print');
var web = document.getElementById('web');
var app = document.getElementById('app');
var ill = document.getElementById('ill');
var photo1 = document.getElementById('photo1'); 
var photo2 = document.getElementById('photo2');
var photo3 = document.getElementById('photo3');
var photo4 = document.getElementById('photo4');
var photo5 = document.getElementById('photo5'); 
var photo6 = document.getElementById('photo6'); 
var photo7 = document.getElementById('photo7'); 
var photo8 = document.getElementById('photo8');

all.onclick = function(){
    showAll();
}
function showAll(){
    photo1.classList.remove("hide");
    photo2.classList.remove("hide");
    photo3.classList.remove("hide");
    photo4.classList.remove("hide");
    photo5.classList.remove("hide");
    photo6.classList.remove("hide");
    photo7.classList.remove("hide");
    photo8.classList.remove("hide");
}

print.onclick = function(){
    showPrints();
}

function showPrints(){
    photo1.classList.toggle("hide");
    photo5.classList.toggle("hide");
}

web.onclick = function(){
    showWebs();
}
function showWebs(){
    photo2.classList.toggle("hide");
    photo3.classList.toggle("hide");
}

app.onclick = function(){
    showApp();
}
function showApp(){
    photo7.classList.toggle("hide");
    photo6.classList.toggle("hide");
}

ill.onclick = function(){
    showIll();
}
function showIll(){
    photo8.classList.toggle("hide");
    photo4.classList.toggle("hide");
}

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            autoplayHoverPause: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })

       

