function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox" onclick="toggleCompleted(this)">
            <span>${taskText}</span>
            <span class="cross" onclick="removeTask(this)">X</span>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleCompleted(checkbox) {
    const taskText = checkbox.nextElementSibling;
    if (checkbox.checked) {
        taskText.classList.add('completed');
    } else {
        taskText.classList.remove('completed');
    }
}

function removeTask(cross) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(cross.parentElement);
}