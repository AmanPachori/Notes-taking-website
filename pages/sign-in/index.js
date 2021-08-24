const body = document.querySelector("body");

const url = "http://localhost:5000";

const signup = document.querySelector(".form-signup");

signup.addEventListener("submit", () => {
  event.preventDefault();
  const email = document.querySelector(".email-signup").value;
  const name = document.querySelector(".entername").value;
  const password = document.querySelector(".password-signup").value;
  const repassword = document.querySelector(".repassword").value;
  console.log(email, name, password, repassword);

  if (password !== repassword) {
    window.alert("password does not match");
    return;
  }

  fetch(`${url}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashbord/dashboard .html";
      } else {
        alert("SignUp Again");
      }
    })
    .catch((err) => {
      alert("Error Signing Up!!! Re-try....");
      console.log(err);
    });
});

const signin = document.querySelector(".form-signIn");

signin.addEventListener("submit", () => {
  event.preventDefault();
  const email = document.querySelector(".email").value;
  const password = document.querySelector(".password").value;

  fetch(`${url}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      const { token } = data;

      if (token) {
        localStorage.setItem("jwt", token);
        location.href = "/pages/dashbord/dashboard .html";
      } else {
        alert("SignIn Again");
      }
    })
    .catch((err) => {
      alert("Error Signing In!!! Re-try....");
      console.log(err);
    });
});
