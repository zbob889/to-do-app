export const createToDoItem = () => {
    return { title, description, dueDate, priorirty };
};



function createToDo (name){
    let newElement = document.createElement('div');
    newElement.className = 'toDoItem';
    let parent = document.getElementById('miscProject');
    parent.appendChild(newElement);

    let newCheck = document.createElement('input');
    newCheck.type = 'checkbox';
    newCheck.setAttribute('id', `${name}`);
    newElement.appendChild(newCheck);

    let newProjectName = document.createElement('input');
    newProjectName.type = 'text';
    newProjectName.className = 'projectName';
    newProjectName.for = `${name}`;
    newProjectName.value = `${name}`;
    newElement.appendChild(newProjectName);
};

