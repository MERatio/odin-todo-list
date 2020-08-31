const domItems = (() => {
  const body = document.body;
  const projects = document.getElementById('projects');
  const projectForm = document.getElementById('projectForm');
  const inputProjectName = document.getElementById('inputProjectName');
  const taskForm = document.getElementById('taskForm');
  const inputTaskTitle = document.getElementById('inputTaskTitle');
  const inputTaskDesc = document.getElementById('inputTaskDesc');
  const inputTaskDueDate = document.getElementById('inputTaskDueDate');
  const selectTaskPriority = document.getElementById('selectTaskPriority');
  const tasks = document.getElementById('tasks');

  return {
    body,
    projects,
    projectForm,
    inputProjectName,
    taskForm,
    inputTaskTitle,
    inputTaskDesc,
    inputTaskDueDate,
    selectTaskPriority,
    tasks,
  };
})();

export default domItems;
