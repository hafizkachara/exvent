//  Responsive navigationbar

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
        nav_submenu_pages.style.display = "none";
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

        let myButton = document.getElementById("my-button");
        window.scroll = function () {
            scrollfunction()
        }
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
