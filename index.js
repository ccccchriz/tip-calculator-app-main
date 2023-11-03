// Check the custom radio when the input is clicked
document.getElementById("custom-tip").addEventListener("click", () => {
  document.getElementById("custom").checked = true;
  form.requestSubmit();
});

const form = document.getElementsByClassName("page__input")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const errorInfo = document.getElementsByClassName("page__people--error")[0];
  const errorBorder = document.getElementById("people");

  errorInfo.textContent = "";
  errorBorder.classList.remove("error__border");

  document.getElementsByClassName("page__amount--tip")[0].textContent = "0.00";

  document.getElementsByClassName("page__amount--total")[0].textContent =
    "0.00";

  const price = event.target[0].value;
  const people = event.target.querySelector('input[name="people"]').value;
  let percent = event.target.querySelector('input[name="tip"]:checked');

  // stop if no radio is checked
  if (percent == null) return;

  if (percent.id == "custom")
    percent = event.target.querySelector('input[name="custom-tip"]').value;
  else percent = percent.id;

  // stop if price or people are empty
  if (price == "" || people == "") return console.log("NEED DATA PLEASE!");

  if (people == 0) {
    errorInfo.textContent = "Can't be zero";
    errorBorder.classList.add("error__border");
    return console.log("WHAT DO YOU MEAN 0 PEOPLE ???? // show error");
  }

  const tip = Math.floor((price / people) * (percent / 100) * 100) / 100;

  const total = Math.ceil((price / people) * (1 + percent / 100) * 100) / 100;

  document.getElementsByClassName("page__amount--tip")[0].textContent =
    tip.toFixed(2);

  document.getElementsByClassName("page__amount--total")[0].textContent =
    total.toFixed(2);
});

// auto submit form when user inputs into it
form.addEventListener("input", () => form.requestSubmit());

document
  .getElementsByClassName("page__button--reset")[0]
  .addEventListener("click", () => {
    form.reset();
    form.requestSubmit();
  });
