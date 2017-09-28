// import img file path
import codeURL from './code.png'


import {groupBy} from 'lodash/collection';
import people from './people';
import './style.scss';


// Action group by manager
const managerGroups = groupBy(people, 'manager');

// get root, like jquery
const root = document.querySelector('#root');
// insert data with json stringify
// print var
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

// Create img element
const img = document.createElement('img');
// img url
img.src = codeURL;
// color
img.style.backgroundColor = "#2B3A42";
// padding
img.style.padding = "20px";
// width 
img.width = 32;
// put the image into body
document.body.appendChild(img);
