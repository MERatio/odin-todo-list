const model = (() => {
  const _projects = JSON.parse(localStorage.getItem('projects')) || [];

  const isProjectNameUnique = (projectName) => {
    for (let project of _projects) {
      if (project.name === projectName) {
        return false;
      }
    }
    return true;
  };

  const isTaskTitleUnique = (taskTitle, project) => {
    const tasks = project.tasks;
    for (let task of tasks) {
      if (task.title === taskTitle) {
        return false;
      }
    }
    return true;
  };

  const getProjects = () => _projects;

  const getProject = (projectName) => {
    return getProjects().filter((project) => project.name === projectName)[0];
  };

  const addProject = (project) => {
    _projects.push(project);
    localStorage.setItem('projects', JSON.stringify(_projects));
  };

  const addTask = (task, project) => {
    project.tasks.push(task);
    localStorage.setItem('projects', JSON.stringify(_projects));
  };

  return {
    isProjectNameUnique,
    isTaskTitleUnique,
    getProjects,
    getProject,
    addProject,
    addTask,
  };
})();

export default model;
