import domItems from './domItems.js';
import domEvents from './domEvents.js';
import Project from './Project.js';
import model from './model.js';
import views from './views.js';

const controller = (() => {
  const attachEvents = () => {
    domItems.projectForm.addEventListener('submit', domEvents.addProject);
  };

  const addDefaultProject = () => {
    if (model.isProjectNameUnique('Default')) {
      const project = new Project('Default');
      model.addProject(project);
    }
  };

  const populateDom = () => {
    views.populateDom(model.getProjects());
  };

  return {
    attachEvents,
    addDefaultProject,
    populateDom,
  };
})();

export default controller;
