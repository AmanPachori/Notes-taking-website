const createnoteButton = document.querySelector(".create-note-button");

const url = "https://note-up.herokuapp.com";
const token = localStorage.getItem("jwt");

createnoteButton.addEventListener("click", () => {
  console.log("hello");
  if (token) {
    const heading = document.querySelector(".create-note-heading").value;
    const content = document.querySelector(".create-note-input").value;
    fetch(`${url}/note/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: token,
      },
      body: JSON.stringify({ heading, content }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
          location.href = "../dashbord/dashboard .html";
        }
      })
      .catch((err) => {
        alert("Error Ceating note!!! Re-try....");
        console.log(err);
      });
  }
});
