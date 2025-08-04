

// Responsive navigationbar

function navigationmenu() {
    let nav = document.getElementById('nav_bar_btn');

    if (nav.style.display == "flex") {
        nav.style.display = "none"
    } else {
        nav.style.display = "flex";
    }
}

// drop down 

//  [1]

function navmenuhome() {
    let nav_submenu_home = document.getElementById("ddlist1");
    let nav_submenu_pages = document.getElementById("ddlist2");
    let nav_submenu_blog = document.getElementById("ddlist3");
    if (nav_submenu_home.style.display == "block") {
        nav_submenu_home.style.display = "none"
    } else {
        nav_submenu_home.style.display = "block";
        nav_submenu_pages.style.display = "nonne";
        nav_submenu_blog.style.display = "none";
    }
}

//  [2]

function navmenupages() {
    let nav_submenu_home = document.getElementById("ddlist1");
    let nav_submenu_pages = document.getElementById("ddlist2");
    let nav_submenu_blog = document.getElementById("ddlist3");
    if (nav_submenu_pages.style.display == "block") {
        nav_submenu_pages.style.display = "none"
    } else {
        nav_submenu_pages.style.display = "block";
        nav_submenu_blog.style.display = "none";
        nav_submenu_home.style.display = "none"
    }
}
//  [3]

function navmenublog() {
    let nav_submenu_home = document.getElementById("ddlist1");
    let nav_submenu_pages = document.getElementById("ddlist2");
    let nav_submenu_blog = document.getElementById("ddlist3");
    if (nav_submenu_blog.style.display == "block") {
        nav_submenu_blog.style.display = "none"
    } else {
        nav_submenu_blog.style.display = "block";
        nav_submenu_pages.style.display = "none";
        nav_submenu_home.style.display = "none";
    }
}


// [1]
let Registration_btn = document.querySelector(".registration-for-workshop-btn");
let Registration_icon = Registration_btn.children
function Registrationforworkshop() {
    if (Registration_icon[0].classList.contains("fa-plus")) {
        Registration_icon[0].classList.replace("fa-plus", "fa-minus");

    }
    else {
        Registration_icon[0].classList.replace("fa-minus", "fa-plus");
        Meeting_icon[0].classList.replace("fa-plus", "fa-minus");
        Discuss_icon[0].classList.replace("fa-plus", "fa-minus");
    }
    let mines = document.getElementById('alert01');
    let pluse = document.getElementById('alert02');
    let pluse2 = document.getElementById('alert03');
    if (mines.style.display == "none") {
        mines.style.display = 'block';
        pluse.style.display = 'none';
        pluse2.style.display = 'none';
    } else {
        mines.style.display = 'none';
    }
}

//  [2]
let Meeting_btn = document.querySelector(".meeting-with-investors-btn");
let Meeting_icon = Meeting_btn.children
function Meetingwithinvestors() {
    if (Meeting_icon[0].classList.contains("fa-minus")) {
        Meeting_icon[0].classList.replace("fa-minus", "fa-plus");
    }
    else {
        Meeting_icon[0].classList.replace("fa-plus", "fa-minus");
        Registration_icon[0].classList.replace("fa-minus", "fa-plus");
        Discuss_icon[0].classList.replace("fa-minus", "fa-plus");
    }
    let mines = document.getElementById('alert01');
    let pluse = document.getElementById('alert02');
    let pluse2 = document.getElementById('alert03');
    if (pluse.style.display == "block") {
        pluse.style.display = 'none';
    } else {
        pluse.style.display = 'block';
        mines.style.display = 'none';
        pluse2.style.display = 'none';
    }
}

//  [3]
let Discuss_btn = document.querySelector(".discussion-about-meetings-btn");
let Discuss_icon = Discuss_btn.children
function Discussionmeetings() {
    if (Discuss_icon[0].classList.contains("fa-minus")) {
        Discuss_icon[0].classList.replace("fa-minus", "fa-plus");
        
    } else {
        Discuss_icon[0].classList.replace("fa-plus", "fa-minus");
    }
    let mines = document.getElementById('alert01');
    let pluse = document.getElementById('alert02');
    let pluse2 = document.getElementById('alert03');
    if (pluse2.style.display == "block") {
        pluse2.style.display = 'none';
    } else {
        pluse2.style.display = 'block';
        mines.style.display = 'none';
        pluse.style.display = 'none';
    }
}





let myButton = document.getElementById("my-button");
window.scroll = function () {
    scrollfunction()
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let countdown = new Date("2026/04/26 11:59:00").getTime();
let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = countdown - now;
    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("count-num").innerHTML = d;
    document.getElementById("count-num1").innerHTML = h;
    document.getElementById("count-num2").innerHTML = m;
    document.getElementById("count-num3").innerHTML = s;
}, 1000)

// images slide header

let myIndex = 0
slideFunc()
function slideFunc() {
    let i;
    let s = document.getElementsByClassName("ds-none");
    for (i = 0; i < s.length; i++) {
        s[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > s.length) {
        myIndex = 1
    }
    s[myIndex - 1].style.display = "block"
    setTimeout(slideFunc, 2000)
}


