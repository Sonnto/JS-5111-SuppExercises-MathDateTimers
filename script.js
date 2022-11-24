window.onload = function () {
  //1//
  let timeStampElement = document.getElementById("timeStamp");
  let timeStamp = new Date();
  timeStampElement.innerHTML = timeStamp;

  //2//
  let dateStringElement = document.getElementById("dateString");
  let dateString = timeStamp.toDateString();
  dateStringElement.innerHTML = dateString;

  //3//
  let timeStringElement = document.getElementById("timeString");
  let timeString = timeStamp.toTimeString();
  timeStringElement.innerHTML = timeString;

  //4//
  let weekDayElement = document.getElementById("weekDay");
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekDay = daysOfWeek[timeStamp.getDay()];
  weekDayElement.innerHTML = weekDay;

  //5//
  let bDayElement = document.getElementById("bDay");
  let myBDay = new Date(2023, 2, 18, 0, 0);
  bDayElement.innerHTML = myBDay.toDateString();
};
