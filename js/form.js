var div = document.getElementById('form_sample');
var crForm = document.createElement('form');
crForm.setAttribute('action','');
crForm.setAttribute('name','myForm');
crForm.setAttribute('method','post');
crForm.setAttribute('onsubmit','return validateForm()');
div.appendChild(crForm);
//------------------------
// Create contact form
var heading2 = document.createElement('h3');
heading2.innerHTML = 'Contact Form';
crForm.appendChild(heading2);
//------------------------
var line = document.createElement('hr');
crForm.appendChild(line);
//-------------------------
var linebr = document.createElement('br');
crForm.appendChild(linebr);
//-------------------------------
var namelb = document.createElement('label');
namelb.innerHTML = 'Name:';
crForm.appendChild(namelb);
//--------------------------------
var nametxt = document.createElement('input');
nametxt.setAttribute('type','text');
nametxt.setAttribute('name','dname');
crForm.appendChild(nametxt);
//-----------------------------------
var linebr = document.createElement('br');
crForm.appendChild(linebr);
var linebr = document.createElement('br');
crForm.appendChild(linebr);
//-----------------------------------
var emaillb = document.createElement('label');
emaillb.innerHTML = 'Email:';
crForm.appendChild(emaillb);
//------------------------------------
var emailtxt = document.createElement('input');
emailtxt.setAttribute('type','text');
emailtxt.setAttribute('name','demail');
crForm.appendChild(emailtxt);
//------------------------------------
var linebr = document.createElement('br');
crForm.appendChild(linebr);
var linebr = document.createElement('br');
crForm.appendChild(linebr);
//-----------------------------------
var passlb = document.createElement('label');
passlb.innerHTML = 'Pass:'
crForm.appendChild(passlb);
//-----------------------------------
var pass = document.createElement('input');
pass.setAttribute('type','password');
pass.setAttribute('name','dpass');
crForm.appendChild(pass);
//----------------------------------
var linebr = document.createElement('br');
crForm.appendChild(linebr);
var linebr = document.createElement('br');
crForm.appendChild(linebr);
//-----------------------------------
var rtpasslb = document.createElement('label');
rtpasslb.innerHTML = 'Return Password:';
crForm.appendChild(rtpasslb);
//-----------------------------------
var rtpass = document.createElement('input');
rtpass.setAttribute('type','password');
rtpass.setAttribute('name','drtpass');
crForm.appendChild(rtpass);
//----------------------------------
var linebr = document.createElement('br');
crForm.appendChild(linebr);
var linebr = document.createElement('br');
crForm.appendChild(linebr);
//-----------------------------------
var genderlb = document.createElement('label');
genderlb.innerHTML = 'Gender:'
crForm.appendChild(genderlb);
//-----------------------------------
var rdoMale = document.createElement('input');
rdoMale.setAttribute('type','radio');
rdoMale.setAttribute('name','gender');
rdoMale.setAttribute('id','idmale');
rdoMale.setAttribute('value','Male');
rdoMale.innerHTML = 'Male';
crForm.appendChild(rdoMale);
//------------------------------------
var malelb = document.createElement('label');
malelb.innerHTML = 'Male:'
crForm.appendChild(malelb);
//------------------------------------
var rdoFemale = document.createElement('input');
rdoFemale.setAttribute('type','radio');
rdoFemale.setAttribute('name','gender');
rdoFemale.setAttribute('id','idfemale');
rdoFemale.setAttribute('value','female');
rdoFemale.innerHTML = 'Female';
crForm.appendChild(rdoFemale);
//------------------------------------
var femalelb = document.createElement('label');
femalelb.innerHTML = 'Female:'
crForm.appendChild(femalelb);
//------------------------------------
var linebreak = document.createElement('br');
crForm.appendChild(linebreak);
//------------------------------------
var linebreak = document.createElement('br');
crForm.appendChild(linebreak);
//------------------------------------
var line = document.createElement('hr');
crForm.appendChild(line);
//------------------------------------
var submitelement = document.createElement('input'); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
crForm.appendChild(submitelement);
//---------------------------------------
function validateForm() {
    var name = document.forms["myForm"]["dname"].value;
    //----------------------------------------------------
    var email = document.forms["myForm"]["demail"].value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    //--------------------------------------------------
    var pass = document.forms["myForm"]["dpass"].value;
    var rtpass = document.forms["myForm"]["drtpass"].value;
    var passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    console.log(pass.match(passw));
    //---------------------------------------------------
    var male = document.getElementById('idmale').checked;
    var female = document.getElementById('idfemale').checked;
    console.log('aff: '+ male);
    //---------------------------------------------------
    if (name == null || name == ""||email == null || email == ""||pass == null || pass == ""||rtpass == null || rtpass == "") {
        alert("Please enter enough");
        return false;
    }else if(atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length){
        alert("Not a valid e-mail address");
        return false;
    }else if(!pass.match(passw)|| pass !== rtpass){
        alert("Not a valid password or return password");
        return false;
    }else if(!pass.match(passw)|| pass !== rtpass){
        alert("Not a valid password or return password");
        return false;
    }else if((male === false)&&(female===false)){
        alert("Not a check gender");
        return false;
    }else{
        var info = document.getElementById('info').innerHTML = name;

        //alert("Submit name success");
    }
}

