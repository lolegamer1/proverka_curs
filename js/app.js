const button = document.querySelector('#buttonUp');
button.addEventListener('click', scrollToStart);

const buttonPopUp = document.querySelector('#linkLight');
buttonPopUp.addEventListener('click', PopUpStart);

function PopUpStart(event) {
    event.preventDefault();
    document.querySelector('#popupCont').classList.add('.visible');
}




const smoothLinks = document.querySelectorAll('.link_blue_js');
smoothLinks.forEach(smoothLinks => {
        smoothLinks.addEventListener('click', (event) => {
                event.preventDefault();
                const id = smoothLinks.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            }


        )
    }


)


function scrollToStart(event) {
    event.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}
