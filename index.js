let slideIndex = 1;
showSlides(slideIndex);

document.querySelectorAll('.acquista-button').forEach(function (button) {
    button.addEventListener('click', function () {
        var slideIndex = parseInt(button.getAttribute('data-slide-index'));
        
        window.location.href = '/acquista.html?slide=' + slideIndex;
    });
});

function updateAcquistaButtons(n) {
    var acquistaButtons = document.querySelectorAll('.acquista-button');

    acquistaButtons.forEach(function (button) {
        button.style.display = 'none';
    });

    acquistaButtons[n - 1].style.display = 'flex';
}


function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlides(n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let colorArray = ['#5C2D91', '#ED1164', '#F37021'];
    let buttonP = document.querySelector(".nav-bar-acquista a button p");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    document.querySelector("meta[name=theme-color]").setAttribute("content", colorArray[(slideIndex - 1) % colorArray.length]);
    document.body.style.backgroundColor = colorArray[(slideIndex - 1) % colorArray.length];
    buttonP.style.color = colorArray[(slideIndex - 1) % colorArray.length];

    slides[slideIndex - 1].style.display = "block";
    updateAcquistaButtons(slideIndex);
}
