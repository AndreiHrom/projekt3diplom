/*Document.getElementByid() */
document.getElementById('burger').onclick = function(){
    addMenu();
}

function addMenu(){
    document.getElementById('Menu').classList.toggle('show');
}
