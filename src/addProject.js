const formBox = document.getElementById("formBox");
const noteBox = document.getElementById("noteBox");
let addProjSwitch = true;
let addNoteSwitch = true;
//Project form appears
export function addProj() {
  if (addNoteSwitch === false) {
    addNote();
  }
  if (addProjSwitch === true) {
    formBox.style.transition = "opacity .6s ease-in";
    formBox.style.display = "flex";
    formBox.style.opacity = "100%";
    formBox.style.zIndex = "1";
    addProjSwitch = false;
  } else {
    formBox.style.opacity = "0";
    formBox.style.zIndex = "-1";
    addProjSwitch = true;
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";
    document.getElementById("dueDate").value = "";
    document.getElementById("priority").checked = false;
  }
}
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
//collect Note data-- must require before array push
let myNotepad = [];
export { myNotepad };
export function submitNote(event) {
  let noteTitle = document.getElementById("noteTitle").value;
  let noteDescription = document.getElementById("noteDescription").value;
  function noteData(noteTitle, noteDescription) {
    this.title = noteTitle;
    this.description = noteDescription;
  }
  myNotepad.push(new noteData(noteTitle, noteDescription));
  event.preventDefault();
  addNote();
  console.log(myNotepad);
}
//collect Project Data--must require certain info
let myProjects = [];
export { myProjects };

export function submitProject(event) {
  let projectTitle = document.getElementById("projectTitle").value;
  let projectDescription = document.getElementById("projectDescription").value;
  let projectDueDate = document.getElementById("dueDate").value;
  let projectPriority = document.getElementById("priority").checked;
  function projectData(
    projectTitle,
    projectDescription,
    projectDueDate,
    projectPriority
  ) {
    this.title = projectTitle;
    this.description = projectDescription;
    this.date = projectDueDate;
    this.priority = projectPriority;
  }
  myProjects.push(
    new projectData(
      projectTitle,
      projectDescription,
      projectDueDate,
      projectPriority
    )
  );
  event.preventDefault();
  addProj();
  console.log(myProjects);
}
export function buildNewFolder() {
  const newFolderBox = document.getElementById("newFolderBox");
  if (newFolderBox) {
    return;
  }
  const addProjectButton = document.getElementById("addProjectButton");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.setAttribute("id", "newFolderBox");
  const input = document.createElement("input");
  input.setAttribute("id", "newFolder");
  input.setAttribute("type", "text");
  input.setAttribute("autofocus", "");
  input.setAttribute("placeholder", "Enter Project Name");
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "newFolderButtons");
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.setAttribute("id", "addFolderButton");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteFolderButton");
  deleteButton.textContent = "X";

  // append the elements to the correct parents
  const projectList = document.getElementById("projectList");
  li.appendChild(div);
  div.appendChild(input);
  div.appendChild(buttonContainer);
  buttonContainer.appendChild(addButton);
  buttonContainer.appendChild(deleteButton);
  projectList.insertBefore(
    li,
    projectList.children[projectList.children.length - 1]
  );
}
export function buildNoteFolder() {
  const newNoteBox = document.getElementById("newFolderBox");
  if (newNoteBox) {
    return;
  }
  const addNoteButton = document.getElementById("addNoteButton");
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.setAttribute("id", "newFolderBox");
  const input = document.createElement("input");
  input.setAttribute("id", "newFolder");
  input.setAttribute("type", "text");
  input.setAttribute("autofocus", "");
  input.setAttribute("placeholder", "Enter Folder Name");
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "newFolderButtons");
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.setAttribute("id", "addFolderButton");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteFolderButton");
  deleteButton.textContent = "X";

  // append the elements to the correct parents
  const noteList = document.getElementById("noteList");
  li.appendChild(div);
  div.appendChild(input);
  div.appendChild(buttonContainer);
  buttonContainer.appendChild(addButton);
  buttonContainer.appendChild(deleteButton);
  noteList.insertBefore(li, noteList.children[noteList.children.length - 1]);
}
//create an array to store all of the newly created arrays in
// const arrayHolder=[[{title:etc.},{another to do item}],[another project of todo objects]]
