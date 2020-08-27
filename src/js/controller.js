import domItems from './domItems.js';
import domEvents from './domEvents.js';

const controller = (() => {
  const attachEvents = () => {
    console.log(domEvents);
    domItems.projectForm.addEventListener('submit', domEvents.addProject);
  };

  return {
    attachEvents,
  };
})();

export default controller;
