import './style.css';
import addElement from './addElement.js';
import addText from './addText.js';
import {createToDo} from './createToDo.js';
import newProject from './newProject.js';

const newProjectButton = document.getElementById('newProject');
newProjectButton.addEventListener('click', () => {
    newProject();
});

const formBox = document.getElementById('formBox');
const submitBox = document.getElementById('submitBox');
formBox.addEventListener('submit', () => {
    let test1 = createToDo(`${submitBox.value}`, '', '', '');
    console.log(test1);
});