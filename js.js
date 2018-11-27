const inputAdd = document.querySelector(`[data-key='add']`);
const addBtn = document.querySelector("button.input");
const inputSearch = document.querySelector(`[data-key='search']`);
const ul = document.querySelector(`ul`);
const taskArray = [];


const renderTask = () => {
    ul.textContent = "";
    taskArray.forEach((element, key) => {
        element.dataset.key = key;
        ul.appendChild(element);
    })
}

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    taskArray.splice(index, 1);
    renderTask()

}


const insertTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value.toLowerCase();
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + '<button class="input addtask">Usuń</button>'
    console.log(task);
    taskArray.push(task);
    renderTask()
    inputAdd.value = "";
    task.querySelector('button.addtask').addEventListener('click', removeTask);
}



const searchTask = (e) => {
    e.preventDefault();
    const searchText = e.target.value.toLowerCase()
    let tasks = [...taskArray];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
}

addBtn.addEventListener("click", insertTask);
inputSearch.addEventListener("input", searchTask)