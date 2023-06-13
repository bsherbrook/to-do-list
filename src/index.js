import "./style.scss";
import {
  addProj,
  submitProject,
  buildNewFolder,
  checkforButton,
  currentFolderName,
  noDeleteFolder,
  cancelEditFolder,
  submitNewFolderName,
  myProjects,
  editFolder,
  deleteThisFolder
} from "./addProject";
import {
  displayMyProject,
  organizeProjectFolder,
  displayGeneral,
} from "./displayProjects";
import { cancelNoteForm, submitNote, displayMyNotes, myNotepad } from "./displayNotes";

const addProject = document.getElementById("addProjectButton");
const submitProjectButton = document.getElementById("submitProject");
const submitNoteButton = document.getElementById("submitNote");
const newToDo = document.getElementById("addToDoItem");
const projectList = document.querySelectorAll(".projectFolder");
const folderName = document.getElementById("currentFolderName");
const cancelNoteButton = document.getElementById("cancelNote");
const notepadFolder = document.getElementById("notepadFolder");
const cancelFolderButton= document.getElementById("cancelFolderName");
const submitFolderName= document.getElementById("submitFolderName");

notepadFolder.addEventListener("click", displayMyNotes);
notepadFolder.addEventListener("click", () => {
  const folderDestroyer = document.getElementById("folderDestroyer");
  if (folderDestroyer) {
    noDeleteFolder();
  }
});
submitFolderName.addEventListener("click", submitNewFolderName);
cancelNoteButton.addEventListener("click", cancelNoteForm);
cancelFolderButton.addEventListener("click", cancelEditFolder);
addProject.addEventListener("click", buildNewFolder);
newToDo.addEventListener("click", addProj);
submitNoteButton.addEventListener("click", submitNote);
submitProjectButton.addEventListener("click", submitProject);
//submitProjectButton.addEventListener("click", displayMyProject);
document.addEventListener("click", checkforButton);
projectList.forEach((item) => {
  item.addEventListener("click", () => {
    folderName.innerText = `${item.innerHTML}`;
    currentFolderName = folderName.innerText;
    if (item.id !== "generalFolder") {
      organizeProjectFolder();
    }
    if (item.id === "generalFolder") {
      displayGeneral();
      const folderDestroyer = document.getElementById("folderDestroyer");
      if (folderDestroyer) {
        noDeleteFolder();
      }
    }
    //currentFolderName should it be editable? should it be deletable?
  });
});

const storedArrayString= localStorage.getItem('projectArray');
if(storedArrayString){
  let storedArray= JSON.parse(storedArrayString);
  myProjects=storedArray;
  displayGeneral();
}
const storedSidebarString= localStorage.getItem('sidebarFolders');
const folderButtonHolder = document.getElementById("folderButtonHolder");

if(storedSidebarString){
  let projectList= document.getElementById('projectList');
  const sidebarArray= JSON.parse(storedSidebarString);

  for(let i=0; i<sidebarArray.length; i++){
    const liElement = document.createElement("li");
    const spanElement = document.createElement("span");
    spanElement.classList.add("projectFolder");
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

    spanElement.textContent = sidebarArray[i];
    liElement.appendChild(spanElement);
     projectList.insertBefore(
       liElement,
       projectList.children[projectList.children.length - 1]
     );
  }
}

const storedNotepadString= localStorage.getItem('notepadStorage');
if (storedNotepadString){
  let storedNotepadArray= JSON.parse(storedNotepadString);
  myNotepad= storedNotepadArray;
}