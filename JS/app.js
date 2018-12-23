
const textBox = document.getElementById('textBox');
const saveButton = document.getElementById('saveButton');
const removeButton = document.getElementById('removeButton');
const remove = document.getElementsByClassName('remove');
let items = document.querySelectorAll('li');
let tab = [];
let index;

for (let i = 0; i < items.length; i++) {
  tab.push(items[i].innerHTML);
}

for(let i = 0; i < items.length; i++) {
  items[i].onclick = function() {
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + ' INDEX = ' + index);
  }
}

function refreshArray() {
  tab.length = 0;
  items = document.querySelectorAll('li');
  for (let i = 0; i < items.length; i++) {
    tab.push(items[i].innerHTML);
  }
}
function editLI() {
  items[index].innerHTML = textBox.value;
  textBox.value = '';
  refreshArray();
} //no self serve no reverse

function deleteLI() {
  refreshArray();
  if(items.length > 0) {
    items[index].parentNode.removeChild(items[index]);
    textBox.value = '';
  }
}

saveButton.addEventListener('click', () => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const removeX = document.createElement('button');

  ul.appendChild(li);
  li.innerHTML = textBox.value
  li.className = 'item';

  refreshArray();

  li.onclick = function() {
    index = tab.indexOf(li.innerHTML);
    console.log(li.innerHTML + ' INDEX = ' + index);
    textBox.value = li.innerHTML;
  }

  // ul.appendChild(removeX);
  // removeX.className = 'remove'
  // removeX.innerHTML = 'x';

  textBox.value = '';
});

removeButton.addEventListener('click', () => {
  const ul = document.querySelector('ul');
  const li = document.querySelector('li:last-child');
  ul.removeChild(li);
});


// remove[0].addEventListener('click', () => {
//   const ul = document.querySelector('ul');
//   const li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });
