function generate() {
	const a = parseInt(document.getElementById("num1").value);
	const b = parseInt(document.getElementById("num2").value);
	const resultDiv = document.getElementById("result");
	if (a > 0 && b > 0) {
		resultDiv.textContent = a * b;
	} else {
		resultDiv.textContent = "Podaj liczby większe od 0";
	}
}	