const temperatureConverter = {
    toCelsius: function(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    },
    
    toFahrenheit: function(celsius) {
        return (celsius * 9 / 5) + 32;
    }
};

function convertTemperature() {
    let choice = prompt("Which conversion would you like to do? (1) Celsius to Fahrenheit (2) Fahrenheit to Celsius");

    if (choice === "1") {
        let celsius = prompt("Enter the temperature in Celsius: ");
        celsius = parseFloat(celsius); 
        let fahrenheit = temperatureConverter.toFahrenheit(celsius);
        alert(`${celsius}°C is equal to ${fahrenheit}°F`);
    } else if (choice === "2") {
        let fahrenheit = prompt("Enter the temperature in Fahrenheit: ");
        fahrenheit = parseFloat(fahrenheit); 
        let celsius = temperatureConverter.toCelsius(fahrenheit);
        alert(`${fahrenheit}°F is equal to ${celsius}°C`);
    } else {
        alert("Invalid choice. Please enter 1 for Celsius to Fahrenheit or 2 for Fahrenheit to Celsius.");
    }
}

convertTemperature();