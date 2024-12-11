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
        name: 'welcoming page',
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
        name: 'updates',
        content: `
        <h1>Updates:</h1>
        <h4>This will contain any updates to this specific program.</h4>
        `,
        draggable: true
      }
    ];

    windows.forEach(window => createWindow(desktop, window));

    //Taskbar
    const taskbar = document.createElement('div');
    taskbar.className = 'taskbar';
    desktop.appendChild(taskbar);

    //Power Button
    const powerButton = document.createElement('button');
    powerButton.className = 'power-button';
    powerButton.innerText = '⃝';
    taskbar.appendChild(powerButton);

    //Power Button Options
    const powerMenu = document.createElement('div');
    powerMenu.className = 'power-menu';
    powerMenu.innerHTML = `
        <button id="open-welcome">Open Welcome</button>
        <button id="open-updates">Open Updates</button>
        <button id="shut-down">Shut Down</button>
    `;
    taskbar.appendChild(powerMenu);

    powerButton.addEventListener('click', () => { 
        powerMenu.style.display = powerMenu.style.display === 'none' ? 'block' : 'none';
    });

    // Event Listeners for Power Menu Options 
    document.getElementById('open-welcome').addEventListener('click', () => { 
      createWindow(desktop, windows[0]); 
      powerMenu.style.display = 'none';
    }); 

    document.getElementById('open-updates').addEventListener('click', () => { 
      createWindow(desktop, windows[1]); 
      powerMenu.style.display = 'none';
    }); 
    
    document.getElementById('shut-down').addEventListener('click', () => { 
      shutDownDesktop(desktop);
      powerMenu.style.display = 'none'; 
    }); 
  }); 
} 

// Shut Down Functionality 
function shutDownDesktop(_desktop) { 
  const shutdownOverlay = document.createElement('div'); 
  shutdownOverlay.className = 'shutdown-overlay'; 
  shutdownOverlay.innerText = 'Shake your mouse to wake up the desktop'; 
  document.body.appendChild(shutdownOverlay); 

  // Darkens the screen 
  shutdownOverlay.style.position = 'fixed'; 
  shutdownOverlay.style.top = 0; 
  shutdownOverlay.style.left = 0; 
  shutdownOverlay.style.width = '100%'; 
  shutdownOverlay.style.height = '100%'; 
  shutdownOverlay.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
  shutdownOverlay.style.color = 'white';
  shutdownOverlay.style.display = 'flex'; 
  shutdownOverlay.style.alignItems = 'center'; 
  shutdownOverlay.style.justifyContent = 'center'; 
  shutdownOverlay.style.zIndex = 1000; 

  // Wake up the desktop by shaking the mouse 
  let shakeCount = 0; 
  const shakeListener = () => { 
    shakeCount += 1; 
    if (shakeCount > 20) { 
      document.body.removeChild(shutdownOverlay); 
      window.removeEventListener('mousemove', shakeListener); 
    } 
  }; 
  window.addEventListener('mousemove', shakeListener);
}



