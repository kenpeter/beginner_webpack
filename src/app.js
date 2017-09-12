// group by is like the sql group by
// it group the same key
// in collection
import {groupBy} from 'lodash/collection';

import people from './people';

// action group by
const managerGroups = groupBy(people, 'manager');

// get root, like jquery
const root = document.querySelector('#root');
// insert data with json stringify
// print var 
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`
