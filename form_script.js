function submitform() {
    var namecheck, passwordcheck, repasswordcheck, gendercheck, qualificationcheck, mobilecheck, emailcheck;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    var gender;
    var qualification = document.getElementById("qualification").value;
    var mobile = document.getElementById("mobile").value;

    const realmobile = /^[6-9]\d{9}$/gi;

    var email = document.getElementById("email").value;
    const realemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if(document.getElementById("male").checked)
    {
        gender = document.getElementById("male").value;
    }
    else if(document.getElementById("female").checked)
    {
        gender = document.getElementById("female").value;
    }
    else if(document.getElementById("other").checked)
    {
        gender = document.getElementById("other").value;
    }
    else{
        gender = null;
    }


    if (name == "") {
        namecheck = false;
        document.getElementById("namebug").innerHTML = "&#x2716 Please enter valid name."
        document.getElementById("namebug").style.color = "red";
    }
    else {
        namecheck = true;
        document.getElementById("namebug").innerHTML = "&#x2714 Valid name."
        document.getElementById("namebug").style.color = "green";

    }
    if (password == "") {
        passwordcheck = false;
        document.getElementById("passwordbug").innerHTML = "&#x2716 Please enter valid password."
        document.getElementById("passwordbug").style.color = "red";
    }
    else {
        passwordcheck = true;
        document.getElementById("passwordbug").innerHTML = "&#x2714 Valid password."
        document.getElementById("passwordbug").style.color = "green";
    }

    if (repassword == "") {
        repasswordcheck = false;
        document.getElementById("repasswordbug").innerHTML = "&#x2716 Please enter confirm password"
        document.getElementById("repasswordbug").style.color = "red";
    }
    else if (password != repassword) {
        repasswordcheck = false;
        document.getElementById("repasswordbug").innerHTML = "&#x2716 Passwords do not match"
        document.getElementById("repasswordbug").style.color = "red";
    }
    else {
        repasswordcheck = true;
        document.getElementById("repasswordbug").innerHTML = "&#x2714 Passwords match"
        document.getElementById("repasswordbug").style.color = "green";
    }

    if (gender == null) {
        gendercheck = false;
        document.getElementById("genderbug").innerHTML = "&#x2716 Please choose a gender."
        document.getElementById("genderbug").style.color = "red";
    }
    else {
        gendercheck = true;
        document.getElementById("genderbug").innerHTML = "&#x2714 Gender chosen."
        document.getElementById("genderbug").style.color = "green";
    }

    if(qualification == "-1")
    {
        qualificationcheck = false;
        document.getElementById("qualificationbug").innerHTML = "&#x2716 Please choose your qualification."
        document.getElementById("qualificationbug").style.color = "red";
    }
    else
    {
        qualificationcheck = true;
        document.getElementById("qualificationbug").innerHTML = "&#x2714 Qualification chosen."
        document.getElementById("qualificationbug").style.color = "green";
    }

    if(realmobile.test(mobile) == true)
    {
        mobilecheck = true;
        document.getElementById("mobilebug").innerHTML = "&#x2714 Valid mobile no entered."
        document.getElementById("mobilebug").style.color = "green";
    }
    else
    {
        mobilecheck = false;
        document.getElementById("mobilebug").innerHTML = "&#x2716 Inalid mobile no entered."
        document.getElementById("mobilebug").style.color = "red";
    }

    if(realemail.test(email) == true)
    {
        emailcheck = true;
        document.getElementById("emailbug").innerHTML = "&#x2714 Valid email ID entered."
        document.getElementById("emailbug").style.color = "green";
    }
    else
    {
        emailcheck = false;
        document.getElementById("emailbug").innerHTML = "&#x2716 Invalid email ID entered."
        document.getElementById("emailbug").style.color = "red";
    }
    
    if (namecheck == true && passwordcheck == true && repasswordcheck == true && gendercheck == true && qualificationcheck == true && mobilecheck == true && emailcheck == true) {
        return true;
    }
    else {
        return false;
    }
}
function resetform() {
    document.getElementById("namebug").innerHTML = "";
    document.getElementById("passwordbug").innerHTML = "";
    document.getElementById("repasswordbug").innerHTML = "";
    document.getElementById("genderbug").innerHTML = "";
    document.getElementById("qualificationbug").innerHTML = "";
    document.getElementById("mobilebug").innerHTML = "";
    document.getElementById("emailbug").innerHTML = "";
}