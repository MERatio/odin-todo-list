const domItems = (() => {
  const body = document.body
  const projects = document.getElementById('projects');
  const projectForm = document.getElementById('projectForm');
  const inputProjectName = document.getElementById('inputProjectName');

  return {
    body,
    projects,
    projectForm,
    inputProjectName,
  };
})();

export default domItems;
