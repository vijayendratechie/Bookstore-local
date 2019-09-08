$(document).ready(function()
{
	
});

function login_valid()
{
	var email = $("#email").val();
	var password = $("#password").val();


	if(email == "" || password == "")
	{
		alert("Fill all fields");
	}
	else
	{
		$("#submit").click();
	}
}