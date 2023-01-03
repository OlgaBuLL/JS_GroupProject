// ------- библиотека MOMENT ---------
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

// Default-Serbia
const moment = require("moment");
require("moment/locale/sr");

const dateRS = document.querySelector(".default-serbia");
let nowRS = moment();

moment.locale("sr");
dateRS.innerHTML = nowRS.format("LLLL");

// ------- библиотека INTERACT ------

// const interact = require("interactjs");

// ------------- ANIME------------------
// const anime = require("animejs");

import BudgetTracker from "./BudgetTracker.js";
// import { BudgetTracker } from "./BudgetTracker.js";
new BudgetTracker("#app");
