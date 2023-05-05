import './style.scss';
import {sidebarDisplay} from './menuButton';

const header=document.getElementById('header')
const contentBody= document.getElementById('content');
const contentCard= document.getElementById('content-card');
const footer= document.getElementById('footer');
const sidebar= document.getElementById('sidebar');
const menuButton= document.getElementById('drop-down');

menuButton.addEventListener('click', sidebarDisplay);