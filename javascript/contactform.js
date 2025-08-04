function validation() {
    let user = document.getElementById("input-user-name").value;
    let email = document.getElementById("input-user-email").value;
    let text = document.getElementById("input-user-more-information").value;
//user-name
    if (user == "") {
        document.getElementById("user-name").innerHTML = "*Please fill the username field";
    }
    if (user == "") {
        document.getElementById("user-name").style.display = "block";
    } else {
        document.getElementById("user-name").style.display = "none";
    }
    //user-email
    if (email == "") {
        document.getElementById("user-email").innerHTML = "*Please fill the Email Address field"
    }
    if (email == "") {
        document.getElementById("user-email").style.display = "block";
    } else {
        document.getElementById("user-email").style.display = "none";
    }
    //user-text
    if (text == "") {
        document.getElementById("user-text").innerHTML = "*Please write Comment Between 30 Words"
        document.getElementById("user-text").style.display = "block";
    } else {
        document.getElementById("user-text").style.display = "none";
    }
}

//footer subscribe button
function footer() {
    let emails = document.getElementById("subscribe-email1").value;

    if (emails == "") {
        document.getElementById('enter-user-email-address').innerHTML = "*Please fill the Email Address field";
    }
    if (emails == "") {
        document.getElementById('enter-user-email-address').style.display = "block";
    } else {
        document.getElementById("enter-user-email-address").style.display = "none";
    }
}