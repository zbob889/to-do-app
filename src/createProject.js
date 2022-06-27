export default function createProject(name){

    let newLabel = document.createElement(`label`);
    newLabel.className = `projectButton`;
    let parent = document.getElementById(`toDoDisplay`);
    parent.appendChild(newLabel);
    newLabel.innerHTML = `${name}`;

    let newCheck = document.createElement(`input`);
    newCheck.type = 'checkbox';
    newCheck.className = `projectCheck`;
    parent.appendChild(newCheck);

    let newElement = document.createElement('div');
    newElement.className = 'projectContent';
    parent.appendChild(newElement);

};