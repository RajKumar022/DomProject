let input = document.getElementById("toDo");
let list = document.getElementById("taskList");

function Add() {
    if (input.value === "") {
        alert('Please Enter Task');
    } else {
        let newTask = document.createElement('li');
        newTask.style.fontSize = "1.6em";
        
        let taskText = document.createElement('div');
        taskText.textContent = input.value;
        newTask.appendChild(taskText);

        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌'; 
        deleteBtn.classList.add('delete-btn');
        deleteBtn.onclick = function() {
            list.removeChild(newTask);
        };  

        let editBtn = document.createElement('button');
        editBtn.textContent = '✏️'; 
        editBtn.classList.add('edit-btn');
        editBtn.onclick = function() {
            let editedTask = prompt("Edit Task", taskText.textContent);
            if (editedTask !== null) {
                taskText.textContent = editedTask;
            }
        };

        let completeBtn = document.createElement('button');
        completeBtn.textContent = '✔️'; 
        completeBtn.classList.add('complete-btn');
        completeBtn.onclick = function() {
            newTask.classList.toggle('completed');
        };

        newTask.appendChild(deleteBtn);
        newTask.appendChild(editBtn);
        newTask.appendChild(completeBtn);

        list.appendChild(newTask);
        input.value = "";
    }
}