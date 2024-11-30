import { createLoadingScreen } from './LoadingScreen.js';
import { createFolder } from './Folder.js';
import { createWindow } from './Window.js';

export function createDesktop(container) {
  const desktop = document.createElement('div');
  desktop.className = 'desktop';
  container.appendChild(desktop);

  createLoadingScreen(desktop, () => {
    const folders = [
      { id: 1, name: 'About Me' },
      { id: 2, name: 'Projects' },
      { id: 3, name: 'Blog'},
      { id: 4, name: 'Media'},
      { id: 5, name: 'Contact Me'},
      { id: 6, name: 'Updates'}
    ];

    folders.forEach(folder => createFolder(desktop, folder));

    const windows = [
      { id: 1, content: 'This is a draggable window.', draggable: true },
    ];

    windows.forEach(window => createWindow(desktop, window));
  });
}
