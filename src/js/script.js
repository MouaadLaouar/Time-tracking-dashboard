const data = [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]

const daily_btn = document.getElementById("daily-btn");
const weekly_btn = document.getElementById("weekly-btn");
const monthly_btn = document.getElementById("monthly-btn");

//function

const daily = () => {
  //work
  document.getElementById("cureentwork").textContent = data[0].timeframes.daily.current;  
  document.getElementById("previouswork").textContent = data[0].timeframes.daily.previous;
  //Play
  document.getElementById("cureentPlay").textContent = data[1].timeframes.daily.current;
  document.getElementById("previousPlay").textContent = data[1].timeframes.daily.previous;
  //Study 
  document.getElementById("cureentStudy").textContent= data[2].timeframes.daily.current;
  document.getElementById("previousStudy").textContent = data[2].timeframes.daily.previous;
  //Exercise
  document.getElementById("cureentExercise").textContent = data[3].timeframes.daily.current;
  document.getElementById("previousExercise").textContent = data[3].timeframes.daily.previous;
  //Social
  document.getElementById("cureentSocial").textContent = data[4].timeframes.daily.current;
  document.getElementById("previousSocial").textContent = data[4].timeframes.daily.previous;
  //Self Care
  document.getElementById("cureentSelf").textContent = data[5].timeframes.daily.current;
  document.getElementById("previousSelf").textContent = data[5].timeframes.daily.previous;

}

const weekly = () => {
  //work
  document.getElementById("cureentwork").textContent = data[0].timeframes.weekly.current;
  document.getElementById("previouswork").textContent = data[0].timeframes.weekly.previous;
  //Play
  document.getElementById("cureentPlay").textContent = data[1].timeframes.weekly.current;
  document.getElementById("previousPlay").textContent = data[1].timeframes.weekly.previous;
  //Study 
  document.getElementById("cureentStudy").textContent = data[2].timeframes.weekly.current;
  document.getElementById("previousStudy").textContent = data[2].timeframes.weekly.previous;
  //Exercise
  document.getElementById("cureentExercise").textContent = data[3].timeframes.weekly.current;
  document.getElementById("previousExercise").textContent = data[3].timeframes.weekly.previous;
  //Social
  document.getElementById("cureentSocial").textContent = data[4].timeframes.weekly.current;
  document.getElementById("previousSocial").textContent = data[4].timeframes.weekly.previous;
  //Self Care
  document.getElementById("cureentSelf").textContent = data[5].timeframes.weekly.current;
  document.getElementById("previousSelf").textContent = data[5].timeframes.weekly.previous;
}

const monthly = () => {
  //work
  document.getElementById("cureentwork").textContent = data[0].timeframes.monthly.current;
  document.getElementById("previouswork").textContent = data[0].timeframes.monthly.previous;
  //Play
  document.getElementById("cureentPlay").textContent = data[1].timeframes.monthly.current;
  document.getElementById("previousPlay").textContent = data[1].timeframes.monthly.previous;
  //Study 
  document.getElementById("cureentStudy").textContent = data[2].timeframes.monthly.current;
  document.getElementById("previousStudy").textContent = data[2].timeframes.monthly.previous;
  //Exercise
  document.getElementById("cureentExercise").textContent = data[3].timeframes.monthly.current;
  document.getElementById("previousExercise").textContent = data[3].timeframes.monthly.previous;
  //Social
  document.getElementById("cureentSocial").textContent = data[4].timeframes.monthly.current;
  document.getElementById("previousSocial").textContent = data[4].timeframes.monthly.previous;
  //Self Care
  document.getElementById("cureentSelf").textContent = data[5].timeframes.monthly.current;
  document.getElementById("previousSelf").textContent = data[5].timeframes.monthly.previous;
}

daily_btn.addEventListener('click', daily);
weekly_btn.addEventListener('click', weekly);
monthly_btn.addEventListener('click', monthly);






