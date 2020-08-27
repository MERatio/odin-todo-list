const domEvents = (() => {
  const addProject = (e) => {
    console.log(e.target);
    e.preventDefault();
  };

  return {
    addProject,
  };
})();

export default domEvents;
