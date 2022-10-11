// ## Conversor de temperatura
// Crie um conversor de temperaturas para as escalas em Fahrenheit e Kelvin.

function convertCelsius(degree, scale) {
  if (typeof degree !== 'number') {
    return "O grau deve ser passado em formato de número";
  } else {
    if (scale === "F") {
      const celsiusToFahrenheit = degree * (9 / 5) + 32;
      return `${degree}° Celsius é equivalente a ${celsiusToFahrenheit}° Fahrenheit.`;
    } else if (scale === "K") {
      const celsiusToKelvin = degree + 273.15;
      return `${degree}° Celsius é equivalente a ${celsiusToKelvin}° Kelvin.`;
    } else {
      return "Parâmetro inválido: deve passar F para converter para Fahrenheit ou K para converter para Kelvin.";
    }
  }
}

console.log(convertCelsius(30, "F")); // output : “30° Celsius é equivalente a 86° Farenheit.”
