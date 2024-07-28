"use strict";

const data = [
  {
    category: "Reaction",
    score: 80,
    icon: "./assets/images/icon-reaction.svg",
    bg: "#ff57571a",
    color: "#ff5757",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./assets/images/icon-memory.svg",
    bg: "#ffb01f1a",
    color: "#ffb01f",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./assets/images/icon-verbal.svg",
    bg: "#00bd911a",
    color: "#00bd91",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./assets/images/icon-visual.svg",
    bg: "#1125d41a",
    color: "#1125d4",
  },
];

const container = document.querySelector(".list-container");

data.forEach((d) => {
  const div = document.createElement("div");
  div.className =
    "mt-2 px-3 py-2 rounded-md flex justify-between items-center cursor-pointer";
  div.style.backgroundColor = d.bg;

  const containerLeft = document.createElement("div");
  containerLeft.className = "flex justify-between items-center gap-1";

  const img = document.createElement("img");
  img.src = d.icon;
  img.alt = d.category;

  const category = document.createElement("p");
  category.className = "text-sm font-medium";
  category.textContent = d.category;
  category.style.color = d.color;

  containerLeft.appendChild(img);
  containerLeft.appendChild(category);

  const score = document.createElement("div");

  const span1 = document.createElement("span");
  span1.className = "text-sm font-medium";
  span1.textContent = d.score;

  const span2 = document.createElement("span");
  span2.className = "text-sm opacity-50";
  span2.textContent = " /100";

  score.appendChild(span1);
  score.appendChild(span2);

  div.appendChild(containerLeft);
  div.appendChild(score);

  container.appendChild(div);
});
