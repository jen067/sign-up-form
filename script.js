function styleChange() {
  if (this.value != /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) {
    valid.style.visibility = "visible";
    email.style.outlineColor = "hsl(4, 100%, 67%)";
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(355, 100%, 93%)";
    email.style.color = "hsl(4, 100%, 67%)";
  } else {
    valid.style.visibility = "hidden";
  }
}

const valid = document.querySelector(".valid-txt");
let email = document.querySelector("#email");

email.addEventListener("change", styleChange);
email.addEventListener("focus", styleChange);
