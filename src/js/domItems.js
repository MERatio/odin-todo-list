const domItems = (() => {
  const body = document.body;
  const projects = document.getElementById('projects');
  const projectForm = document.getElementById('projectForm');
  const inputProjectName = document.getElementById('inputProjectName');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskForm = document.getElementById('taskForm');
  const taskFormModalLabel = document.getElementById('taskFormModalLabel');
  const inputTaskTitle = document.getElementById('inputTaskTitle');
  const inputTaskDesc = document.getElementById('inputTaskDesc');
  const inputTaskDueDate = document.getElementById('inputTaskDueDate');
  const selectTaskPriority = document.getElementById('selectTaskPriority');
  const taskFormSubmitBtn = document.getElementById('taskFormSubmitBtn');
  const tasks = document.getElementById('tasks');

  return {
    body,
    projects,
    projectForm,
    inputProjectName,
    addTaskBtn,
    taskForm,
    taskFormModalLabel,
    inputTaskTitle,
    inputTaskDesc,
    inputTaskDueDate,
    selectTaskPriority,
    taskFormSubmitBtn,
    tasks,
  };
})();

export default domItems;
