var burg = document.getElementById('burger');
burg.onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('burger-menu').classList.toggle('show');
}