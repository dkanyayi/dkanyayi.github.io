﻿function required()
{
var empty = document.form1.text1.value;
if (empty =="")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Your Details Have Been Submitted');
return true; 
}
}
