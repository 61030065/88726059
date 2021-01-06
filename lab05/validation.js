function formValidation() {
    var uid = document.regisform.userid;
    var passid = document.regisform.passid;
    var uname = document.regisform.username;
    var uadd = document.regisform.address;
    var ucountry = document.regisform.country;
    var uzip = document.regisform.zip;
    var uemail = document.regisform.email;
    var usex = document.regisform.sex;

    if (varidateUserID(uid, 5, 12)) {
        if (varidatePassword(passid, 7, 12)) {
            if (allLeter(uname)) {
                if (allphanumertic(uadd)) {
                    if (countryselect(ucountry)) {
                        if (allnumeric(uzip)) {
                            if (validateEmail(uemail)) {
                                if(validateGender(usex)){}
                            }
                        }
                    }
                }
            }
        }
    }
    return false;

}

function validateUserID(uid, min, max){
    var error ="";
    var illegalChars = /\w/; 

    if (uid.value == "") {
        uid.style.blackground= 'Yellow';
        error = "กรุณาป้อน User ID\n";
        alert(error);
        uid.focus();
        return false;
    } else if ((uid.value.length < min)) || ((uid.value.length > max)){
        uid.style.blackground= 'Yellow';
        error = "User ID ต้องมีความยาว " + min + "-" + max + "ตัวอักษร\n";
        alert(error);
        uid.focus();
        return false;
     } else if  (illegalChars.test(uid.value)) {
        uid.style.blackground= 'Yellow';
        error = "User ID มีตัวอักษรที่ไม่ได้รับอนุญาต]n";
        alert(error);
        uid.focus();
        return false;
    }else{
        uid.style.blackground= 'Write';
    }
    return true;
}
function validatePassword(passid,min,max){
    var error = "";
    var illegalChars = /[\W_]/; 

    if (passid.value==""){
        passid.style.blackground = 'Yellow';
        error = "กรุณาป้อน password\n";
        alert(error);
        passid.focus();
        return false;
    }else if ((passid.value.length < 7) || (passid.value.length > 15)) {
        error = "Password ต้องมีความยาว "+ min +"-" + max + "ตัวอักษร\n";
        passid.style.blackground = 'Yellow';
        alert(error);
        passid.focus();
        return false;
    }else if (illegalChars.test(passid.value)) {
        error = "Password มีตัวอักษรที่ไม่ได้รับอนุญาต\n"
        passid.style.blackground = 'Yellow';
        alert(error);
        passid.focus();
        return false;
    }else if ((passid.value.search(/[a-zA-Z]+/)==-1) || passid.value.search(/[0-9]+/) == -1) {
        error = "Password ต้องมีตัวเลขอย่างน้อย 1 ตัว\n";
        passid.style.blackground = 'Yellow';
        alert(error);
        passid.focus();
        return false;
    }else {
        passid.style.blackground = 'White';
    }
    return true;
}

function allLeter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }else {
        alert('Username ต้องเป็นตัวอักษรเท่านั้น');
        uname.focus();
        return false;
    }
}

function allphanumertic(uaddr) {
    var letters = /^[0-9a-zA-Z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }else {
        alert('Username ต้องเป็นตัวอักษรหรือตัวเลขเท่านั้น');
        uname.focus();
        return false;
    }
}

function countryselect(ucountry) {
    if (ucountry.value == 'Default'){
        alert('กรุณาเลือก Country');
        ucountry.focus();
        return false;
    }else {
        return true;
    }
}

function allnumeric(uzip) {
    var numbers = /^[0-9]+$/;
    if (uzip.value.match(numbers)){
        return true;
    }else {
        alert('ZIP Code ต้องเป็นตัวเลขเท่านั้น');
        uzip.focus();
        return false;
    }
}

function validateEmail(uemail){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(uemail.value)){
        alert('Email ไม่ถูกต้อง');
        uemail.focus();
        return false;
    }else {
        return true;
    }
}

function validateGender(usex) {
    var x = 0
    for ( i = 0; i < usex.length; ++i) {
        if (usex[i].checked)
        x++
    }
    if (x == 0) {
        alert('กรุณาเลือกเพศ');
        return false;
    }else {
        alert('Form Successfully Submitted');
    }
} 