// HOME PAGE IMAGE SLIDER WITH JQUERY

$(document).ready(function(){
    
    var imageWidth = $('.slideshow-image>a>img').width()
    
    var currSlide = 1;
    var dots = document.getElementsByClassName("dot");

    $('.slideshow-images').css({
        marginLeft: -imageWidth
    })

    dots[currSlide].className += " currentDot";

    $('.prev').click(function(){
        $('.slideshow-images').animate({
            left: +imageWidth
        }, 500, function(){
            $('.slideshow-image:last-child').prependTo('.slideshow-images')
            $('.slideshow-images').css({
                left: 0
            })
        })
        
        currSlide--;
        if(currSlide<0){
            currSlide=2;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        dots[currSlide].className += " currentDot";
    })

    $('.next').click(function(){
        $('.slideshow-images').animate({
            left: -imageWidth
        }, 500, function(){
            $('.slideshow-image:first-child').appendTo('.slideshow-images')
            $('.slideshow-images').css({
                left: 0
            })
        })

        currSlide++;
        if(currSlide>2){
            currSlide=0;
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        dots[currSlide].className += " currentDot";
    })

    $('#dot1').click(function(){
        while(currSlide!=0){
            $('.slideshow-images').animate({
                left: -imageWidth
            }, 400, function(){
                $('.slideshow-image:first-child').appendTo('.slideshow-images')
                $('.slideshow-images').css({
                    left: 0
                })
            })

            currSlide++;
            if(currSlide>2){
                currSlide=0;
            }
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        dots[currSlide].className += " currentDot";
    })

    $('#dot2').click(function(){
        while(currSlide!=1){
            $('.slideshow-images').animate({
                left: -imageWidth
            }, 400, function(){
                $('.slideshow-image:first-child').appendTo('.slideshow-images')
                $('.slideshow-images').css({
                    left: 0
                })
            })

            currSlide++;
            if(currSlide>2){
                currSlide=0;
            }
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        dots[currSlide].className += " currentDot";
    })

    $('#dot3').click(function(){
        while(currSlide!=2){
            $('.slideshow-images').animate({
                left: -imageWidth
            }, 400, function(){
                $('.slideshow-image:first-child').appendTo('.slideshow-images')
                $('.slideshow-images').css({
                    left: 0
                })
            })

            currSlide++;
            if(currSlide>2){
                currSlide=0;
            }
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" currentDot", "");
        }
        dots[currSlide].className += " currentDot";
    })
})


// SCREENSHOTS PAGE

function preview(element){
    document.getElementById("modal-image").src = element.src;
    var modal = document.getElementsByClassName("modal");
    modal[0].style.display = "block";
}


// EVENT PAGE

function getDate(){
    var dt = new Date();
    document.getElementById("currDate").innerHTML = dt.toLocaleDateString();
}

function hideOrShow(eventid, buttonid){
    var event = document.getElementById(eventid);
    var btn = document.getElementById(buttonid);
   
    document.getElementById("onGoingEvent").style.display = "none"
    document.getElementById("comingSoonEvent").style.display = "none"
    document.getElementById("previousEvent").style.display = "none"

    document.getElementById("event-dropbtn1").style.color = "black";
    document.getElementById("event-dropbtn2").style.color = "black";
    document.getElementById("event-dropbtn3").style.color = "black";

    event.style.display = "block";
    btn.style.color = "white";
}


// PLAY NOW (REGISTER) PAGE

function stringContainsNoSpace(str){
    var len = str.length;
    for(var i=0; i<len; i++){
        if(str[i] == ' ') return false;
    }
    return true;
}

function isNum(str){
    var len = str.length-1;
    for (var i = 1; i < len;i++) {
        if(str[i] < '0' || str[i] > '9') return false;
    }
    return true;
}

function validateRegister(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_pass = document.getElementById("confirm_password").value;
    var telp = document.getElementById("telp").value;
    var gen_male = document.getElementById("male").checked;
    var gen_female = document.getElementById("female").checked;
    var address = document.getElementById("address").value;
    var agreement = document.getElementById("agreement").checked;

    var username_err = "";
    var email_err = "";
    var password_err = "";
    var confirm_password_err = "";
    var telp_err = "";
    var gender_err = "";
    var agreement_err = "";

    var containsError=false;

    // username validation
    if (username.length == 0) {
        username_err = "Username cannot be empty!";
        containsError=true;
    }
    else if(!stringContainsNoSpace(username)){
        username_err = "Username cannot contain space!";
        containsError=true;
    }
    else if(username.length<5 || username.length>15){
        username_err = "Username length should be between 5-15 characters";
        containsError=true;
    }

    // email validation
    if(email.length == 0){
        email_err = "Email cannot be empty!";
        containsError=true;
    }

    // password and password confirmation validation
    if(password.length == 0){
        password_err = "Password cannot be empty!";
        containsError=true;
    }
    else if(password.length<8 || password.length>15){
        password_err = "Password length should be between 8-15 characters!";
        containsError=true;
    }

    if(confirm_pass.length == 0){
        confirm_password_err = "Please confirm your password!";
        containsError=true;
    }
    else if(confirm_pass != password){
        confirm_password_err = "Confirm password doesn't match!";
        containsError=true;
    }

    // phone number validation
    if (telp.length == 0){
        telp_err = "Phone number cannot be empty!";
        containsError=true;
    }
    else if(!telp.startsWith('+')){
        telp_err = "Please use international number format!";
        containsError=true;
    }
    else if (telp.length < 11 ){
        telp_err = "Phone number should be at least 11 numbers!";
        containsError=true;
    }
    else if (!isNum(telp)){
        telp_err = "Invalid phone number format";
        containsError=true;
    }

    // radio button and checkbox validation
    if (!gen_male && !gen_female){
        gender_err = "Please select your gender!";
        containsError=true;
    }
    if (!agreement){
        agreement_err = "Please agree the terms and conditions";
        containsError=true;
    }
    

    if(containsError){
        alert('Registration Failed! Please Recheck Your Form.');
    }
    else{
        containsError = false;

        var username_err = "";
        var email_err = "";
        var password_err = "";
        var confirm_password_err = "";
        var telp_err = "";
        var gender_err = "";
        var agreement_err = "";
        
        if(confirm("Are You Sure?")){
            alert("Register success");
            window.location = "home.html";
        }
    }

    document.getElementById("username-err-msg").innerHTML = username_err;
    document.getElementById("email-err-msg").innerHTML = email_err;
    document.getElementById("password-err-msg").innerHTML = password_err;
    document.getElementById("confirm-password-err-msg").innerHTML = confirm_password_err;
    document.getElementById("telp-err-msg").innerHTML = telp_err;
    document.getElementById("gender-err-msg").innerHTML = gender_err;
    document.getElementById("agreement-err-msg").innerHTML = agreement_err;
}


// PLAY NOW (LOGIN) PAGE

function validateLogin(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var err = "";

    if(email.length == 0 || password.length == 0){
        err = "Account does not exist!";
    }

    else{
        err = "";
        alert("Successfully Logged In!");
        window.location = "home.html";
    }

    document.getElementById("login-err-msg").innerHTML = err;
}


// CHARACTERS PAGE

$(document).ready(function(){
    var toggle = true;

    var slideCount = $('.img-character').length;
    var slideWidth = $('.img-character').width();
    var TotalWidth = slideCount * slideWidth;

    var slideCount1 = $('.img-character-blue').length;
    var slideWidth1 = $('.img-character-blue').width();
    var TotalWidth1 = slideCount1 * slideWidth1;

    $('.characters').css({
        width: TotalWidth,
        marginLeft: -slideWidth
    });

    $('#right-red').click(function(){
        $('#red-characters').animate({
            left: -slideWidth
        }, 100, function(){
            $('.red-char-img:first-child').appendTo('#red-characters')
            $('#red-characters').css({
                left: 0
            })
        })
    })

    $('#left-red').click(function(){
        $('#red-characters').animate({
            left: +slideWidth
        }, 100, function(){
            $('.red-char-img:last-child').prependTo('#red-characters')
            $('#red-characters').css({
                left: 0
            })
        })
    })

    $('#right-blue').click(function(){
        $('#blue-characters').animate({
            left: -slideWidth
        }, 100, function(){
            $('.blue-char-img:first-child').appendTo('#blue-characters')
            $('#blue-characters').css({
                left: 0
            })
        })
    })

    $('#left-blue').click(function(){
        $('#blue-characters').animate({
            left: +slideWidth
        }, 100, function(){
            $('.blue-char-img:last-child').prependTo('#blue-characters')
            $('#blue-characters').css({
                left: 0
            })
        })
    })
})

