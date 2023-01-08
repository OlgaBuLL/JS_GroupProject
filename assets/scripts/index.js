// Изменить шрифт

document.addEventListener("DOMContentLoaded", function () {
  let font = document.getElementById("font");
  let body = document.querySelector(".body");

  if (localStorage.getItem("font") !== null) {
    font.value = localStorage.getItem("font");
    body.style.fontFamily = font.value;
  }

  font.addEventListener("change", () => {
    body.style.fontFamily = font.value;
    localStorage.setItem("font", font.value);
  });
});

// ----- BudgetTracker-----

import BudgetTracker from "./BudgetTracker.js";
new BudgetTracker("#app");

// ------- библиотека INTERACT ------
// const interact = require("interactjs");

// ------- библиотека ANIME-----------
//const anime = require("animejs");

anime({
  targets: "div",
  scale: [
    {
      value: 0.1,
      easing: "easeOutSine",
      duration: 500,
    },
    {
      value: 1,
      easing: "easeInOutQuad",
      duration: 1200,
    },
  ],
  delay: anime.stagger(200, {
    grid: [14, 5],
    from: "center",
  }),
});

var animateBackground = anime({
  targets: ".animatebackground",
  backgroundColor: "#ffffff",
  borderColor: "#5dd176",
  autoplay: false,
});

document.querySelector(".play-background").onclick = animateBackground.restart;

// Изменить цветовю тему
let body = document.querySelector(".body");
let colorThemes = document.getElementsByClassName("theme");
let boxes = document.getElementsByClassName("box");
let titles = document.getElementsByClassName("title");
let buttons = document.getElementsByTagName("button");
console.log(buttons);

for (let color of colorThemes) {
  color.addEventListener("click", function () {
    let theme = this.value;
    console.log(theme);

    switch (theme) {
      case "Dark":
        body.classList.remove(
          "skyblue",
          "bubble-gum-body",
          "underground-body",
          "bubble-gum-body"
        );
        body.classList.add("dark-body");
        for (let box of boxes) {
          box.classList.remove("underground-box", "bubble-gum-box");
          box.classList.add("dark-box");
          for (let title of titles) {
            title.classList.remove("underground-title", "bubble-gum-title");
            title.classList.add("dark-title");
          }
          for (let button of buttons) {
            button.classList.remove("underground-button", "bubble-gum-button");
            button.classList.add("dark-button");
          }
        }
        break;

      case "Underground":
        body.classList.remove("dark-body", "skyblue", "bubble-gum-body");
        body.classList.add("underground-body");
        for (let box of boxes) {
          box.classList.remove("dark-box", "bubble-gum-box");
          box.classList.add("underground-box");
          for (let title of titles) {
            title.classList.remove("dark-title", "bubble-gum-title");
            title.classList.add("underground-title");
          }
          for (let button of buttons) {
            button.classList.remove("dark-button", "bubble-gum-button");
            button.classList.add("underground-button");
          }
        }
        break;

      case "Skyblue":
        body.classList.remove(
          "dark-body",
          "bubble-gum-body",
          "underground-body"
        );
        body.classList.add("skyblue");
        for (let box of boxes) {
          box.classList.remove("underground-box", "dark-box", "bubble-gum-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "dark-title",
              "bubble-gum-title"
            );
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "dark-button",
              "bubble-gum-button"
            );
          }
        }
        break;

      case "Bubble Gum":
        body.classList.remove("dark-body", "underground-body", "skyblue");
        body.classList.add("bubble-gum-body");
        for (let box of boxes) {
          box.classList.remove("underground-box", "dark-box");
          box.classList.add("bubble-gum-box");
          for (let title of titles) {
            title.classList.remove("underground-title", "dark-title");
            title.classList.add("bubble-gum-title");
          }
          for (let button of buttons) {
            button.classList.remove("underground-button", "dark-button");
            button.classList.add("bubble-gum-button");
          }
        }
        break;
    }
  });
}
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

// ДНИ НЕДЕЛИ

