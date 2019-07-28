function validateEmptyValues(){
	var txtEmail=document.getElementsByTagName("txtEmail");
	var txtUser=document.getElementsByTagName("txtUser");
	var txtPass=document.getElementsByTagName("txtPass");

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
