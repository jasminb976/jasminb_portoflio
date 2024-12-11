import { createWindow } from './Window.js';

export function createFolder(container, folder) {
  const folderElem = document.createElement('div');
  folderElem.className = 'folder';

  const img = document.createElement('img');
  img.src = 'folder-icon.png';
  folderElem.appendChild(img);

  const span = document.createElement('span');
  span.innerText = folder.name;
  folderElem.appendChild(span);

  folderElem.addEventListener('click', () => {
    createWindow(container, { name: folder.name, content: folder.content, draggable: true });
  });

  container.appendChild(folderElem);
}
 
