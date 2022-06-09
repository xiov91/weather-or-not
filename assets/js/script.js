var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var lat = document.querySelector('.lat');
var lon = document.querySelector('.lon');

function getCurrent(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=imperial&appid=2dde1f911405b1e8128db341683f302b')       
        .then(response => response.json())
        .then(data => {
        var nameValue = data['name'];
        var tempValue = data['main']['temp'];
        var descValue = data['weather'][0]['description'];
        var lonValue = data['coord']['lon'];
        var latValue = data['coord']['lat'];

        name.innerHTML = nameValue;
        temp.innerHTML = tempValue;
        desc.innerHTML = descValue;
    })
}

button.addEventListener('click', function () {
    getCurrent();
    fetch('https://api.openweathermap.org/geo/1.0/direct?q=' + inputValue.value + '&limit=1&appid=2dde1f911405b1e8128db341683f302b')
        .then(response => response.json())
        .then(data => {
            var latValue = data[0]['lat'];
            var lonValue = data[0]['lon'];

            console.log(latValue, lonValue)
        })
    });

    /* fetch('https://api.openweathermap.org/data/3.0/onecall?lat=' + lanValue.value + '&lon=' + lonValue.value + '&exclude=minutely,hourly,alerts&appid=2dde1f911405b1e8128db341683f302b')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];

            name.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue; */
        