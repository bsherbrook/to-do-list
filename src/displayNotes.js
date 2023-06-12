import { addProjSwitch, currentFolderName } from "./addProject";

export { addNoteSwitch };
let addNoteSwitch = true;
const noteBox = document.getElementById("noteBox");
const card= document.getElementById('card');
//Note form appears
export function addNote() {
  if (addProjSwitch === false) {
    addProj();
  }
  if (addNoteSwitch === true) {
    noteBox.style.transition = "opacity .6s ease-in";
    noteBox.style.opacity = "100%";
    noteBox.style.zIndex = "1";
    addNoteSwitch = false;
    const noteTitleInput= document.getElementById('noteTitle');
    noteTitleInput.focus();
  } else {
    noteBox.style.opacity = "0";
    noteBox.style.zIndex = "-1";
    addNoteSwitch = true;
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteDescription").value = "";
  }
}
export function cancelNoteForm() {
  noteBox.style.opacity = "0";
  noteBox.style.zIndex = "-1";
  addNoteSwitch = true;
  document.getElementById("noteTitle").value = "";
  document.getElementById("noteDescription").value = "";
}
//collect Note data-- must require before array push
let myNotepad = [];
export { myNotepad };
//push notes into an array
export function submitNote(event) {
  let noteTitle = document.getElementById("noteTitle").value;
  let noteDescription = document.getElementById("noteDescription").value;
  let colorSelectValue= document.getElementById("colorSelect").value;
  function noteData(noteTitle, noteDescription, colorSelectValue) {
    this.title = noteTitle;
    this.description = noteDescription;
    this.color= colorSelectValue;
  }
  if (noteTitle) {
    myNotepad.push(new noteData(noteTitle, noteDescription, colorSelectValue));
    event.preventDefault();
    addNote();
    displayMyNotes();
    let myNotepadString= JSON.stringify(myNotepad);
    localStorage.setItem('notepadStorage', myNotepadString);
  }
}

export function displayMyNotes() {
  //must style notes and set up grid pattern for dom creation and plan for overflow in note and multiples notes overflowing the content box
  //replace menu button with logo
  //how to make so hitting enter on forms submits form or at least doesnt close form?
  //store info so it saves when you close the page
  //need to write storage function to display folders on sidebar
  //Edit dates format steal adams due in ____ format
  const content = document.getElementById("contentBody");
  content.innerText = "";
  const folderName = document.getElementById("currentFolderName");
  folderName.innerText = "Notepad";
  currentFolderName = folderName.innerText;
  content.style.display='grid';
  for (let i = 0; i < myNotepad.length; i++) {
    const toDoNote = document.createElement("div");
    toDoNote.classList.add("toDoNote");
    toDoNote.id = `toDoNote${i}`;
    toDoNote.style.position = "relative";
    toDoNote.style.backgroundColor= `${myNotepad[i].color}`;

    const noteTitle = document.createElement("h3");
    noteTitle.className = "noteTitleH3";
    noteTitle.id = `${i}`;
    noteTitle.textContent = myNotepad[i].title;
    noteTitle.contentEditable = true;
    noteTitle.spellcheck = false;
    noteTitle.addEventListener("input", editNoteDetails);
    toDoNote.appendChild(noteTitle);

    const noteDescription = document.createElement("div");
    noteDescription.className = "noteDescriptionDiv";
    noteDescription.id = `${i}`;
    noteDescription.contentEditable = true;
    noteDescription.spellcheck = false;
    noteDescription.addEventListener("input", editNoteDetails);
    noteDescription.textContent = myNotepad[i].description;
    toDoNote.appendChild(noteDescription);

    const removeNote = document.createElement("button");
    removeNote.style.position = "absolute";
    removeNote.style.bottom = "5px";
    removeNote.id = `${i}`;
    removeNote.textContent = "X";
    removeNote.classList.add("removeNoteButton");
    removeNote.addEventListener("click", removeMyNote);

    toDoNote.appendChild(removeNote);

    content.appendChild(toDoNote);
  }
}

function editNoteDetails(x) {
  let targetID = x.target.id;
  if (x.target.className === "noteTitleH3") {
    myNotepad[targetID].title = x.target.innerText;
    let myNotepadString= JSON.stringify(myNotepad);
    localStorage.setItem('notepadStorage', myNotepadString);
  }
  if (x.target.className === "noteDescriptionDiv") {
    myNotepad[targetID].description = x.target.innerText;
    let myNotepadString= JSON.stringify(myNotepad);
    localStorage.setItem('notepadStorage', myNotepadString);
  }
}
function removeMyNote(x) {
  let targetNote = x.target.id;
  myNotepad.splice(targetNote, 1);
  displayMyNotes();
  let myNotepadString= JSON.stringify(myNotepad);
  localStorage.setItem('notepadStorage', myNotepadString);
}

// export function buildNoteFolder() {
//   const newNoteBox = document.getElementById("newFolderBox");
//   if (newNoteBox) {
//     return;
//   }
//   const li = document.createElement("li");
//   const div = document.createElement("div");
//   div.setAttribute("id", "newFolderBox");
//   const input = document.createElement("input");
//   input.setAttribute("id", "newFolder");
//   input.setAttribute("type", "text");
//   input.setAttribute("autofocus", "");
//   input.setAttribute("placeholder", "Enter Folder Name");
//   const buttonContainer = document.createElement("div");
//   buttonContainer.setAttribute("id", "newFolderButtons");
//   const addButton = document.createElement("button");
//   addButton.textContent = "Add";
//   addButton.setAttribute("id", "addFolderButton");
//   const deleteButton = document.createElement("button");
//   deleteButton.setAttribute("id", "deleteFolderButton");
//   deleteButton.textContent = "X";
//   // append the elements to the correct parents
//   const noteList = document.getElementById("noteList");
//   li.appendChild(div);
//   div.appendChild(input);
//   div.appendChild(buttonContainer);
//   buttonContainer.appendChild(addButton);
//   buttonContainer.appendChild(deleteButton);
//   noteList.insertBefore(li, noteList.children[noteList.children.length - 1]);
// }
