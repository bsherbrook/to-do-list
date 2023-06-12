import {
  editDetailsSwitch,
  organizeProjectFolder,
  targetToDo,
  displayGeneral,
  displayMyProject,
  tempfolder,
} from "./displayProjects";
import {
  addNote,
  buildNoteFolder,
  submitNote,
  addNoteSwitch,
} from "./displayNotes";
const formBox = document.getElementById("formBox");
let addProjSwitch = true;
export { addProjSwitch };
//Project form appears
export function addProj() {
  if (currentFolderName === "Notepad") {
    addNote();
    return;
  }
  if (addProjSwitch === true) {
    formBox.style.transition = "opacity .6s ease-in";
    formBox.style.display = "flex";
    formBox.style.opacity = "100%";
    formBox.style.zIndex = "1";
    addProjSwitch = false;
    const formTitleInput = document.getElementById("projectTitle");
    formTitleInput.focus();
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

let myProjects = []; //this array stores all objects
export { myProjects };

export function submitProject(event) {
  let projectTitle = document.getElementById("projectTitle").value;
  let projectDescription = document.getElementById("projectDescription").value;
  let projectDueDate = document.getElementById("dueDate").value;
  let projectPriority = document.getElementById("priority").checked;
  if (projectTitle !== "") {
    function projectData(
      projectTitle,
      projectDescription,
      projectDueDate,
      projectPriority,
      currentFolderName,
      status
    ) {
      this.title = projectTitle;
      this.description = projectDescription;
      this.date = projectDueDate;
      this.priority = projectPriority;
      this.folder = currentFolderName;
      this.status = false;
    }
    if (editDetailsSwitch === false) {
      myProjects.push(
        new projectData(
          projectTitle,
          projectDescription,
          projectDueDate,
          projectPriority,
          currentFolderName,
          status
        )
      );
      event.preventDefault();
      addProj();
      displayMyProject();
    }
    // if editing a toDo's details
    if (editDetailsSwitch === true) {
      myProjects[targetToDo] = new projectData(
        projectTitle,
        projectDescription,
        projectDueDate,
        projectPriority,
        tempfolder
      );
      const content = document.getElementById("contentBody");
      content.innerText = "";
      event.preventDefault();
      if (currentFolderName === "General") {
        displayGeneral();
      } else {
        organizeProjectFolder();
      }
      editDetailsSwitch = false;
      addProj();
    }
    //array localStorage test
    let arrayStorage = JSON.stringify(myProjects);
    localStorage.setItem("projectArray", arrayStorage);
  }
}
const cancelProjectAdd = document.getElementById("cancelProject");
cancelProjectAdd.addEventListener("click", cancelProjectForm);
function cancelProjectForm() {
  formBox.style.opacity = "0";
  formBox.style.zIndex = "-1";
  addProjSwitch = true;
  document.getElementById("projectTitle").value = "";
  document.getElementById("projectDescription").value = "";
  document.getElementById("dueDate").value = "";
  document.getElementById("priority").checked = false;
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
  input.setAttribute("placeholder", "Enter Project Name");
  const buttonContainer = document.createElement("div");
  buttonContainer.setAttribute("id", "newFolderButtons");
  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  addButton.setAttribute("id", "addFolderButton");
  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("id", "deleteFolderButton");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", cancelFolder);
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
  input.focus();
}
function cancelFolder() {
  const newFolderLI = document.getElementById("newFolderLI");
  newFolderLI.remove();
}
const folderButtonHolder = document.getElementById("folderButtonHolder");

export function noDeleteFolder() {
  const folderEditor = document.getElementById("folderEditor");
  folderButtonHolder.removeChild(folderDestroyer);
  folderButtonHolder.removeChild(folderEditor);
}
//add project to sidebar
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
      const folderDestroyer = document.getElementById("folderDestroyer");
      if (
        currentFolderName !== "General" &&
        currentFolderName !== "Notepad" &&
        !folderDestroyer
      ) {
        const editFolderButton = document.createElement("button");
        editFolderButton.innerText = "Edit Folder";
        editFolderButton.setAttribute("id", "folderEditor");
        editFolderButton.addEventListener("click", editFolder);
        folderButtonHolder.appendChild(editFolderButton);
        const deleteFolderButton = document.createElement("button");
        deleteFolderButton.innerText = "Delete Folder";
        deleteFolderButton.setAttribute("id", "folderDestroyer");
        deleteFolderButton.addEventListener("click", deleteThisFolder);
        folderButtonHolder.appendChild(deleteFolderButton);
      }
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
    addFolderToStorage();
  }
}
function addFolderToStorage() {
  const projectList = document.getElementById("projectList");
  let sidebarArray = [];
  for (let i = 0; i < projectList.children.length; i++) {
    if (
      projectList.children[i].textContent !== "General" &&
      projectList.children[i].textContent !== "+"
    ) {
      sidebarArray.push(projectList.children[i].textContent);
    }
  }
  let sidebarString= JSON.stringify(sidebarArray)
  localStorage.setItem('sidebarFolders', sidebarString);
}
export function deleteThisFolder() {
  let tempArray = [];
  for (let i = 0; i < myProjects.length; i++) {
    if (myProjects[i].folder !== currentFolderName) {
      tempArray.push(myProjects[i]);
    }
  }
  myProjects = tempArray;
  const folderName = document.getElementById("currentFolderName");
  let deleteFolderName = currentFolderName;
  folderName.innerText = "General";
  currentFolderName = "General";
  noDeleteFolder();
  displayGeneral();
  //remove folder from list menu
  for (let i = 0; i < projectList.children.length; i++) {
    if (projectList.children[i].innerText === deleteFolderName) {
      projectList.children[i].remove();
    }
  }
  addFolderToStorage();
  let arrayStorage = JSON.stringify(myProjects);
  localStorage.setItem("projectArray", arrayStorage);
}
const folderForm = document.getElementById("editFolderForm");
export function editFolder() {
  folderForm.style.transition = "opacity .6s ease-in";
  folderForm.style.display = "flex";
  folderForm.style.opacity = "100%";
  folderForm.style.zIndex = "1";
}
export function cancelEditFolder() {
  folderForm.style.opacity = "0";
  folderForm.style.zIndex = "-1";
}
export function submitNewFolderName() {
  const editFolderInput = document.getElementById("editFolderInput");
  let newFolderName = editFolderInput.value;
  if (newFolderName !== "") {
    folderForm.style.opacity = "0";
    folderForm.style.zIndex = "-1";
    editFolderInput.value = "";
    for (let i = 0; i < myProjects.length; i++) {
      if (myProjects[i].folder === currentFolderName) {
        myProjects[i].folder = newFolderName;
      }
    }
    const folderName = document.getElementById("currentFolderName");
    folderName.innerText = newFolderName;
    for (let i = 0; i < projectList.children.length; i++) {
      if (projectList.children[i].innerText === currentFolderName) {
        const sidebarLink = projectList.children[i];
        const sidebarLinkSpan = sidebarLink.getElementsByTagName("span");
        sidebarLinkSpan[0].innerText = newFolderName;
      }
    }
    currentFolderName = newFolderName;
  }
  let arrayStorage = JSON.stringify(myProjects);
  localStorage.setItem("projectArray", arrayStorage);
  addFolderToStorage();
}
let currentFolderName = "General"; //this variable is what imprints on objects
export { currentFolderName };
