// import array of obj
import people from './people';

// get the root 
const root = document.querySelector('#root');
// inject into root html
root.innerHTML = `<p>There are ${people.length} people.</p>`
