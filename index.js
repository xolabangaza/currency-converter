// function convert(){}

// let input = document.getElementById("zar");
// let from = document.getElementById("usd");
// let to = document.getElementById("to").value;
// let result = document.getElementById("result");

const apiKey = "c828c095c564852c5aeaefae";

// fetch currency options

fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`)
  .then((response) => response.json())
  .then((data) => {
    const { supported_codes } = data;
    const selectElements = document.querySelectorAll("select");

    supported_codes.forEach((code) => {
      const optionElement = document.createElement("option");
      optionElement.value = code;
      optionElement.text = code;

      selectElements.forEach((select) => {
        select.appendChild(optionElement.cloneNode(true));
      });
    });
  })
  .catch((error) => {
    console.log("Error fetching currency options:", error);
  });


function convert() {
    const amountInput = document.getElementById("money")
    const fromCurrency = document.getElementById("fromCurr").value
    const toCurrency =document.getElementById("toCurr").value
    const resultElement = document.getElementById("result")

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromCurrency}/${toCurrency}`)
    .then(response => response.json())
    .then(data => {
        const {conversion_rate} = data;
        const convertedAmount = (amountInput.value * conversion_rate).toFixed(2);

        resultElement.innerHTML = `${amountInput.value} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
    })

    .catch((error) => {
        console.log("Error fetching exchange rate:", error);
    })
}


const convertBtn = document.getElementById("convertBtn")
convertBtn.addEventListener('click', convert)

