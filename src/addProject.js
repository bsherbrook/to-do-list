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
    formBox.style.opacity = "100%";
    formBox.style.zIndex = "1";
    addProjSwitch = false;
  } else {
    formBox.style.opacity = "0";
    formBox.style.zIndex = "0";
    addProjSwitch = true;
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDescription").value = "";
    document.getElementById("dueDate").value= "";
    document.getElementById("priority").checked= false;
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
    addNoteSwitch = false;
  } else {
    noteBox.style.opacity = "0";
    addNoteSwitch = true;
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteDescription").value = "";
  }
}
//collect Note data-- must require before array push
let myNotepad = [];
export {myNotepad};
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
export {myProjects}

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
