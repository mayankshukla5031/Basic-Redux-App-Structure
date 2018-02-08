//email value validation
export function _isValidEmail(email) {
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
}

//interger value validation
export function _isValidInteger: function(value){
	return /^\d+$/.test(value);
}

//number field validation, it will allow both int and float values
export function _isNumeric(value) {
  	return !isNaN(parseFloat(value)) && isFinite(value);
}

//alphanumeric value validation, it will aloow both int, float, and characters also
export function _isAlphaNumeric(value){
	return /^[A-Za-z0-9]+$/i.test(value);
}