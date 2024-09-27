function styleChange() {
  if (email.value.search(emailRule) != -1) {
    console.log(true);
    valid.style.visibility = "hidden";
    email.style.borderColor = "hsl(234, 29%, 20%)";
    email.style.outlineColor = "hsl(234, 29%, 20%)";
    email.style.backgroundColor = "#fff";
    email.style.color = "black";
    btn.forEach((e) => {
      e.removeEventListener("click", btnClick); // 防止重複綁定
      e.addEventListener("click", btnClick);
    });
  } else {
    console.log(false);
    valid.style.visibility = "visible";
    email.style.outlineColor = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(355, 100%, 93%)";
    email.style.color = "hsl(4, 100%, 67%)";

    btn.forEach((e) => {
      e.removeEventListener("click", btnClick); // 移除事件
    });
  }
}

function btnClick() {
  console.log("btn click");
  if (main.classList.contains("visible")) {
    main.classList.remove("visible");
    vertified.classList.add("visible");
  } else {
    main.classList.add("visible");
    vertified.classList.remove("visible");
  }
  form.reset();
}

const main = document.querySelector("main");
const valid = document.querySelector(".valid-txt");
const btn = document.querySelectorAll(".btn");
let form = document.querySelector("#form");
let vertified = document.querySelector(".vertified");
let email = document.querySelector("#email");
let emailRule =
  /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

email.addEventListener("change", styleChange);
email.addEventListener("focus", styleChange);
