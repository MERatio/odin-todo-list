import $ from 'jquery';
import domItems from './domItems';

const views = (() => {
  const _createDomProject = (projectName) => {
    const domProject = document.createElement('option');
    domProject.setAttribute('value', projectName);
    domProject.textContent = projectName;
    return domProject;
  };

  const _alertAutoclose = () => {
    setTimeout(() => {
      $('.alert')
        .fadeTo(500, 0)
        .slideUp(500, () => {
          $(this).remove();
        });
    }, 3000);
  };

  const populateDom = (projects) => {
    for (let project of projects) {
      addProject(project);
    }
  };

  const alert = (type, text) => {
    let alertDiv = `<div class="alert alert-${type} alert-dismissible fade show fixed-top" role="alert">
                      ${text}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="alert"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>`;
    document.querySelectorAll('.alert').forEach((e) => e.remove());
    domItems.body.insertAdjacentHTML('afterbegin', alertDiv);
    _alertAutoclose();
  };

  const addProject = (project) => {
    const domProject = _createDomProject(project.name);
    domItems.projects.appendChild(domProject);
  };

  return {
    populateDom,
    alert,
    addProject,
  };
})();

export default views;
