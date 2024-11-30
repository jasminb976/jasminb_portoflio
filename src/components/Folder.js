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
    createWindow(container, { content: `Content of ${folder.name}`, draggable: true });
  });

  container.appendChild(folderElem);
}
