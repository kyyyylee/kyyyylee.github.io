//get today's date number
const d = new Date();
const todayDayNumber = d.getDay();

//array for weekdays from day number
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";

//url for weathermap.org
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id={5781087}&appid={b05473e45b7ac25fe783c15a8fdca69a}&units=imperial";

//fetch
fetch(apiURL)
    .then((response) => response.json())
    .then ((weatherInfo) => {
        console.log(weatherInfo);

        //city name
        document.getElementById('location').innerHTML=weatherInfo.city.name;

        //for loop and if statement
        let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
        for (i=0; i < mylist.length; i++){
            var time = mylist[i].dt_txt;
            if (time.includes('19:00:00')){
                
                //increase day number each loop
                forecastDayNumber += 1;
                if (forecastDayNumber ===7){
                    forecastDayNumber =0;
                }

                //day of the week
                let theDayName = document.createElement("span");
                theDayName.textContent = myweekday[forecastDayNumber];

                //temp
                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo[i].main.temp + "\xB0";

                 //icon
                const iconcode = weatherInfo.list[0].weather[0].icon;
                let iconpath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let weathericon = document.createElement('img');
                weathericon.src = iconpath;

                //append items to day div
                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(weathericon);

                //append day div to HTML
                document.getElementById("weatherForecast").appendChild(theDay);

            }//end if
        }//end for
    }); //end of 'then' fat arrow function

