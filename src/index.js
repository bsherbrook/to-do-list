import './style.scss';
const header=document.getElementById('header')
const contentBody= document.getElementById('content');
const contentCard= document.getElementById('content-card');
const footer= document.getElementById('footer');
const sidebar= document.getElementById('sidebar');
const menuButton= document.getElementById('drop-down');

//open and close menu sidebar
let menuSwitch=true;
menuButton.addEventListener('click', ()=>{
  if (menuSwitch===true){
    contentCard.style.gridColumn='1/3';
    sidebar.style.display='none'
    menuSwitch= false;
  }
  else{
    contentCard.style.gridColumn='';
    sidebar.style.display='flex'
    menuSwitch= true;
  }
})