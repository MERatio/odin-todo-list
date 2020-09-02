import domItems from './domItems.js';
import Project from './Project.js';
import Task from './Task.js';
import model from './model.js';
import views from './views';

const domEvents = (() => {
  let selectedTask;

  const _getTaskFormValues = () => {
    const taskTitle = domItems.inputTaskTitle.value;
    const taskDesc = domItems.inputTaskDesc.value;
    const taskDueDate = domItems.inputTaskDueDate.value;
    const taskPriority = domItems.selectTaskPriority.value;

    return {
      taskTitle,
      taskDesc,
      taskDueDate,
      taskPriority,
    };
  };

  const _addTask = (selectedProject) => {
    const {
      taskTitle,
      taskDesc,
      taskDueDate,
      taskPriority,
    } = _getTaskFormValues();
    if (model.isTaskTitleUnique(taskTitle, selectedProject)) {
      const task = new Task(taskTitle, taskDesc, taskDueDate, taskPriority);
      model.addTask(task, selectedProject);
      views.addTask(task);
      views.alert('success', 'Task is successfully created');
    } else {
      views.alert(
        'warning',
        'Task title is already created, please enter other task title'
      );
    }
  };

  const _updateTask = (selectedTask, selectedProject) => {
    const taskFormValues = _getTaskFormValues();
    const oldTaskTitle = selectedTask.title;
    let taskTitleUnique = false;
    if (taskFormValues.taskTitle === oldTaskTitle) {
      taskTitleUnique = true;
    } else {
      taskTitleUnique = model.isTaskTitleUnique(
        taskFormValues.taskTitle,
        selectedProject
      );
    }
    if (taskTitleUnique) {
      const updatedTask = model.updateTask(
        selectedTask,
        selectedProject,
        taskFormValues
      );
      views.updateTask(oldTaskTitle, updatedTask.title);
      views.alert('success', 'Task is successfully updated');
    } else {
      views.alert(
        'warning',
        'Task title is already created, please enter other task title'
      );
    }
  };

  const addProject = (e) => {
    e.preventDefault();
    const projectName = domItems.inputProjectName.value;
    if (model.isProjectNameUnique(projectName)) {
      const project = new Project(projectName);
      model.addProject(project);
      views.addProject(project);
      views.alert('success', 'Project is successfully created');
    } else {
      views.alert(
        'warning',
        'Project name is already created, please enter other project name'
      );
    }
  };

  const taskForm = (e) => {
    e.preventDefault();
    const action = domItems.taskForm.dataset.action;
    const selectedProjectName = views.getSelectedProjectName();
    const selectedProject = model.getProject(selectedProjectName);
    action === 'create'
      ? _addTask(selectedProject)
      : _updateTask(selectedTask, selectedProject);
  };

  const selectProject = () => {
    const projectName = views.getSelectedProjectName();
    const project = model.getProject(projectName);
    const tasks = project.tasks;
    domItems.tasks.innerHTML = '';
    views.populateTasks(tasks);
  };

  const addTaskBtn = () => {
    domItems.taskForm.reset();
    domItems.taskForm.setAttribute('data-action', 'create');
    domItems.taskFormModalLabel.textContent = 'Add New Task';
    domItems.taskFormDeleteBtn.classList.add('d-none');
    domItems.taskFormSubmitBtn.textContent = 'Create task';
  };

  const taskClick = (e) => {
    if (e.target && Array.from(e.target.classList).includes('task')) {
      domItems.taskForm.setAttribute('data-action', 'update');
      domItems.taskFormModalLabel.textContent = 'Update Task';
      domItems.taskFormDeleteBtn.classList.remove('d-none');
      domItems.taskFormSubmitBtn.textContent = 'Update task';
      const selectedProjectName = views.getSelectedProjectName();
      const selectedProject = model.getProject(selectedProjectName);
      const taskTitle = e.target.dataset.tasktitle;
      selectedTask = model.getTask(taskTitle, selectedProject);
      views.updateTaskFormInfo(selectedTask);
    }
  };

  const deleteTask = () => {
    const selectedProjectName = views.getSelectedProjectName();
    const selectedProject = model.getProject(selectedProjectName);
    const selectedTaskTitle = selectedTask.title;
    model.deleteTask(selectedTask, selectedProject);
    views.deleteTask(selectedTaskTitle);
    views.alert('success', 'Task is successfully deleted');
  };

  return {
    addProject,
    taskForm,
    selectProject,
    taskClick,
    addTaskBtn,
    taskClick,
    deleteTask,
  };
})();

export default domEvents;
