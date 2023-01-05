// Изменить шрифт

let font = document.getElementById("font");
let body = document.querySelector(".body");
let h1 = document.querySelector(".h1");
font.addEventListener("change", () => {
  body.style.fontFamily = font.value;
});

// ------- библиотека MOMENT ---------

// Default - dateUser;
const moment = require("moment");

const dateUser = document.querySelector(".date-user");
let nowUser = moment();

moment.locale("en");
dateUser.innerHTML = nowUser.format("lll");

// Russia
const momentTz = require("moment-timezone");

const dateRu = document.querySelector(".date-ru");
require("moment/locale/ru");
dateRu.innerHTML = momentTz.tz("Europe/Moscow").format("LLLL");

// Canada
const dateEn = document.querySelector(".date-en");
require("moment/locale/en-ca");
dateEn.innerHTML = momentTz.tz("America/Toronto").format("LLLL");

// Serbia
const dateSr = document.querySelector(".date-sr");
require("moment/locale/sr");
dateSr.innerHTML = momentTz.tz("Europe/Belgrade").format("LLLL");

// ----- BudgetTracker-----

import BudgetTracker from "./BudgetTracker.js";
new BudgetTracker("#app");

// ------- библиотека INTERACT ------
// const interact = require("interactjs");

// ------- библиотека ANIME-----------
// const anime = require("animejs");

// ДНИ НЕДЕЛИ

// let weekDaysJson = `[
//     {
//     "day": "Tuesday",
//     "date": "05.01.2023"
//     }
// ]`;
// document.addEventListener("DOMContentLoaded", function (event) {
//   let weekDays = JSON.parse(weekDaysJson);
//   console.log(weekDays);

//   //       <p><span>Date:</span> ${weekDay.date}</p>
//   //       <p><span>Current Amount:</span> ${weekDay.summ}</p>
//   //       <p><span>Expense:</span> ${weekDay.expense}</p>
//   //       <p><span>Total:</span> ${weekDay.total}</p>
//   //       <p><span>Card:</span> ${weekDay.card}</p>
//   //       <p><span>Cash:</span>${weekDay.cash}</p>
//   //       </div>`;
//   //   }

//   let weekDaysContent = "";
//   for (let weekDay of weekDays) {
//     weekDaysContent += ``;
//   }
//   document.querySelector(".weekday-info").innerHTML = weekDaysContent;
// });
