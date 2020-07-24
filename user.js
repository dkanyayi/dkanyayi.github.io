function userReg()
{  
var uname = document.getElementById("uname");
var cnumber = document.getElementById("cnum");
var cnumberxx=document.getElementById("cnum").value;
var mail = document.getElementById("email");
mailxx =document.getElementById("email").value;
var mailx = /^([a-z 0-9\.-]+)@([a-z 0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
var cnumberx =/^[0][7]\d{8}$/;
var qury = document.getElementById("quiry");

if (uname.value.trim() =="")
{
alert("Name cannot be blank");
uname.style.border="solid 3px red";
document.getElementById("lbluser1").style.visibility = "visible";
return false;  
}
// validating contact and displaying error message
else if(cnumber.value.trim() =="")
{
alert("Contact number cannnot be blank");
cnumber.style.border = "solid 3px red ";
document.getElementById("lbluser3").style.visibility = "visible";
return false;
}
else if(cnumberx.test(cnumberxx) == false)
{
    alert("Incorrect contact number format eg 0799999999");
    cnumber.style.border = "solid 3px red ";
    document.getElementById("lbluser3").style.visibility = "visible";
    return false;
}


// validating email textbox and displaying error msg
else if( email.value.trim() == "")
{
alert("email cannot be blank");
mail.style.border="solid 3px red";
document.getElementById("lbluser2").style.visibility = "visible";
return false;
}
else if(mailx.test(mailxx) == false)
{
  alert("Incorrect email format example 123@web.com"); 
  mail.style.border="solid 3px red";
document.getElementById("lbluser2").style.visibility = "visible";
  return false;

}
else if(qury.value.trim() =="")
{
alert("Please add your quiry");
qury.style.border="solid 3px red";
document.getElementById("lbluser4").style.visibility = "visible";
return false;
}
else{
    alert("Submission Successful");
    document.getElementById("lbluser4").style.visibility = "hidden";
    return true;
}
}