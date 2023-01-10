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

document.querySelector(".play-border").onclick = animateBackground.restart;

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
      case "Office":
        body.classList.remove(
          "skyblue-body",
          "bubble-gum-body",
          "underground-body",
          "violet-body",
          "dark-body",
          "parking-body",
          "wildberry-body"
        );
        body.classList.add("office-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "bubble-gum-box",
            "violet-box",
            "skyblue-box",
            "dark-box",
            "parking-box",
            "wildberry-box"
          );
          box.classList.add("office-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "bubble-gum-title",
              "violet-title",
              "skyblue-title",
              "dark-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("office-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "bubble-gum-button",
              "violet-button",
              "skyblue-button",
              "dark-button",
              "parking-button",
              "wildberry-button"
            );
            button.classList.add("office-button");
          }
        }
        break;

      case "Dark":
        body.classList.remove(
          "skyblue-body",
          "bubble-gum-body",
          "underground-body",
          "violet-body",
          "parking-body",
          "wildberry-body",
          "office-body"
        );
        body.classList.add("dark-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "bubble-gum-box",
            "violet-box",
            "skyblue-box",
            "parking-box",
            "office-body",
            "wildberry-box"
          );
          box.classList.add("dark-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "bubble-gum-title",
              "violet-title",
              "skyblue-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("dark-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "bubble-gum-button",
              "violet-button",
              "skyblue-button",
              "parking-button",
              "office-button",
              "wildberry-button"
            );
            button.classList.add("dark-button");
          }
        }
        break;
      case "Parking":
        body.classList.remove(
          "skyblue-body",
          "bubble-gum-body",
          "underground-body",
          "violet-body",
          "dark-body",
          "office-body",
          "wildberry-body"
        );
        body.classList.add("parking-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "bubble-gum-box",
            "violet-box",
            "skyblue-box",
            "dark-box",
            "office-box",
            "wildberry-box"
          );
          box.classList.add("parking-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "bubble-gum-title",
              "violet-title",
              "skyblue-title",
              "dark-title",
              "office-title",
              "wildberry-title"
            );
            title.classList.add("parking-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "bubble-gum-button",
              "violet-button",
              "skyblue-button",
              "dark-button",
              "office-button",
              "wildberry-button"
            );
            button.classList.add("parking-button");
          }
        }
        break;
      case "Underground":
        body.classList.remove(
          "dark-body",
          "skyblue-body",
          "bubble-gum-body",
          "violet-body",
          "parking-body",
          "wildberry-body",
          "office-body"
        );
        body.classList.add("underground-body");
        for (let box of boxes) {
          box.classList.remove(
            "dark-box",
            "bubble-gum-box",
            "violet-box",
            "skyblue-box",
            "parking-box",
            "wildberry-box"
          );
          box.classList.add("underground-box");
          for (let title of titles) {
            title.classList.remove(
              "dark-title",
              "bubble-gum-title",
              "violet-title",
              "skyblue-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("underground-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "dark-button",
              "bubble-gum-button",
              "violet-button",
              "skyblue-button",
              "parking-button",
              "wildberry-button",
              "office-button"
            );
            button.classList.add("underground-button");
          }
        }
        break;

      case "Skyblue":
        body.classList.remove(
          "dark-body",
          "bubble-gum-body",
          "underground-body",
          "violet-body",
          "parking-body",
          "office-body",
          "wildberry-body"
        );
        body.classList.add("skyblue-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "dark-box",
            "bubble-gum-box",
            "violet-box",
            "parking-box",
            "wildberry-box"
          );
          box.classList.add("skyblue-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "dark-title",
              "bubble-gum-title",
              "violet-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("skyblue-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "dark-button",
              "bubble-gum-button",
              "violet-button",
              "parking-button",
              "office-button",
              "wildberry-button"
            );
            button.classList.add("skyblue-button");
          }
        }
        break;

      case "Bubble Gum":
        body.classList.remove(
          "dark-body",
          "underground-body",
          "skyblue-body",
          "violet-body",
          "parking-body",
          "office-body",
          "wildberry-body"
        );
        body.classList.add("bubble-gum-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "dark-box",
            "violet-box",
            "skyblue-box",
            "parking-box",
            "wildberry-box"
          );
          box.classList.add("bubble-gum-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "dark-title",
              "violet-title",
              "skyblue-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("bubble-gum-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "dark-button",
              "violet-button",
              "skyblue-button",
              "parking-button",
              "office-button",
              "wildberry-button"
            );
            button.classList.add("bubble-gum-button");
          }
        }
        break;
      case "Violet":
        body.classList.remove(
          "dark-body",
          "underground-body",
          "skyblue-body",
          "bubble-gum-body",
          "parking-body",
          "office-body",
          "wildberry-body"
        );
        body.classList.add("violet-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "dark-box",
            "bubble-gum-box",
            "skyblue-box",
            "parking-box",
            "wildberry-box"
          );
          box.classList.add("violet-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "dark-title",
              "bubble-gum-title",
              "skyblue-title",
              "parking-title",
              "wildberry-title"
            );
            title.classList.add("violet-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "dark-button",
              "bubble-gum-button",
              "skyblue-button",
              "parking-button",
              "office-button",
              "wildberry-button"
            );
            button.classList.add("violet-button");
          }
        }
        break;
      case "Wildberry":
        body.classList.remove(
          "dark-body",
          "underground-body",
          "skyblue-body",
          "bubble-gum-body",
          "parking-body",
          "office-body",
          "violet-body"
        );
        body.classList.add("wildberry-body");
        for (let box of boxes) {
          box.classList.remove(
            "underground-box",
            "dark-box",
            "bubble-gum-box",
            "skyblue-box",
            "parking-box",
            "violet-box"
          );
          box.classList.add("wildberry-box");
          for (let title of titles) {
            title.classList.remove(
              "underground-title",
              "dark-title",
              "bubble-gum-title",
              "skyblue-title",
              "parking-title",
              "violet-title"
            );
            title.classList.add("wildberry-title");
          }
          for (let button of buttons) {
            button.classList.remove(
              "underground-button",
              "dark-button",
              "bubble-gum-button",
              "skyblue-button",
              "parking-button",
              "office-button",
              "violet-button"
            );
            button.classList.add("wildberry-button");
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
      }
                        
  ]`;

document.addEventListener("DOMContentLoaded", function (event) {
  let weekDays = JSON.parse(weekDaysJson);
  //console.log(weekDays);

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

    totalSpent.innerHTML = Number(expenses) + " ＄";
    totalBalance.innerHTML =
      Number(money.value) + Number(incomes) - Number(expenses) + " ＄";

    // let moneyArray = [];

    // if (localStorage.getItem("date") !== null) {
    //   moneyArray = JSON.parse(
    //     localStorage.getItem("date", "summ", "income", "expense", "total")
    //   );
    // }
  });
});

let weekDaysJson2 = `[
    {
      "day": "Wednesday",
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
          "day": "Thursday",
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
                  "day": "Saturday",
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
  let weekDays = JSON.parse(weekDaysJson2);
  //console.log(weekDays);

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
  document.querySelector(".weekday-info_2").innerHTML = weekDaysContent;

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

    totalSpent.innerHTML = Number(expenses) + " ＄";
    totalBalance.innerHTML =
      Number(money.value) + Number(incomes) - Number(expenses) + " ＄";

    // let moneyArray = [];

    // if (localStorage.getItem("date") !== null) {
    //   moneyArray = JSON.parse(
    //     localStorage.getItem("date", "summ", "income", "expense", "total")
    //   );
    // }
  });
});

// МЕНЮ SETTINGS

let settings = document.querySelector(".settings");
let settingsCheckbox = document.getElementById("nav-trigger");

settingsCheckbox.addEventListener("click", function () {
  let prefferencies = document.querySelector(".prefferencies");
  {
    if (settingsCheckbox.checked) {
      settings.style.position = "relative";
      settings.style.transition = "left ease 0.5s";
      settings.style.right = "25%";
      prefferencies.style.display = "block";
    } else {
      prefferencies.style.display = "none";
      settings.style.position = "inherit";
      settings.style.transition = "right ease 0.9s";
      settings.style.right = "initial";
    }
  }
});
