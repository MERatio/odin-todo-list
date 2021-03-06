import domItems from './domItems.js';
import domEvents from './domEvents.js';
import Project from './Project.js';
import model from './model.js';
import views from './views.js';

const controller = (() => {
  const attachEvents = () => {
    domItems.projectForm.addEventListener('submit', domEvents.addProject);
    domItems.addTaskBtn.addEventListener('click', domEvents.addTaskBtn);
    domItems.taskForm.addEventListener('submit', domEvents.taskForm);
    domItems.projects.addEventListener('change', domEvents.selectProject);
    domItems.taskFormDeleteBtn.addEventListener('click', domEvents.deleteTask);
    domItems.tasks.addEventListener('click', domEvents.taskClick);
  };

  const addDefaultProject = () => {
    if (model.isProjectNameUnique('Default')) {
      const project = new Project('Default');
      model.addProject(project);
    }
  };

  const populateDom = () => {
    const projects = model.getProjects();
    views.populateProjects(projects);
    const selectedProjectName = views.getSelectedProjectName();
    const selectedProject = model.getProject(selectedProjectName);
    const tasks = selectedProject.tasks;
    views.populateTasks(tasks);
  };

  return {
    attachEvents,
    addDefaultProject,
    populateDom,
  };
})();

export default controller;
