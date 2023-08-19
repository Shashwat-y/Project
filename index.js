//Clock
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);


const Input = document.getElementById('taskInput');
const Button = document.getElementById('addButton');
const List = document.getElementById('taskList');

Button.addEventListener("click",Add);
function Add(){
    const taskText = Input.value.trim();
    const prioritySelect = document.getElementById('prioritySelect');
    const selectedPriority = prioritySelect.value;

    if(taskText != 0){
        const Item = document.createElement('li');
        Item.innerHTML = `
            <span>${taskText}</span>
            <button class="btn btn-danger">Delete</button>
        `;
        List.appendChild(Item);
        Input.value = '';
        Item.classList.add(`${selectedPriority}-priority`);
        Item.querySelector('.btn-danger ').addEventListener('click', deleteTask);
    }
}
    function deleteTask(event) {
        const taskItem = event.target.parentNode;
        List.removeChild(taskItem);
    }
    