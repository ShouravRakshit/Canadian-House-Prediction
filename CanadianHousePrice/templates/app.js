function onClickedEstimatePrice() {
    var bhk = $("input[name='uiBHK']:checked").val();
    var bathrooms = $("input[name='uiBathrooms']:checked").val();
    var location = $("#uiLocations").val();
    var estPrice = $("#uiEstimatedPrice");

    // var url = "http://localhost:5000/predict_home_price"; 
    var url = "/api/predict_home_price";

    $.post(url, {
        bedroom: bhk,
        bathrooms: bathrooms,
        location: location
    }, function(data, status) {
        console.log(data.estimated_price);
        estPrice.html("<h2>" + data.estimated_price.toString() + " </h2>");
        console.log(status);
    });
}



function onPageLoad() {
    console.log("document loaded");
    // var url = "http://localhost:5000/get_location_names"; 
    var url = "/api/get_location_names";
    $.get(url, function(data, status) {
        console.log("got response for get_location_names request");
        if (data) {
            var locations = data.locations;
            var uiLocations = document.getElementById("uiLocations");

            // Clear existing options
            $(uiLocations).empty();

            // Add default "Choose a Location" option
            var defaultOption = new Option("Choose a Location", "", true, true);
            defaultOption.disabled = true;
            $(uiLocations).append(defaultOption);

            // Populate the remaining options with modified text
            for (var i in locations) {
                // Remove "city_" prefix from the location name
                var cityName = locations[i].replace("city_", "");
                // Capitalize the first letter of the city name
                cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
                
                var opt = new Option(cityName, locations[i]);
                $(uiLocations).append(opt);
            }
        }
    });
}

// Add to your app.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-toggle-icon');

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    themeIcon.textContent = savedTheme === 'light' ? '🌞' : '🌙';

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'light' ? '🌞' : '🌙';
    });
});


window.onload = onPageLoad;
