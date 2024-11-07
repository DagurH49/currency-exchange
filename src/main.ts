async function fetchExchangeRates() {
  const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
  const data = await response.json();
  return data.rates;
}

async function displayExchangeRates() {
  const rates = await fetchExchangeRates();
  const ratesContainer = document.getElementById('rates');
  if (ratesContainer) {
    ratesContainer.innerHTML = Object.entries(rates)
      .map(([currency, rate]) => `<p>${currency}: ${rate}</p>`)
      .join('');
  }
}

displayExchangeRates();