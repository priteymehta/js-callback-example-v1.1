// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

async function getValue() {
  console.log('inside function');
  return 5;
}

console.log('before calling function');
var a = getValue().then((data) => {
  console.log(data);
});
console.log('after calling function');
console.log(a);
