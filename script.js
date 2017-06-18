//Prichards Javascript

/*global variables*/
formValidity = true;

/*validate form*/
function validateForm(event) {
	event.preventDefault();
	var formValidity = true;
	var inputElements = document.querySelectorAll("#contactinfo input");
	var elementCount = inputElements.length;
	try {
		for(var i = 0; i < elementCount; i++) {
			if(inputElements[i].value === "") {
				inputElements[i].style.background = "rgb(255,233,233)";
				formValidity = false;
			} else {
				inputElements[i].style.background = "";
			}
		}
		if (formValidity === false) {
			throw "Please complete all fields";
		}
		$("#errorText").hide();
		$("#errorText").html("");
	}
	catch(msg) {
		$("#errorText").show();
		$("#errorText").htmlm(msg)
	}
	if(formValidity === true) {
		$("form").submit();
	}
}

//$("#submitBtn").click(validateForm);













