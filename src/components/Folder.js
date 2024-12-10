import { createWindow } from './Window.js';

export function createFolder(container, folder) {
  const folderElem = document.createElement('div');
  folderElem.className = 'folder';
  folderElem.innerText = name;

  const img = document.createElement('img');
  img.src = 'folder-icon.png';
  folderElem.appendChild(img);

  const span = document.createElement('span');
  span.innerText = folder.name;
  folderElem.appendChild(span);

  folderElem.addEventListener('click', () => {
    createWindow(container, { content: `Content of ${folder.name}`, draggable: true });
  });

  //container.appendChild(folder);
  container.appendChild(folderElem);
}
 
/*
export function createFolder(container, {id, name}){
  const folder = document.createElement('div');
  folder.className = 'folder';
  folder.innerText = name;

  folder.addEventListener('click', () => {
    createWindow(container, { id, name, content: `<p>${name}</p>`, draggable: true});
  });
  container.appendChild(folder);
} */