const logout = document.querySelector(".log-out");
const url = "http://localhost:5000";
logout.addEventListener("click", () => {
  localStorage.setItem("jwt", "");
  location.href = "/";
});

const token = localStorage.getItem("jwt");
const container = document.querySelector(".card-container");

let cdata = [];
const createNotes = (array) => {
  container.innerHTML = "";

  array.forEach((cardb) => {
    const { heading, content } = cardb;
    const id = cardb.noteId;
    const card = document.createElement("div");
    card.classList.add("card");
    card.id = id;
    const innertext = `<div class="card-header"> <div class="card-heading"> ${heading}</div> <div class="edit-note"> <a href="../update-note/index.html?noteId=${id}"><img src="https://img.icons8.com/material-outlined/35/ffffff/edit-image.png"/></a> </div> </div> <div class="card-content"> <div class="content">${content} </div></div>`;
    card.innerHTML = innertext;
    container.appendChild(card);
  });
};

window.addEventListener("load", () => {
  if (token) {
    console.log("hi");
    fetch(`${url}/note/getAllNotes`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        cdata = data.data;
        createNotes(data.data);
      })
      .catch((err) => {
        console.log(err);
        alert("Error Signing Up!!! Re-try....");
        console.log(err);
      });
  }
});

const createnote = document.querySelector(".create-note");

createnote.addEventListener("click", () => {
  location.href = "/pages/create note/index.html";
});
