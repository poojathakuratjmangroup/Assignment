function ValidateEmail() {
    var email = document.getElementById("email");
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    } else
        return true;
}

function ValidateMobilenum() {
    var mbnum = document.getElementById("mnum").value;
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (pattern.test(mbnum)) {
        return true;
    } else {
        alert('Please Provoid a valid mobile number');
        return false;
    }

}

function ValidAge() {
    var dob = document.getElementById("dob").value;
    var dobn = new Date(dob);
    var month_diff = Date.now() - dobn.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    if (age < 18 || age > 100) {
        alert("Age-restricted");
        return false;
    }
}


function showdata() {

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementsByName("email");
    var dob = document.getElementsByName("dob").value;
    var mnum = document.getElementsByName("nmum").value;
    var gender = document.getElementsByName("gender");
    const personob = {
        pfirstname: fname,
        plastname: lname,
        pemailadd: email,
        pdob: dob,
        pnum: mnum,
        pgender: gender
    };

    //var person = [];
    //person.push(personob);

    const jsonob = JSON.stringify(personob);
    localStorage.setItem("testJSON", jsonob);
    // Retrieving data:
    let text = localStorage.getItem("testJSON");
    let obj = JSON.parse(text);
    document.getElementById("showdata").innerHTML = obj.pfirstname;

    /*localStorage.setItem('person', person);
    document.getElementById("showdata").innerHTML = localStorage.getItem('person');*/


}

function clearAll() {
    localStorage.clear();
}

function ClearForm() {
    location.reload();
}