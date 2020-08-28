import domItems from './domItems.js';
import Project from './Project.js';
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

  return {
    addProject,
  };
})();

export default domEvents;
