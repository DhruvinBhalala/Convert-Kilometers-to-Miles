function Kilometers(){
 
    let km1 = document.getElementById('km1');
    let kilometers = parseFloat(km1.value);
    let conversionFactor = 0.621371;
    let miles = kilometers * conversionFactor;

    let resultElement = document.getElementById('result');
      resultElement.textContent = `${kilometers.toFixed(2)} kilometers is approximately ${miles.toFixed(2)} miles.`;
}

