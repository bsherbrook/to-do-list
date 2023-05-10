import "./style.scss";
import { sidebarDisplay } from "./menuButton";
import {
  addProj,
  addNote,
  submitNote,
  submitProject,
  buildNewFolder,
  buildNoteFolder
} from "./addProject";
import { displayMyProject } from "./displayProjects";
const header = document.getElementById("header");
const contentBody = document.getElementById("content");
const contentCard = document.getElementById("content-card");
const footer = document.getElementById("footer");
const sidebar = document.getElementById("sidebar");
const menuButton = document.getElementById("drop-down");
const addProject = document.getElementById("addProjectButton");
const addNoteButton = document.getElementById("addNoteButton");
const submitProjectButton = document.getElementById("submitProject");
const submitNoteButton = document.getElementById("submitNote");
const newToDo = document.getElementById("addToDoItem");

menuButton.addEventListener("click", sidebarDisplay);
addProject.addEventListener("click", buildNewFolder);
newToDo.addEventListener("click", addProj);
//addNoteButton.addEventListener("click", addNote);     !!addNote function must be implemented later
addNoteButton.addEventListener('click', buildNoteFolder)
submitNoteButton.addEventListener("click", submitNote);
submitProjectButton.addEventListener("click", submitProject);
submitProjectButton.addEventListener("click", displayMyProject);
document.addEventListener('click', checkforButton)

let projectName= '';
function checkforButton(e){
  const targetFolder = e.target.closest("#addFolderButton"); // Or any other selector.
  const newFolderInput= document.getElementById('newFolder');
  const targetCancel= e.target.closest('#deleteFolderButton');
  // works for projects and notes
  if(targetFolder && newFolderInput.value!==''){
    projectName=newFolderInput.value;
    console.log(projectName); 
  }
  if(targetCancel){
    console.log('cancel')
  }
};
