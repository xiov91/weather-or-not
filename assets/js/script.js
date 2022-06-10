var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var foreName1 = document.querySelector('.foreName1');
var foreDesc1 = document.querySelector('.foreDesc1');
var foreTemp1 = document.querySelector('.foreTemp1');
var foreName2 = document.querySelector('.foreName2');
var foreDesc2 = document.querySelector('.foreDesc2');
var foreTemp2 = document.querySelector('.foreTemp2');
var foreName3 = document.querySelector('.foreName3');
var foreDesc3 = document.querySelector('.foreDesc3');
var foreTemp3 = document.querySelector('.foreTemp3');
var foreName4 = document.querySelector('.foreName4');
var foreDesc4 = document.querySelector('.foreDesc4');
var foreTemp4 = document.querySelector('.foreTemp4');
var foreName5 = document.querySelector('.foreName5');
var foreDesc5 = document.querySelector('.foreDesc5');
var foreTemp5 = document.querySelector('.foreTemp5');
var lat = document.querySelector('.lat');
var lon = document.querySelector('.lon');
const list = document.getElementById(".list");





function getCurrent() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=2dde1f911405b1e8128db341683f302b')
        .then(response => response.json())
        .then(data => {
            document.getElementById("list").innerHTML += inputValue.value;
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

            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latValue + '&lon=' + lonValue + '&exclude=hourly,minutely&units=imperial&appid=2dde1f911405b1e8128db341683f302b')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    
                    var tempValue = data['current']['temp'];
                    var descValue = data['current']['weather']['0']['description'];
                    var foreDesc1Value = data['daily']['0']['weather']['0']['description'];
                    var foreTemp1Value = data['daily']['1']['temp']['day'];
                    var foreDesc2Value = data['daily']['1']['weather']['0']['description'];
                    var foreTemp2Value = data['daily']['1']['temp']['day'];
                    var foreDesc3Value = data['daily']['2']['weather']['0']['description'];
                    var foreTemp3Value = data['daily']['2']['temp']['day'];
                    var foreDesc4Value = data['daily']['3']['weather']['0']['description'];
                    var foreTemp4Value = data['daily']['3']['temp']['day'];
                    var foreDesc5Value = data['daily']['4']['weather']['0']['description'];
                    var foreTemp5Value = data['daily']['4']['temp']['day'];

                    name.innerHTML = "Today"
                    temp.innerHTML = tempValue;
                    desc.innerHTML = descValue;
                    foreName1.innerHTML = "Day 1"
                    foreDesc1.innerHTML = foreDesc1Value;
                    foreTemp1.innerHTML = foreTemp1Value;

                    foreName2.innerHTML = "Day 2"
                    foreDesc2.innerHTML = foreDesc2Value;
                    foreTemp2.innerHTML = foreTemp2Value;


                    foreName3.innerHTML = "Day 3"
                    foreDesc3.innerHTML = foreDesc3Value;
                    foreTemp3.innerHTML = foreTemp3Value;


                    foreName4.innerHTML = "Day 4"
                    foreDesc4.innerHTML = foreDesc4Value;
                    foreTemp4.innerHTML = foreTemp4Value;


                    foreName5.innerHTML = "Day 5"
                    foreDesc5.innerHTML = foreDesc5Value;
                    foreTemp5.innerHTML = foreTemp5Value;
                })
        })
});