let weekDaysJson = `[
    {
        "day": "Monday",
        "date": "input",
        "summ": "input",
        "income": ["input", "input", "input"],
        "expense": {
            "food": "input",
            "transport": "input",
            "clothes": "input",
            "appliance": "input",
            "hygiene": "input",
            "leisure": "input",
            "utilities": "input",
            "another": "input"},
        "total": {
              "spent": "input",
              "balance": "input"}
        },
    {
      "day": "Tuesday",
      "date": "input",
      "summ": "input",
      "income": ["input", "input", "input"],
      "expense": {
          "food": "input",
          "transport": "input",
          "clothes": "input",
          "appliance": "input",
          "hygiene": "input",
          "leisure": "input",
          "utilities": "input",
          "another": "input"},
      "total": {
            "spent": "input",
            "balance": "input"}
      },
      {
        "day": "Wendesday",
        "date": "input",
        "summ": "input",
        "income": ["input", "input", "input"],
        "expense": {
            "food": "input",
            "transport": "input",
            "clothes": "input",
            "appliance": "input",
            "hygiene": "input",
            "leisure": "input",
            "utilities": "input",
            "another": "input"},
        "total": {
              "spent": "input",
              "balance": "input"}
        },
        {
            "day": "Tuersday",
            "date": "input",
            "summ": "input",
            "income": ["input", "input", "input"],
            "expense": {
                "food": "input",
                "transport": "input",
                "clothes": "input",
                "appliance": "input",
                "hygiene": "input",
                "leisure": "input",
                "utilities": "input",
                "another": "input"},
            "total": {
                  "spent": "input",
                  "balance": "input"}
            },
            {
                "day": "Friday",
                "date": "input",
                "summ": "input",
                "income": ["input", "input", "input"],
                "expense": {
                    "food": "input",
                    "transport": "input",
                    "clothes": "input",
                    "appliance": "input",
                    "hygiene": "input",
                    "leisure": "input",
                    "utilities": "input",
                    "another": "input"},
                "total": {
                      "spent": "input",
                      "balance": "input"}
                },
                {
                    "day": "Subbsday",
                    "date": "input",
                    "summ": "input",
                    "income": ["input", "input", "input"],
                    "expense": {
                        "food": "input",
                        "transport": "input",
                        "clothes": "input",
                        "appliance": "input",
                        "hygiene": "input",
                        "leisure": "input",
                        "utilities": "input",
                        "another": "input"},
                    "total": {
                          "spent": "input",
                          "balance": "input"}
                    },
                    {
                        "day": "Sunday",
                        "date": "input",
                        "summ": "input",
                        "income": ["input", "input", "input"],
                        "expense": {
                            "food": "input",
                            "transport": "input",
                            "clothes": "input",
                            "appliance": "input",
                            "hygiene": "input",
                            "leisure": "input",
                            "utilities": "input",
                            "another": "input"},
                        "total": {
                              "spent": "input",
                              "balance": "input"}
                        }
  ]`;

document.addEventListener("DOMContentLoaded", function (event) {
  let weekDays = JSON.parse(weekDaysJson);
  console.log(weekDays);

  let weekDaysContent = "";
  for (let weekDay of weekDays) {
    weekDaysContent += `<div class="weekDay">
    <div class="date-info box">
        <div class="date"><span class="title">Day:</span>${weekDay.day}</div>
        <div class="date"><input id="date" type="date"></div>
    </div>

    <div class="current-amount box">
        <h3 class="title">Current Amount</h3>

        <div>
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <input type="number" id="money" placeholder="Money in my pocket...">
        </div>
    </div>

    <div class="income box">
        <h3 class="title">Income</h3>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" id="income1" class="income-input" placeholder="The amount of money">
        </div>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" id="income2" class="income-input" placeholder="The amount of money">
        </div>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" id="income3" class="income-input" placeholder="The amount of money">
        </div>
    </div>

    <div class="expense box">
        <h3 class="title">Expense</h3>
        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Food</label>
            <input type="number" id="food" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Transport</label>
            <input type="number" id="transport" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Clothes</label>
            <input type="number" id="clothes" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Appliance</label>
            <input type="number" id="appliance" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Hygiene</label>
            <input type="number" id="hygiene" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Leisure</label>
            <input type="number" id="leisure" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Utilities</label>
            <input type="number" id="utilities" class="expense-input">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Another</label>
            <input type="number" id="another" class="expense-input">
        </div>
        <button id="count">Count</button>

    </div>

    <div class="total-sum box">
        <h3 class="title">Total</h3>
        <div>
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <div>
                <div>Spent: <span id="spent"> ... </span></div>
                <div>Balance: <span id="balance"> ... </span></div>
            </div>
        </div>
    </div>
</div>`;
  }
  document.querySelector(".weekday-info").innerHTML = weekDaysContent;

  let countBtn = document.querySelector("#count");

  countBtn.addEventListener("click", () => {
    let date = document.querySelector("#date");
    console.log(date.value);
    let money = document.querySelector("#money");

    let income = document.getElementsByClassName("income-input");
    let incomes = 0;
    for (let i = 0; i < income.length; i++) {
      incomes += +income[i].value;
    }

    let expense = document.getElementsByClassName("expense-input");
    let expenses = 0;
    for (let i = 0; i < expense.length; i++) {
      expenses += +expense[i].value;
      console.log(expense[i].value);
    }

    let totalSpent = document.querySelector("#spent");
    let totalBalance = document.querySelector("#balance");

    totalSpent.innerHTML = +expenses + " ＄";
    totalBalance.innerHTML = +money.value + +incomes - +expenses + " ＄";

    // let moneyArray = [];

    // if (localStorage.getItem("date") !== null) {
    //   moneyArray = JSON.parse(
    //     localStorage.getItem("date", "summ", "income", "expense", "total")
    //   );
    // }
  });
});
