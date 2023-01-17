//----------------------------- ДНИ НЕДЕЛИ--------------------------//
let weekExpenses = [];

let dateWeek = [];
let dateNumbers = [];

let moneyAmounts = [];
let moneyAmountNumbers = [];

let incomeInputs = [];
let incomeNumbers = [];
let incomeArray = [];

let expenseInputs = [];
let expenseNumbers = [];
let expenseArray = [];

let spendResults = [];
let balanceResults = [];

// --------------- JSON и структура --------------

let weekDaysJson = `[
  {
      "day": "Monday"},
  {
      "day": "Tuesday"},
  {
      "day": "Wednesday"},
  {
      "day": "Thursday"},
  {
      "day": "Friday"},
  {
      "day": "Saturday"},
  {
      "day": "Sunday"}
]`;

class weekDay {
  constructor(Dayname, numb) {
    this.Dayname = Dayname;
    let weekDaysContent = "";
    weekDaysContent += `<div class="weekDay">
    <div class="date-info box">
        <div class="date"><span class="title">Day:</span>${Dayname.day}</div>
        <div class="date"><input class="date${numb}" name="name" type="date"></div>
    </div>

    <div class="current-amount box">
        <h3 class="title">Current Amount</h3>

        <div>
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <input type="number" id="money${numb}" class="money${numb}" name="name" placeholder="Money in my pocket...">
        </div>
    </div>


    <div class="income box">
        <h3 class="title">Income</h3>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" class="income-input${numb}" name="name" placeholder="The amount of money">
        </div>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" class="income-input${numb}" name="name" placeholder="The amount of money">
        </div>
        <div>
            <img src="./assets/images/income-icon.png" alt="Income">
            <input type="number" class="income-input${numb}" name="name" placeholder="The amount of money">
        </div>
    </div>

    <div class="expense box">
        <h3 class="title">Expense</h3>
        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="food">Food</label>
            <input type="number" id="food" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="transport">Transport</label>
            <input type="number" id="transport" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="clothes">Clothes</label>
            <input type="number" id="clothes" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="appliance">Appliance</label>
            <input type="number" id="appliance" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="hygiene">Hygiene</label>
            <input type="number" id="hygiene" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="leisure">Leisure</label>
            <input type="number" id="leisure" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="utilities">Utilities</label>
            <input type="number" id="utilities" name="name" class="expense-input${numb}">
        </div>

        <div>
            <img src="./assets/images/card-icon.png" alt="Card">
            <label for="another">Another</label>
            <input type="number" id="another" name="name" class="expense-input${numb}">
        </div>

    </div>

    <div class="total-sum box">
        <h3 class="title">Total</h3>
        <div>
            <img src="./assets/images/cash-icon.png" alt="Cash">
            <div>
                <div>Spent: <span id="spent" class="spent${numb}"> ... </span></div>
                <div>Balance: <span id="balance" class="balance${numb}"> ... </span></div>
            </div>
        </div>
    </div>
</div>`;
    document.querySelector(".weekday-info").innerHTML += weekDaysContent;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let weekDays = JSON.parse(weekDaysJson);

  for (let i = 0; i < weekDays.length; i++) {
    new weekDay(weekDays[i], i);

    let dateDay = document.getElementsByClassName(`date${i}`);
    dateWeek.push(dateDay);

    let moneyAmount = document.getElementsByClassName(`money${i}`);
    moneyAmounts.push(moneyAmount);

    let incomeInput = document.getElementsByClassName(`income-input${i}`);
    incomeInputs.push(incomeInput);

    let expenseInput = document.getElementsByClassName(`expense-input${i}`);
    expenseInputs.push(expenseInput);

    let spendResult = document.getElementsByClassName(`spent${i}`);
    spendResults.push(spendResult);

    let balanceResult = document.getElementsByClassName(`balance${i}`);
    balanceResults.push(balanceResult);
  }
  console.log(dateWeek);

  if (localStorage.getItem("date") !== null) {
    dateNumbers = JSON.parse(localStorage.getItem("date"));
    console.log(dateNumbers);

    for (let s = 0; s < dateNumbers.length; s++) {
      dateWeek[s][0].value = dateNumbers[s];
    }
  }

  if (localStorage.getItem("moneyAmounts") !== null) {
    moneyAmountNumbers = JSON.parse(localStorage.getItem("moneyAmounts"));

    for (let s = 0; s < moneyAmountNumbers.length; s++) {
      moneyAmounts[s][0].value = moneyAmountNumbers[s];
    }
  }
  if (localStorage.getItem("incomes") !== null) {
    incomeArray = JSON.parse(localStorage.getItem("incomes"));

    for (let i = 0; i < incomeArray.length; i++) {
      for (let y = 0; y < incomeArray[i].length; y++) {
        incomeInputs[i][y].value = incomeArray[i][y];
      }
    }
  }

  if (localStorage.getItem("expenses") !== null) {
    expenseArray = JSON.parse(localStorage.getItem("expenses"));

    for (let i = 0; i < expenseArray.length; i++) {
      for (let y = 0; y < expenseArray[i].length; y++) {
        expenseInputs[i][y].value = expenseArray[i][y];
      }
    }
  }
  chng();
  function chng() {
    dateNumbers = [];
    moneyAmountNumbers = [];
    incomeArray = [];
    expenseArray = [];
    // цикл для прохода по дням
    for (let i = 0; i < expenseInputs.length; i++) {
      incomeNumbers = [];
      expenseNumbers = [];
      let incomeSum = 0;
      let expenseSum = 0;
      // цикл для прохода по элементам одного дня
      for (let y = 0; y < expenseInputs[i].length; y++) {
        if (y < incomeInputs[i].length) {
          incomeSum += +incomeInputs[i][y].value;
          incomeNumbers.push(+incomeInputs[i][y].value);
        }
        expenseSum += +expenseInputs[i][y].value;
        expenseNumbers.push(+expenseInputs[i][y].value);
      }

      spendResults[i][0].innerHTML = expenseSum;

      balanceResults[i][0].innerHTML =
        +moneyAmounts[i][0].value + incomeSum - expenseSum;

      dateNumbers.push(dateWeek[i][0].value);
      moneyAmountNumbers.push(+moneyAmounts[i][0].value);
      incomeArray.push(incomeNumbers);
      expenseArray.push(expenseNumbers);
    }
    console.log(dateNumbers);
    localStorage.setItem("date", JSON.stringify(dateNumbers));

    localStorage.setItem("moneyAmounts", JSON.stringify(moneyAmountNumbers));

    localStorage.setItem("incomes", JSON.stringify(incomeArray));

    localStorage.setItem("expenses", JSON.stringify(expenseArray));
  }
  let inputs = document.getElementsByName("name");

  for (let input of inputs) {
    input.onchange = () => {
      chng();
    };
  }
});

