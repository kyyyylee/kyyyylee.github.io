//get today's date number
const d = new Date();
const todayDayNumber = d.getDay();

//array for weekdays from day number
const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

//url for weathermap.org
const apiURL = "//api.openweathermap.org/data/2.5/forecast?id=5781087&appid=b05473e45b7ac25fe783c15a8fdca69a&units=imperial";

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
        for (i = 0;i < mylist.length; i++){
            let time = mylist[i].dt_txt;
            if (time.includes('18:00:00')){

                 //increase day number each loop
                 forecastDayNumber += 1;
                 if (forecastDayNumber ===7){ forecastDayNumber =0;}

                //day of the week
                let theDayName = document.createElement("span");
                theDayName.textContent = weekday[forecastDayNumber];

                //temp
                let theTemp = document.createElement("p");
                theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

                 //icon
                let iconcode = weatherInfo.list[i].weather[0].icon;
                let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
                let theIcon = document.createElement('img');
                theIcon.src = iconPath;

                //append items to day div
                let theDay = document.createElement("div");
                theDay.appendChild(theDayName);
                theDay.appendChild(theTemp);
                theDay.appendChild(theIcon);

                //append day div to HTML
                document.getElementById("weatherforecast").appendChild(theDay);

            }//end if
        }//end for
    }); //end of 'then' fat arrow function

