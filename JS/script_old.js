function validateEmptyValues(){
	var txtEmail=document.getElementById("txtEmail").value;
	var txtUser=document.getElementById("txtUser").value;
	var txtPass=document.getElementById("txtPass").value;

	var appendError="";
	if(txtEmail==""){
		appendError="email";
	}
	if(txtUser==""){
		if(appendError!=""){
			appendError=appendError+"and";
		}
		appendError=appendError+"un";
	}
	if(txtPass==""){
		if(appendError!=""){
			appendError=appendError+"and";
		}
		appendError=appendError+"Password";
	
}
if(appendError!=""){
	appendError=appendError+"can not be empty.";
	alert(appendError);
	return false;
}
else{
return true;
}
}
