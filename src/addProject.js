import { organizeProjectFolder } from "./displayProjects";
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
let myProjects = []; //this array stores all objects
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
    projectPriority,
    currentFolderName //must distinguish further between notes and Projects?
  ) {
    this.title = projectTitle;
    this.description = projectDescription;
    this.date = projectDueDate;
    this.priority = projectPriority;
    this.folder = currentFolderName;
  }
  myProjects.push(
    new projectData(
      projectTitle,
      projectDescription,
      projectDueDate,
      projectPriority,
      currentFolderName
    )
  );
  event.preventDefault();
  addProj();
  console.log(myProjects);
}

// create new project folders from the sidebar
export function buildNewFolder() {
  const newFolderBox = document.getElementById("newFolderBox");
  if (newFolderBox) {
    return;
  }
  //build modal to name project
  const li = document.createElement("li");
  li.setAttribute("id", "newFolderLI");
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
  li.appendChild(div);
  div.appendChild(input);
  div.appendChild(buttonContainer);
  buttonContainer.appendChild(addButton);
  buttonContainer.appendChild(deleteButton);
  const projectList = document.getElementById("projectList");
  projectList.insertBefore(
    li,
    projectList.children[projectList.children.length - 1]
  );
}
// create new Note Folders from the sidebar
export function buildNoteFolder() {
  const newNoteBox = document.getElementById("newFolderBox");
  if (newNoteBox) {
    return;
  }
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
//add event listener to document checking if Add button is pressed on modal
export function checkforButton(e) {
  const targetFolder = e.target.closest("#addFolderButton");
  const newFolderInput = document.getElementById("newFolder");
  const targetCancel = e.target.closest("#deleteFolderButton");
  if (targetFolder && newFolderInput.value !== "") {
    //build new folder on sidebar
    let projectName = newFolderInput.value;
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    const newFolderLI = document.getElementById("newFolderLI");
    spanElement.classList.add("projectFolder");
    //add listener to change currentfolder by clicking sidebar element
    spanElement.addEventListener("click", () => {
      const folderName = document.getElementById("currentFolderName");
      folderName.innerText = `${spanElement.innerText}`;
      currentFolderName = folderName.innerText;
      organizeProjectFolder();
    });
    spanElement.textContent = projectName;
    liElement.appendChild(spanElement);
    const projectList = document.getElementById("projectList");
    newFolderLI.remove();
    projectList.insertBefore(
      liElement,
      projectList.children[projectList.children.length - 1]
    );
    //currentFolderName should it be editable on to-do's?
    //update current folder display and currentfolderName variable?
    //or wait for to click the new folder from sidebar
  }
  if (targetCancel){
    newFolderLI.remove();
  }
}
let currentFolderName = "General"; //this variable is what imprints on objects
export{ currentFolderName }
