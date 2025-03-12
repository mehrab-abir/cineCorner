const menuToggler = document.querySelector('.menuToggler');
const sideNav = document.getElementById('sideNav');
const closeBtn = document.querySelector('.closeBtn');

menuToggler.addEventListener('click', openSideMenu); //function defination below
closeBtn.addEventListener('click', closeSideMenu); //function defination below

/* function openSideMenu() {
    sideNav.style.width = '220px';
}
function closeSideMenu() {
    sideNav.style.width = '0';
} */

function openSideMenu() {
    sideNav.classList.add('translateMenu');
}
function closeSideMenu() {
    sideNav.classList.remove('translateMenu');
}

/*dropdown menu- jQuery */

/* $(document).ready(function () {
    $('.drop-series').mouseenter(function () {
        $('.series-list').slideDown(300);
    });
});
$(document).ready(function () {
    $('.drop-series').mouseleave(function () {
        $('.series-list').slideUp(300);
        $('.genre-list').slideUp(300);
    });
});


$(document).ready(function () {
    $('.drop-genre').mouseenter(function () {
        $('.genre-list').slideDown(300);
    });
});
$(document).ready(function () {
    $('.drop-genre').mouseleave(function () {
        $('.series-list').slideUp(300);
        $('.genre-list').slideUp(300);
    });
}); */

/*dropdown menu */
const dropGenre = document.querySelector('.drop-genre');
const genreList = document.querySelector('.genre-list');

const dropSeries = document.querySelector('.drop-series');
const seriesList = document.querySelector('.series-list');

dropGenre.addEventListener('mouseenter',function(){
    genreList.classList.add('dropDownTransY');
})
dropGenre.addEventListener('mouseleave',function(){
    genreList.classList.remove('dropDownTransY');
})


dropSeries.addEventListener('mouseenter',function(){
    seriesList.classList.add('dropDownTransY');
})
dropSeries.addEventListener('mouseleave',function(){
    seriesList.classList.remove('dropDownTransY');
})
/*dropdown menu ends */




/*side menu dropdown */
$(document).ready(function(){
    $('.side-drop-genre').click(function(){
        $('.side-genre-list').slideToggle(300);
        $('.side-series-list').slideUp(300);
    })
});

$(document).ready(function(){
    $('.side-drop-series').click(function(){
        $('.side-series-list').slideToggle(300);
        $('.side-genre-list').slideUp(300);
    })
})




/*js for large owl slider */
$(document).ready(function () {
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        animateOut: 'fadeOut',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
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
    });
});

/*mcu phase tabs and content */

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

function selectItem(e){
    removeBorder(); //at first, remove border from all tabs
    removeShow(); // at first, remove show from all tab content

    // console.log(this.id);
    this.classList.add('tab-border');

    //add class 'show' to the tab which one is clicked,,this.id refer to that id
    const tabContent = document.querySelector(`#${this.id}-content`);
    tabContent.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

tabItems.forEach(item => item.addEventListener('click',selectItem));

//item onclick function
function login(){
    alert("You will need to login or register first");
}

// mcu movie list

$(document).ready(function(){
    $('.drop-mcu-list').click(function(){
        $('.mcuList').slideToggle(500);
    })
})

$(document).ready(function(){
    $('.drop-X-Men-list').click(function(){
        $('.X-MenList').slideToggle(500);
    })
})

//mission impossible img and trailer

const m7Btn = document.querySelector('.m7-btn');
const m7trailer = document.querySelector('.m7-trailer');
const imgM7 = document.querySelector('.img-M7');

m7Btn.addEventListener('click',function(){
    m7trailer.classList.toggle('show-m7-trailer');
    imgM7.classList.toggle('hideImgM7');
})


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))