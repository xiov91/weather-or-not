var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')

var icon = document.querySelector('.icon');
var icon2 = document.querySelector('.icon2');
var icon3 = document.querySelector('.icon3');
var icon4 = document.querySelector('.icon4');
var icon5 = document.querySelector('.icon5');
var icon6 = document.querySelector('.icon6');

var name = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var uv = document.querySelector('.uv');

var foreName1 = document.querySelector('.foreName1');
var foreDesc1 = document.querySelector('.foreDesc1');
var foreTemp1 = document.querySelector('.foreTemp1');
var foreHumid1 = document.querySelector('.foreHumid1');
var foreWind1 = document.querySelector('.foreWind1');
var foreUv1 = document.querySelector('.foreUv1');

var foreName2 = document.querySelector('.foreName2');
var foreDesc2 = document.querySelector('.foreDesc2');
var foreTemp2 = document.querySelector('.foreTemp2');
var foreHumid2 = document.querySelector('.foreHumid2');
var foreWind2 = document.querySelector('.foreWind2');
var foreUv2 = document.querySelector('.foreUv2');

var foreName3 = document.querySelector('.foreName3');
var foreDesc3 = document.querySelector('.foreDesc3');
var foreTemp3 = document.querySelector('.foreTemp3');
var foreHumid3 = document.querySelector('.foreHumid3');
var foreWind3 = document.querySelector('.foreWind3');
var foreUv3 = document.querySelector('.foreUv3');

var foreName4 = document.querySelector('.foreName4');
var foreDesc4 = document.querySelector('.foreDesc4');
var foreTemp4 = document.querySelector('.foreTemp4');
var foreHumid4 = document.querySelector('.foreHumid4');
var foreWind4 = document.querySelector('.foreWind4');
var foreUv4 = document.querySelector('.foreUv4');

var foreName5 = document.querySelector('.foreName5');
var foreDesc5 = document.querySelector('.foreDesc5');
var foreTemp5 = document.querySelector('.foreTemp5');
var foreHumid5 = document.querySelector('.foreHumid5');
var foreWind5 = document.querySelector('.foreWind5');
var foreUv5 = document.querySelector('.foreUv5');

var lat = document.querySelector('.lat');
var lon = document.querySelector('.lon');
const list = document.getElementById(".list");
const elevendArray = [200, 201, 202, 201, 211, 212, 221, 230, 231, 232];
const ninedArray = [300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531];
const tendArray = [500, 501, 502, 503, 504];
const thirteendArray = [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const fiftydArray = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];






