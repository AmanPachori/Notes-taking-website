const body = document.querySelector("body");

window.addEventListener("load", () => {
  body.classList.add("visible");
});

const signIn = document.querySelector(".sign-in-sign-up");

signIn.addEventListener("click", () => {
  location.href = "pages/sign-in/sign-in.html";
});
