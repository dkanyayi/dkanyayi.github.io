function required()
{
var empt = document.form1.text1.value;
if (empt === "")
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