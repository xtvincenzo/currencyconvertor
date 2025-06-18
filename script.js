// Supported currencies
const currencies = [
  "USD", "INR", "EUR", "GBP", "AUD", "CAD", "SGD", "JPY", "CNY", "RUB", "ZAR", "CHF", "NZD", "HKD", "BRL", "MXN", "SEK", "NOK", "KRW", "IDR"
];

const exchangeRates = {
  USD: { INR: 83.2, EUR: 0.92, GBP: 0.78, AUD: 1.49, CAD: 1.36, SGD: 1.34, JPY: 157.1, CNY: 7.25, RUB: 91.3, ZAR: 18.1, CHF: 0.89, NZD: 1.62, HKD: 7.85, BRL: 5.4, MXN: 18.1, SEK: 10.5, NOK: 10.7, KRW: 1375, IDR: 16250 },
  INR: { USD: 0.012, EUR: 0.011, GBP: 0.0094, AUD: 0.018, CAD: 0.016, SGD: 0.016, JPY: 1.89, CNY: 0.087, RUB: 1.1, ZAR: 0.22, CHF: 0.011, NZD: 0.019, HKD: 0.094, BRL: 0.065, MXN: 0.22, SEK: 0.13, NOK: 0.12, KRW: 16.5, IDR: 195 },
  EUR: { USD: 1.09, INR: 90.3, GBP: 0.85 },
  GBP: { USD: 1.28, INR: 105.5, EUR: 1.17 },
  // You can continue adding more rates as needed
};

// Populate dropdowns
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");

currencies.forEach(currency => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  option1.value = option1.text = currency;
  option2.value = option2.text = currency;
  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "INR";

function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const resultDiv = document.getElementById("result");

  if (isNaN(amount) || amount <= 0) {
    resultDiv.innerText = "Please enter a valid amount.";
    return;
  }

  if (from === to) {
    resultDiv.innerText = `Converted Amount: ${amount.toFixed(2)} ${to}`;
    return;
  }

  let rate;

  try {
    rate = exchangeRates[from][to];
    if (!rate) {
      throw new Error("Rate not available.");
    }
    const converted = (amount * rate).toFixed(2);
    resultDiv.innerText = `Converted Amount: ${converted} ${to}`;
  } catch (error) {
    resultDiv.innerText = "Exchange rate not available for this pair.";
  }
}
