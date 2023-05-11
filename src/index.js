import "./style.scss";
import { sidebarDisplay } from "./menuButton";
import {
  addProj,
  addNote,
  submitNote,
  submitProject,
  buildNewFolder,
  buildNoteFolder,
  checkforButton,
  currentFolderName,
} from "./addProject";
import {
  displayMyProject,
  organizeProjectFolder,
  displayGeneral,
} from "./displayProjects";
// const header = document.getElementById("header");
// const contentBody = document.getElementById("content");
// const contentCard = document.getElementById("content-card");
// const footer = document.getElementById("footer");
// const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("drop-down");
const addProject = document.getElementById("addProjectButton");
const addNoteButton = document.getElementById("addNoteButton");
const submitProjectButton = document.getElementById("submitProject");
const submitNoteButton = document.getElementById("submitNote");
const newToDo = document.getElementById("addToDoItem");
const projectList = document.querySelectorAll(".projectFolder");
const folderName = document.getElementById("currentFolderName");
const generalFolder = document.getElementById("generalFolder");

menuButton.addEventListener("click", sidebarDisplay);
addProject.addEventListener("click", buildNewFolder);
newToDo.addEventListener("click", addProj);
//addNoteButton.addEventListener("click", addNote);     !!addNote function must be implemented later
addNoteButton.addEventListener("click", buildNoteFolder);
submitNoteButton.addEventListener("click", submitNote);
submitProjectButton.addEventListener("click", submitProject);
submitProjectButton.addEventListener("click", displayMyProject);
document.addEventListener("click", checkforButton);
projectList.forEach((item) => {
    item.addEventListener("click", () => {
      folderName.innerText = `${item.innerHTML}`;
      currentFolderName = folderName.innerText;
      if(item.id!=='generalFolder'){
        organizeProjectFolder();
      }
      if(item.id==='generalFolder'){
        displayGeneral();
      }
      //currentFolderName should it be editable?
    });
});
