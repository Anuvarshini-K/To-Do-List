
        function addTask() {
            const taskInput = document.getElementById('task');
            const taskText = taskInput.value.trim();

            if (taskText !== '') {
                const taskList = document.getElementById('taskList');
                const li = document.createElement('li');
                li.innerHTML = `
                    <input type="checkbox" onclick="toggleCompleted(this)">
                    <span>${taskText}</span>
                    <button onclick="removeTask(this)">Delete</button>
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

        function removeTask(button) {
            const taskList = document.getElementById('taskList');
            taskList.removeChild(button.parentElement);
        }
    
