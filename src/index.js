import './style.scss';
import {sidebarDisplay} from './menuButton';
import { addProj, addNote, submitNote, submitProject} from './addProject';
import { displayMyProject } from './displayProjects';
const header=document.getElementById('header')
const contentBody= document.getElementById('content');
const contentCard= document.getElementById('content-card');
const footer= document.getElementById('footer');
const sidebar= document.getElementById('sidebar');
const menuButton= document.getElementById('drop-down');
const addProject= document.getElementById('addProjectButton');
const addNoteButton= document.getElementById('addNoteButton');
const submitProjectButton= document.getElementById('submitProject');
const submitNoteButton= document.getElementById('submitNote');

menuButton.addEventListener('click', sidebarDisplay);
addProject.addEventListener('click', addProj);
addNoteButton.addEventListener('click', addNote);
submitNoteButton.addEventListener('click', submitNote);
submitProjectButton.addEventListener('click', submitProject);
submitProjectButton.addEventListener('click', displayMyProject);