// Вывод данных в бублик

let totalWeekExpensesBtn = document.querySelector(".total-week-expenses");

totalWeekExpensesBtn.onclick = () => {
  weekExpenses = [];
  for (let i = 0; i < spendResults.length; i++) {
    weekExpenses.push(+spendResults[i][0].innerHTML);
  }
  console.log(weekExpenses);

  // библиотека CHART js Бублик

  const ctx = document.getElementById("myChart").getContext("2d");

  const chartDoughnut = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      datasets: [
        {
          label: "Week expenses",
          backgroundColor: [
            "rgb(189, 18, 138)",
            "rgb(59, 205, 253)",
            "orangered",
            "#fdfd30",
            "rgb(253, 166, 181)",
            "rgb(103, 47, 187)",
            "rgb(125, 248, 209)",
          ],
          data: weekExpenses,
        },
      ],
    },
    options: {},
  });
};

// ------------------ (все дни выводятся в одной структуре)-----------------//

// ----- BudgetTracker-----

import BudgetTracker from "./BudgetTracker.js";
new BudgetTracker("#app");

// --- Изменить шрифт --- //

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

// ------- библиотека INTERACT ------
// const interact = require("interactjs");

// ------- библиотека ANIME-----------
// const anime = require("animejs");

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

let animateRadius = anime({
  targets: ".animateradius",
  background: "#ffffff",
  border: "#5dd176",
  borderRadius: "20px",
  autoplay: false,
});

document.querySelector(".play-border").onclick = animateRadius.restart;

// --- Изменить цветовую тему --- //

document.addEventListener("DOMContentLoaded", function () {
  let body = document.querySelector(".body");
  let colorThemes = document.getElementsByClassName("theme");

  let boxes = document.getElementsByClassName("box");
  let titles = document.getElementsByClassName("title");
  let buttons = document.getElementsByTagName("button");
  let theme;

  if (localStorage.getItem("theme") == null) {
    localStorage.setItem("theme", "Office");
  }

  if (localStorage.getItem("theme") !== null) {
    theme = localStorage.getItem("theme");
    setColorTheme(body, boxes, titles, buttons, theme);
  }

  for (let color of colorThemes) {
    color.addEventListener("click", function () {
      theme = this.value;
      setColorTheme(body, boxes, titles, buttons, theme);
    });
  }
});

function setColorTheme(body, boxes, titles, buttons, theme) {
  localStorage.setItem("theme", theme);
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

// ------------------------ МЕНЮ SETTINGS------------------------

let settings = document.querySelector(".settings");
let settingsCheckbox = document.getElementById("nav-trigger");

settingsCheckbox.addEventListener("click", function () {
  let prefferencies = document.querySelector(".prefferencies");
  {
    if (settingsCheckbox.checked) {
      settings.style.position = "relative";
      settings.style.transition = "left ease 0.9s";
      settings.style.right = "24%";
      prefferencies.style.display = "block";
    } else {
      prefferencies.style.display = "none";
      settings.style.position = "inherit";
      settings.style.transition = "right ease 0.9s";
      settings.style.right = "initial";
    }
  }
});

// ------------- ГАЛЕРЕЯ ----------- //

let images = [
  "assets/images/dollar-on-the-ground.jpg",
  "assets/images/dori.jpg",
  "assets/images/false-money.jpg",
  "assets/images/have-no-money.jpg",
  "assets/images/take-my-money.jpg",
  "assets/images/time-is-money.jpg",
];

let num = 0;

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

nextBtn.addEventListener("click", function () {
  let slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
});

prevBtn.addEventListener("click", function () {
  let slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  slider.src = images[num];
});

// ------------- КАЛЬКУЛЯТОР ------------- //

let op;
let sum = document.querySelector("#sum");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let resultBtn = document.querySelector("#result-button");

sum.addEventListener("click", function () {
  op = "+";
});
minus.addEventListener("click", function () {
  op = "-";
});
multiplication.addEventListener("click", function () {
  op = "*";
});
division.addEventListener("click", function () {
  op = "/";
});

resultBtn.addEventListener("click", function () {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result;

  if (op == "+") {
    result = number1 + number2;
  } else if (op == "-") {
    result = number1 - number2;
  } else if (op == "*") {
    result = number1 * number2;
  } else {
    result = number1 / number2;
  }
  document.getElementById("result").value = result;
});
