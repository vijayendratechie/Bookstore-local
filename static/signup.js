function signup_valid()
{
	name = $("#name").val();
	email = $("#email").val();
	password = $("#password").val();
	
	if(name == "" || email == "" || password == "")
	{
		alert("Fill required fields");
	}
	else
	{
		$("#submit").click();				
	}	
};

