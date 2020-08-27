'use strict';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import controller from './js/controller.js';

const init = () => {
  controller.attachEvents();
};

init();