function getCurrent() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&units=imperial&appid=2dde1f911405b1e8128db341683f302b')
        .then(response => response.json())
        .then(data => {
            document.getElementById("list").innerHTML += inputValue.value;

            localStorage.setItem("search", "city");
            document.getElementById("list").value = localStorage.getItem("city");
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
                    var humidityValue = data['current']['humidity'];
                    var windValue = data['current']['wind_speed'];
                    var uvValue = data['current']['uvi'];
                    var foreDesc1Value = data['daily']['0']['weather']['0']['description'];
                    var foreTemp1Value = data['daily']['0']['temp']['day'];
                    var foreHumid1Value = data['daily']['0']['humidity'];
                    var foreWind1Value = data['daily']['0']['wind_speed'];
                    var foreUv1Value = data['daily']['0']['uvi'];
                    var foreDesc2Value = data['daily']['1']['weather']['0']['description'];
                    var foreTemp2Value = data['daily']['1']['temp']['day'];
                    var foreHumid2Value = data['daily']['1']['humidity'];
                    var foreWind2Value = data['daily']['1']['wind_speed'];
                    var foreUv2Value = data['daily']['1']['uvi'];
                    var foreDesc3Value = data['daily']['2']['weather']['0']['description'];
                    var foreTemp3Value = data['daily']['2']['temp']['day'];
                    var foreHumid3Value = data['daily']['2']['humidity'];
                    var foreWind3Value = data['daily']['2']['wind_speed'];
                    var foreUv3Value = data['daily']['2']['uvi'];
                    var foreDesc4Value = data['daily']['3']['weather']['0']['description'];
                    var foreTemp4Value = data['daily']['3']['temp']['day'];
                    var foreHumid4Value = data['daily']['3']['humidity'];
                    var foreWind4Value = data['daily']['3']['wind_speed'];
                    var foreUv4Value = data['daily']['3']['uvi'];
                    var foreDesc5Value = data['daily']['4']['weather']['0']['description'];
                    var foreTemp5Value = data['daily']['4']['temp']['day'];
                    var foreHumid5Value = data['daily']['4']['humidity'];
                    var foreWind5Value = data['daily']['4']['wind_speed'];
                    var foreUv5Value = data['daily']['4']['uvi'];
                    var iconValue = data['current']['weather']['0']['icon'];

                    name.innerHTML = "Today"
                    temp.innerHTML = tempValue;
                    desc.innerHTML = descValue;
                    humidity.innerHTML = humidityValue;
                    wind.innerHTML = windValue;
                    uvValue.innerHTML = uvValue;


                    if (iconValue = elevendArray) {
                        icon.innerHTML = "<img src='./assets/images/11d.png>"
                    } else if (iconValue = ninedArray) {
                        icon.innerHTML = "<img src='./assets/images/9d.png>"
                    } else if (iconValue = tendArray) {
                        icon.innerHTML = "<img src='./assets/images/10d.png>"
                    } else if (iconValue = thirteendArray) {
                        icon.innerHTML = "<img src='./assets/images/13d.png>"
                    } else if (iconValue = fiftydArray) {
                        icon.innerHTML = "<img src='./assets/images/50d.png>"
                    } else if (iconValue = "800") {
                        icon.innerHTML = "<img src='./assets/images/01d.png>"
                    } else if (iconValue = "801") {
                        icon.innerHTML = "<img src='./assets/images/02d.png>"
                    } else if (iconValue = "802") {
                        icon.innerHTML = "<img src='./assets/images/03d.png>"
                    } else if (iconValue = "804") {
                        icon.innerHTML = "<img src='./assets/images/04d.png>"
                    } else {
                        icon.innerHTML = "<img src='./assets/images/01n.png>"
                    }
                    

                    foreName1.innerHTML = "Day 1"
                    foreDesc1.innerHTML = foreDesc1Value;
                    foreTemp1.innerHTML = foreTemp1Value;
                    foreHumid1.innerHTML = foreHumid1Value;
                    foreWind1.innerHTML = foreWind1Value;
                    foreUv1.innerHTML = foreUv1Value;

                    foreName2.innerHTML = "Day 2"
                    foreDesc2.innerHTML = foreDesc2Value;
                    foreTemp2.innerHTML = foreTemp2Value;
                    foreHumid2.innerHTML = foreHumid2Value;
                    foreWind2.innerHTML = foreWind2Value;
                    foreUv2.innerHTML = foreUv2Value;


                    foreName3.innerHTML = "Day 3"
                    foreDesc3.innerHTML = foreDesc3Value;
                    foreTemp3.innerHTML = foreTemp3Value;
                    foreHumid3.innerHTML = foreHumid3Value;
                    foreWind3.innerHTML = foreWind3Value;
                    foreUv3.innerHTML = foreUv3Value;


                    foreName4.innerHTML = "Day 4"
                    foreDesc4.innerHTML = foreDesc4Value;
                    foreTemp4.innerHTML = foreTemp4Value;
                    foreHumid4.innerHTML = foreHumid4Value;
                    foreWind4.innerHTML = foreWind4Value;
                    foreUv4.innerHTML = foreUv4Value;


                    foreName5.innerHTML = "Day 5"
                    foreDesc5.innerHTML = foreDesc5Value;
                    foreTemp5.innerHTML = foreTemp5Value;
                    foreHumid5.innerHTML = foreHumid5Value;
                    foreWind5.innerHTML = foreWind5Value;
                    foreUv5.innerHTML = foreUv5Value;

                })
        })
});