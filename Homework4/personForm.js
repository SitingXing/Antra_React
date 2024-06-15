const personForm = document.getElementById("personForm");
const nameInput = document.getElementById("personName");
const ageInput = document.getElementById("personAge");
const addPersonBtn = document.getElementById("addPersonBtn");

// const people = JSON.parse(localStorage.getItem("people")) || [];
let people = JSON.parse(localStorage.getItem("people"));
if (!people) people = [];

personForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   return;
  const newPerson = {
    id: uuidv4(),
    name: nameInput.value,
    age: Number(ageInput.value),
  };

  people.push(newPerson);

  localStorage.setItem("people", JSON.stringify(people));

  const {id, name, age} = newPerson;
  const newDiv = document.createElement('div');
  const newContent = `Name: ${name}&nbsp;&nbsp;&nbsp;&nbsp;Age: ${age}`;
  newDiv.innerHTML = newContent;
  const loc = document.getElementById('title');
  document.body.insertBefore(newDiv, loc);
});
