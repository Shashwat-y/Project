const Input = document.getElementById('taskInput');
const Button = document.getElementById('addButton');
const List = document.getElementById('taskList');

Button.addEventListener("click",Add);
function Add(){
    const taskText = Input.value.trim();
    if(taskText != 0){
        const Item = document.createElement('li');
        Item.innerHTML = `
            <span>${taskText}</span>
            <button class="completeButton">Complete</button>
            <button class="deleteButton">Delete</button>
        `;
        List.appendChild(Item);
        Input.value = '';
        Item.querySelector('.completeButton').addEventListener('click', completeTask);
        Item.querySelector('.deleteButton').addEventListener('click', deleteTask);
    }
}
    function completeTask(event) {
        const taskItem = event.target.parentNode;
        taskItem.classList.toggle('completed');
    }
    
    function deleteTask(event) {
        const taskItem = event.target.parentNode;
        List.removeChild(taskItem);
    }
    