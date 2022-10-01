let date = document.getElementById("Date");
let month = document.getElementById("Month");
let year = document.getElementById("Year");
let button = document.getElementById("getDay");
let result = document.getElementById("result");

button.addEventListener("click", () => {
  let getDate = new Date(`${date.value}${month.value}${year.value}`);

  let day = getDate.toString();
  day = day.slice(0, 3);

  result.innerHTML = day;
});
