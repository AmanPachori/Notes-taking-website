const container = document.querySelector(".card-container");

const data = [
  { heading: "Heading1", content: "content", id: 1 },
  { heading: "Heading2", content: "content", id: 2 },
  { heading: "Heading3", content: "content", id: 3 },
];
const createNotes = (array) => {
  array.forEach((cardb) => {
    const { heading, content, id } = cardb;
    const card = document.createElement("div");
    card.classList.add("card");

    const innertext = `<div class="card-header"> <div class="card-heading"> ${heading}</div> <div class="edit-note"> <a href="./upadte note/index.html"><img src="https://img.icons8.com/material-outlined/35/ffffff/edit-image.png"/></a> </div> </div> <div class="card-content"> <div class="content">${content} </div></div>`;
    card.innerHTML = innertext;
    container.appendChild(card);
  });
};
createNotes(data);
