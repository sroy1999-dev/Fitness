let button = document.getElementById('btn');
if(button){
    button.addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'flex';
        document.querySelector('.popup').style.position = 'fixed';
        document.getElementById('poster').style.display = 'hidden';
    })
}

let cancel = document.querySelector('.cancel');
if(cancel) {
    cancel.addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
    })
}

let toTop = document.getElementById('top');
if(toTop){
    toTop.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    })
}