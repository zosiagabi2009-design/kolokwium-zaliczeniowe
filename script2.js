function generate() {
	const a = parseInt(document.getElementById("num1").value);
	const b = parseInt(document.getElementById("num2").value);
	const resultDiv = document.getElementById("result");
	if (a > 0 && b > 0) {
		let table = "<table>";
		for (let i = 1; i <= a; i++) {
			table += "<tr>";
			for (let j = 1; j <= b; j++) {
				table += `<td>${i * j}</td>`;
			}
			table += "</tr>";
		}
		table += "</table>";
		resultDiv.innerHTML = table;
	} else {
		resultDiv.textContent = "Podaj liczby większe od 0";
	}
}