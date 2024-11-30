import { createLoadingScreen } from './LoadingScreen.js';
import { createFolder } from './Folder.js';
import { createWindow } from './Window.js';

export function createDesktop(container) {
  const desktop = document.createElement('div');
  desktop.className = 'desktop';
  container.appendChild(desktop);

  createLoadingScreen(desktop, () => {
    const folders = [
      { id: 1, 
        name: 'About Me', 
        content:`<p>hello</p>` },
      { id: 2, 
        name: 'Projects', 
        content:`hello` },
      { id: 3, 
        name: 'Blog', 
        content:`hello` },
      { id: 4, 
        name: 'Media', 
        content:`hello` },
      { id: 5, 
        name: 'Contact Me', 
        content:`hello` },
    ];

    folders.forEach(folder => createFolder(desktop, folder));

    const windows = [
      { id: 1, 
        content: `
        <h1>welcome to my portfolio, <b>User</b>!</h1>
        <section class="layout">
          <div><p>It's <b>Jasmin</b>! A Hunter student majoring in media studies and minoring in Computer Science based in New York City. I am interested in challenging myself
        to gain new knowledges and developing my creativity in fun designs. </p></div>
          <div><img src="toroCat.jpg" width="100px" class="mainImg"> </div>
        </section> 
        `, 
        draggable: true },
      {
        id: 2, 
        content: `
        <h1>Updates:</h1>
        <h4>This will contain any updates to this specific program.</h4>
        `,
        draggable: true
      }
    ];

    windows.forEach(window => createWindow(desktop, window));
  });
}
