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

let weekDaysJson = `[
    {
    "day": "Monday",
    "date": "04.01.2023",
    "summ": {
        "card": "input",
        "cash": "input"},
    "income": {
        "input": "input",
        "input": "input",
        "input": "input"},
    "expense":{
        "food": "input",
        "transport": "input",
        "clothes": "input",
        "appliance": "input",
        "hygiene": "input",
        "leisure": "input",
        "utilities": "input",
        "another": "input"},
    "total": "total",
    "card": {
        "spent": "spent",
        "spent": "input",
        "balance": "balance",
        "balance": "input"},
    "cash": {
        "spent": "spent",
        "spent": "input",
        "balance": "balance",
        "balance": "input"}
    }
]`;
document.addEventListener("DOMContentLoaded", function (event) {
  let weekDays = JSON.parse(weekDaysJson);
  console.log(weekDays);

  //       <p><span>Date:</span> ${weekDay.date}</p>
  //       <p><span>Current Amount:</span> ${weekDay.summ}</p>
  //       <p><span>Expense:</span> ${weekDay.expense}</p>
  //       <p><span>Total:</span> ${weekDay.total}</p>
  //       <p><span>Card:</span> ${weekDay.card}</p>
  //       <p><span>Cash:</span>${weekDay.cash}</p>
  //       </div>`;
  //   }

  let weekDaysContent = "";
  for (let weekDay of weekDays) {
    weekDaysContent += `<div class="weekDay">
    <div class="date-info">
        <div class="date"><span>Day:</span>${weekDay.day}</div>
        <div class="date"><span>Date:</span><input type="date"></div>
    </div>

    <div class="current-amount">
        <h3>Current Amount</h3>
        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <input type="number" placeholder="Money on my card">
        </div>
        <div>
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <input type="number" placeholder="Money in my pocket">
        </div>
    </div>

    <div class="income">
        <h3>Income</h3>
        <input type="number" placeholder="The amount of money">
        <input type="number" placeholder="The amount of money">
        <input type="number" placeholder="The amount of money">
    </div>

    <div class="expense">
        <h3>Expense</h3>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="food">Food</label>
                <input type="number" id="food">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="transport">Transport</label>
                <input type="number" id="transport"></div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="clothes">Clothes</label>
                <input type="number" id="clothes">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="appliance">Appliance</label>
                <input type="number" id="appliance">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="hygiene">Hygiene</label>
                <input type="number" id="hygiene">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="leisure">Leisure</label>
                <input type="number" id="leisure">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="utilities">Utilities</label>
                <input type="number" id="utilities">
            </div>
        </div>
        <div>
            <div class='payment'>
                <div>Card<input type="checkbox" value="card"></div>
                <div>Cash<input type="checkbox" value="cash"></div>
            </div>
            <div>
                <label for="another">Another</label>
                <input type="number" id="another">
            </div>
        </div>
    </div>
    <div class="total-sum">
        <h3>Total</h3>
        <div class="total-card">
            <img src="./assets/images/card-icon.png" alt="Card">
            <div>
                <div>
                    <label for="spent">Spent</label>
                    <input type="number" id="spent">
                </div>
                <div>
                    <label for="balance">Balance</label>
                    <input type="number" id="balance">
                </div>
            </div>
        </div>
        <div class="total-cash">
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <div>
                <div>
                    <label for="spent">Spent</label>
                    <input type="number" id="spent">
                </div>
                <div>
                    <label for="balance">Balance</label>
                    <input type="number" id="balance">
                </div>
            </div>
        </div>
    </div>
</div>`;
  }
  document.querySelector(".weekday-info").innerHTML = weekDaysContent;
});
