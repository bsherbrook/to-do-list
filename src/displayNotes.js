import { addProjSwitch, currentFolderName } from "./addProject";

export { addNoteSwitch };
let addNoteSwitch = true;
const noteBox = document.getElementById("noteBox");

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
  function noteData(noteTitle, noteDescription) {
    this.title = noteTitle;
    this.description = noteDescription;
  }
  if (noteTitle) {
    myNotepad.push(new noteData(noteTitle, noteDescription));
    event.preventDefault();
    addNote();
    displayMyNotes();
  }
}
export function displayMyNotes() {
  //must style notes and set up grid pattern for dom creation and plan for overflow in note and multiples notes overflowing the content box
  //on to do items, check marks dont save when reloading folders
  //add functionality for note buttons edit and x
  //must give option to delete project folders
  //add night mode restyling option?
  //add notes priority level?
  //how to make so hitting enter on forms submits form or at least doesnt close form?
  const content = document.getElementById("contentBody");
  content.innerText = "";
  const folderName = document.getElementById("currentFolderName");
  folderName.innerText = "Notepad";
  currentFolderName = folderName.innerText;
  for (let i = 0; i < myNotepad.length; i++) {
    const toDoNote = document.createElement("div");
    toDoNote.classList.add("toDoNote");
    toDoNote.id = `toDoNote${i}`;

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

    const bottomNote = document.createElement("div");
    bottomNote.id = "bottomeNote";

    const editNote = document.createElement("button");
    editNote.id = `${i}`;
    editNote.classList.add = "editNoteButton";
    editNote.textContent = "Edit";
    //editNote.addEventListener("click", editNoteDetails);
    bottomNote.appendChild(editNote);

    const removeNote = document.createElement("button");
    removeNote.id = `${i}`;
    removeNote.textContent = "X";
    removeNote.classList.add("removeNoteButton");
    removeNote.addEventListener("click", removeMyNote);
    bottomNote.appendChild(removeNote);

    toDoNote.appendChild(bottomNote);

    content.appendChild(toDoNote);
    //if high priority project style element
    // if(myNotepad[i].priority===true){
    //     toDoNote.style.border= '3px solid red';
    // }
  }
}

function editNoteDetails(x) {
  let targetID = x.target.id;
  if (x.target.className === "noteTitleH3") {
    myNotepad[targetID].title = x.target.innerText;
  }
  if (x.target.className === "noteDescriptionDiv") {
    myNotepad[targetID].description = x.target.innerText;
  }
}
function removeMyNote(x) {
  let targetNote = x.target.id;
  myNotepad.splice(targetNote, 1);
  displayMyNotes();
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
