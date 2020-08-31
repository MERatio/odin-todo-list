import domItems from './domItems.js';
import Project from './Project.js';
import Task from './Task.js';
import model from './model.js';
import views from './views';

const domEvents = (() => {
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

  const addTask = (e) => {
    e.preventDefault();
    const taskTitle = domItems.inputTaskTitle.value;
    const taskDesc = domItems.inputTaskDesc.value;
    const taskDueDate = domItems.inputTaskDueDate.value;
    const taskPriority = domItems.selectTaskPriority.value;
    const selectedProjectName = views.getSelectedProjectName();
    const selectedProject = model.getProject(selectedProjectName);
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

  const selectProject = () => {
    const projectName = views.getSelectedProjectName();
    const project = model.getProject(projectName);
    const tasks = project.tasks;
    domItems.tasks.innerHTML = '';
    views.populateTasks(tasks);
  };

  return {
    addProject,
    addTask,
    selectProject,
  };
})();

export default domEvents;
