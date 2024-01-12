function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    alert('Задание добавлено!');

    if (taskInput.value.trim() === '') {
      alert('Пожалуйста, введите задание.');
      return;
    }

    var taskItem = document.createElement('li');
    taskItem.textContent = taskInput.value;
    taskList.appendChild(taskItem);

    taskInput.value = ''; 
  }

  function completeTask() {
    var taskList = document.getElementById('taskList');
    var selectedTask = taskList.querySelector('li');
    if (!selectedTask) {
        alert('Выберите задание для завершения.');
        return;
    }
    
    taskList.removeChild(selectedTask);
    alert('Задание завершено!')
}

  function deleteTask() {
    var taskList = document.getElementById('taskList');
    var selectedTask = taskList.querySelector('li');
    alert('Задание удалено!')

    if (!selectedTask) {
      alert('Выберите задание для удаления.');
      return;
    }

    taskList.removeChild(selectedTask);
  }