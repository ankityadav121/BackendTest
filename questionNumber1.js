function isValidNumber(number) {
	let regex = new RegExp(/^[\s()+-]*([0-9][\s()+-]*){6,20}$/);
	
	if (number == null) {
		return "false";
	}
	if (regex.test(number) == true) {
		return "true";
	}
	else {
		return "false";
	}
}
let str1 = "2124567890";
console.log(isValidNumber(str1));

