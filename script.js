"use strict";

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");
const title = document.querySelectorAll(".activity__title");
const timeframeOpts = document.querySelectorAll(".activity__current-timeframe");
const currentTime = document.querySelectorAll(".activity__current-time");
const previousTime = document.querySelectorAll(".activity__previous-time");
const activityDetails = document.querySelectorAll(".activity__details");
const url = "data.json";
let data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];
updateTimeframe("daily");

function addData(data, timeframe) {
  data.forEach((item, index) => {
    const timeframeData = item.timeframes[timeframe];

    title[index].textContent = item.title;
    currentTime[index].textContent = `${timeframeData.current}hrs`;
    previousTime[index].textContent = `${timeframeData.previous}hrs`;
  });
}

function updateActiveTimeframe(timeframe) {
  daily.setAttribute("aria-pressed", "false");
  weekly.setAttribute("aria-pressed", "false");
  monthly.setAttribute("aria-pressed", "false");

  if (timeframe === "daily") {
    daily.setAttribute("aria-pressed", "true");
  } else if (timeframe === "weekly") {
    weekly.setAttribute("aria-pressed", "true");
  } else if (timeframe === "monthly") {
    monthly.setAttribute("aria-pressed", "true");
  }

  let timeframeText = "";
  if (timeframe === "daily") {
    timeframeText = "Yesterday";
  } else if (timeframe === "weekly") {
    timeframeText = "Last Week";
  } else if (timeframe === "monthly") {
    timeframeText = "Last Month";
  }

  timeframeOpts.forEach((option) => {
    option.textContent = timeframeText;
  });
}

function updateLinkStyles(selectedTimeframe) {
  daily.classList.remove("active-timeframe");
  weekly.classList.remove("active-timeframe");
  monthly.classList.remove("active-timeframe");

  if (selectedTimeframe === "daily") {
    daily.classList.add("active-timeframe");
  } else if (selectedTimeframe === "weekly") {
    weekly.classList.add("active-timeframe");
  } else if (selectedTimeframe === "monthly") {
    monthly.classList.add("active-timeframe");
  }
}

function updateTimeframe(selectedTimeframe) {
  addData(data, selectedTimeframe);
  updateLinkStyles(selectedTimeframe);
  updateActiveTimeframe(selectedTimeframe);
}

daily.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("daily");
});

weekly.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("weekly");
});

monthly.addEventListener("click", function (event) {
  event.preventDefault();
  updateTimeframe("monthly");
});
