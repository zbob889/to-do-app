import createProject from './createProject.js';

export default function newProject(){
    let newProject = document.createElement('form');
    newProject.className = 'projectForm';
    let parent = document.getElementById('toDoDisplay');
    parent.appendChild(newProject);

    let newProjectInput = document.createElement('input');
    newProjectInput.type = 'text';
    newProjectInput.className = 'projectInput';
    newProjectInput.placeholder = 'Project name...'
    newProject.appendChild(newProjectInput);

    newProject.addEventListener('submit', () => {
        createProject(`${newProjectInput.value}`);
        newProject.remove();
        newProjectInput.remove();
    });
};