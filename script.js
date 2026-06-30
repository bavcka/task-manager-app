function createColumn(columnName) {

    const column = document.createElement("div");
    const title = document.createElement("h2");
    const taskList = document.createElement("div");
    const addTaskBtn = document.createElement("button");

    column.classList.add("column");

    title.textContent = columnName;

    taskList.classList.add("task-list");

    addTaskBtn.textContent = "add task";
    addTaskBtn.classList.add("add-task-btn");

    setupAddTaskButton(addTaskBtn, taskList);

    column.appendChild(title);
    column.appendChild(taskList);
    column.appendChild(addTaskBtn);

    return column;

}

const addColBtn = document.getElementById('add-col-btn');
const gridContainer = document.querySelector('.grid-container');

addColBtn.addEventListener('click', ()=> {
    
    const columnName = prompt("enter a name for your new column");
   
   


    if (columnName != null){

        const column = createColumn(columnName);

    

        gridContainer.appendChild(column);

    }
   
})


function setupAddTaskButton(button, taskList){
    button.addEventListener('click', () => {
        const taskName = prompt("enter the task name");
        if (taskName != null){
            const taskBlock = createTask(taskName)

            taskList.appendChild(taskBlock)
        }
    })
}



function createTask(taskName) {

    const task = document.createElement("div");

    task.classList.add("task");
    task.textContent = taskName;

    return task;

}