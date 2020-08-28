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

  const getProjects = () => _projects;

  const addProject = (project) => {
    _projects.push(project);
    localStorage.setItem('projects', JSON.stringify(_projects));
  };

  return {
    isProjectNameUnique,
    getProjects,
    addProject,
  };
})();

export default model;
