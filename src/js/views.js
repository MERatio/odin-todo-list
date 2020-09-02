import $ from 'jquery';
import domItems from './domItems';

const views = (() => {
  const _createDomProject = (projectName) => {
    const domProject = document.createElement('option');
    domProject.setAttribute('value', projectName);
    domProject.textContent = projectName;
    return domProject;
  };

  const _createDomTask = (task) => {
    const domTask = document.createElement('li');
    domTask.classList.add('list-group-item', 'task');
    _setAttributes(domTask, {
      'data-toggle': 'modal',
      'data-target': '#taskFormModal',
      'data-tasktitle': task.title,
    });
    domTask.textContent = task.title;
    return domTask;
  };

  const _setAttributes = (el, attrs) => {
    for (let attrName in attrs) {
      el.setAttribute(attrName, attrs[attrName]);
    }
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

  const populateProjects = (projects) => {
    for (let project of projects) {
      addProject(project);
    }
  };

  const populateTasks = (tasks) => {
    for (let task of tasks) {
      addTask(task);
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

  const getSelectedProjectName = () => {
    return domItems.projects.options[projects.selectedIndex].value;
  };

  const addTask = (task) => {
    const domTask = _createDomTask(task);
    domItems.tasks.appendChild(domTask);
  };

  const updateTaskFormInfo = (task) => {
    domItems.inputTaskTitle.value = task.title;
    domItems.inputTaskDesc.value = task.description;
    domItems.inputTaskDueDate.value = task.dueDate;
    domItems.selectTaskPriority.value = task.priority;
  };

  const updateTask = (oldTaskTitle, newTaskTitle) => {
    const domOldTask = document.querySelector(
      `li[data-tasktitle="${oldTaskTitle}"]`
    );
    domOldTask.setAttribute('data-tasktitle', newTaskTitle);
    domOldTask.textContent = newTaskTitle;
  };

  return {
    populateProjects,
    populateTasks,
    alert,
    addProject,
    getSelectedProjectName,
    addTask,
    updateTaskFormInfo,
    updateTask,
  };
})();

export default views;
