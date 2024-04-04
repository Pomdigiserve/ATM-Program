function calculate() {
  const dom_1000 = document.getElementById("1000");
  const dom_500 = document.getElementById("500");
  const dom_100 = document.getElementById("100");
	const number_value = parseInt(document.getElementById("input").value);
  
  // UPDATE here !!!
  let val1000 = 0;
  let val500 = 0;
  let val100 = 0;
  
  let remainingAmount = number_value;

  while (remainingAmount >= 1000) {
    val1000 = Math.floor(remainingAmount / 1000);
    remainingAmount -= val1000 * 1000;
  } if (remainingAmount >= 500) {
    val500 = Math.floor(remainingAmount / 500);
    remainingAmount -= val500 * 500;
  } if (remainingAmount >= 100) {
    val100 = Math.floor(remainingAmount / 100);
    remainingAmount -= val100 * 100;
  }

	dom_1000.textContent = val1000;
  dom_500.textContent = val500;
  dom_100.textContent = val100;
}

calculate()