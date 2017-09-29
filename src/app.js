if (module.hot) {
  module.hot.accept();
}

import './style.scss';
import {groupBy} from 'lodash/collection';
// array of obj
import people from './people';

// obj
const managerGroups = groupBy(people, 'manager');

// get root
const root = document.querySelector('#root');

// inject the obj into root html
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;

// routes.dashboard
const routes = {
	// key, value (func)
  dashboard: () => {
		// dynamically load
		// .then promise
    System.import('./dashboard').then((dashboard) => {
      dashboard.draw()
    }).catch((err) => {
      console.log("Chunk loading failed")
    })
  }
};

// demo async loading with a timeout
setTimeout(routes.dashboard, 1000);
