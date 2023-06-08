import "./style.scss";
import { sidebarDisplay } from "./menuButton";
import {
  addProj,
  submitProject,
  buildNewFolder,
  checkforButton,
  currentFolderName,
  noDeleteFolder,
  cancelEditFolder,
  submitNewFolderName
} from "./addProject";
import {
  displayMyProject,
  organizeProjectFolder,
  displayGeneral,
} from "./displayProjects";
import { cancelNoteForm, submitNote, displayMyNotes } from "./displayNotes";

const menuButton = document.getElementById("drop-down");
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
menuButton.addEventListener("click", sidebarDisplay);
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
