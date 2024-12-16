import { createLoadingScreen } from './LoadingScreen.js';
import { createFolder } from './Folder.js';
import { createWindow } from './Window.js';

export function createDesktop(container) {
  const desktop = document.createElement('div');
  desktop.className = 'desktop';
  container.appendChild(desktop);

  const mainContent = document.createElement('div');
  mainContent.className = 'main-content';
  desktop.appendChild(mainContent);

  createLoadingScreen(mainContent, () => {
    const folders = [
      { id: 1, 
        name: 'about Me', 
        icon: 'about-folder-icon.png',
        content:`
        <h1>hello there!</h1>
        <img src="ac-avatar.png" class="avatarImg">
        <p>It's <b>Jasmin</b>! A CUNY Hunter student majoring in media studies and minoring in Computer Science based in New York City. I am 
          interested in challenging myself to gain new knowledges and developing my creativity in fun designs.
        </p> 
        `, 
        className: 'window-me'},
      { id: 2, 
        name: 'projects', 
        icon: 'project-folder-icon.png',
        content:`
        <section class="projects-section"> 
          <div class="projects-container"> 
            <div class="project-card"> 
              <img src="project1.jpg" alt="Project 1"> 
              <div class="project-info"> 
              <h3>Project Title 1</h3> 
              <p>Short description of the project and what it entails.</p> 
              <div class="buttons"> <a href="https://live-site-link.com" target="_blank" class="btn">Live Site</a> <a href="https://github.com/repo-link" target="_blank" class="btn">Repository</a> </div>
            </div> 
          </div> 
          <div class="project-card"> 
            <img src="project2.jpg" alt="Project 2"> 
            <div class="project-info"> 
              <h3>Project Title 2</h3> 
              <p>Short description of the project and what it entails.</p>
              <div class="buttons"> <a href="https://live-site-link.com" target="_blank" class="btn">Live Site</a> <a href="https://github.com/repo-link" target="_blank" class="btn">Repository</a> </div> 
            </div>
          </div> 
          <div class="project-card"> 
            <img src="project3.jpg" alt="Project 3"> 
            <div class="project-info"> 
              <h3>Project Title 3</h3> 
              <p>Short description of the project and what it entails.</p>
              <div class="buttons"> <a href="https://live-site-link.com" target="_blank" class="btn">Live Site</a> <a href="https://github.com/repo-link" target="_blank" class="btn">Repository</a> </div> 
            </div> 
          </div>
        `,
        className: 'window-projects'
      },
      { id: 3, 
        name: 'blog', 
        icon: 'blog-folder-icon.png',
        content:`today i ate a chezburger`,
        className: 'window-blog'
       },
      { id: 4, 
        name: 'media', 
        icon: 'media-folder-icon.png',
        content:`
         MUSIC PLAYER
        `,
        className: 'window-media'
      },
      { id: 5, 
        name: 'contact', 
        icon: 'contact-folder-icon.png',
        content:`
        <h2>Thank you for viewing my website/portfolio!</h2>
        <p class="lol">For collaboration inquiries, please contact me by emailing <b>jb123@hotmail.com</b></p>
        
        <h2>If you just want to drop a quick message, sign the guestbook down below!</h2>
        <div class="guestbook-section">
        <form id="guestbookForm"> 
          <div class="form-group"> 
            <label for="name">Name:</label> 
              <input type="text" id="guestName" name="name" required> 
          </div> 
          <div class="form-group"> 
            <label for="message">Message:</label> 
            <textarea id="guestMessage" name="message" rows="3" required></textarea> 
          </div> 
          <div class="form-group"> 
            <label for="message">Song Recs?:</label> 
            <textarea id="guestMessage" name="message" rows="1" optional></textarea> 
          </div>
          <button class="submit" type="submit">Sign</button> 
        </form> 
        <div id="guestbookEntries" class="guestbook-entries"></div>
        </div>
        `, 
        className: 'window-contact'
      },
    ];

    const folderContainer = document.createElement('div');
    folderContainer.className = 'container';
    desktop.appendChild(folderContainer);
    folders.forEach(folder => createFolder(folderContainer, folder));

    const windows = [
      { id: 1, 
        name: 'welcome!',
        icon: 'welcome-icon.png',
        content: `
        <h1>welcome to my portfolio
        <br><b>User</b>!</h1>
        <div class="layout">
          <div><p>hello there! welcome to my site! i hope you enjoy your stay as you see my progress as a designer and developer through my projects and this website</p></div>
          <div><img src="rollingCat.gif" width="80px" class="mainImg"> </div>
        </div> 
        `, 
        draggable: true,
        className: 'window-welcome'
      },
      {
        id: 2, 
        name: 'updates',
        icon: 'update-icon.png',
        content: `
        <div class="updt">
        <b>dec 12:</b> aligned the icons to the left and made the icons to the left and made the icons responsive + increased the number of mouse movements it takes to "wake up" the screen after the laptop is shutdown <br>
        <b>dec 10:</b> added the taskbar at the bottom of the site and implemented a new feature (the power button) allowing to open back up the update + welcoming page and allow the user to "shutdown" the site and open back up by shaking their mouse. further optimized the code in order to allow different content in a different window tab as well as allowed each window tab to have a name in accordance to their folder name, and finally deployed this project through Netlify <br>
        <b>nov 30:</b> created the basic structure of this portfolio/personal website, including the creation of the vue.js environment and file structure. trying to make a custom cursor, update the content to each folder, updating the main title for each folder, and working on creating the taskbar for the laptop screen. fully created a github repository for this project <br>
        <b>nov 13 - nov 20:</b> created a design pitch with a mind map (using octopus.do) and a low-fidelity wireframe (using figma) along with color palettes and fonts <br>
        <b>nov 06 - nov 13:</b> started brainstorming, planning, and design the idea of this portfolio
        </div>
        `,
        draggable: true,
        className: 'window-updates'
      }
    ];

    windows.forEach(window => createWindow(mainContent, window));

    //Taskbar
    const taskbar = document.createElement('div');
    taskbar.className = 'taskbar';
    desktop.appendChild(taskbar);

    //Power Button
    const powerButton = document.createElement('button');
    powerButton.className = 'power-button';
    powerButton.innerText = '◉';
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
      createWindow(mainContent, windows[0]); 
      powerMenu.style.display = 'none';
    }); 

    document.getElementById('open-updates').addEventListener('click', () => { 
      createWindow(mainContent, windows[1]); 
      powerMenu.style.display = 'none';
    }); 
    
    document.getElementById('shut-down').addEventListener('click', () => { 
      shutDownDesktop(desktop);
      powerMenu.style.display = 'none'; 
    });

    //Music Player
    
    //GuestBook
    document.addEventListener('DOMContentLoaded', () => {
      console.log('JavaScript file loaded');
    
      const form = document.getElementById('guestbookForm');
      const guestbookEntries = document.getElementById('guestbookEntries');
    
      form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        // Retrieve form data
        const guestName = document.getElementById('guestName').value;
        const guestMessage = document.getElementById('guestMessage').value;
    
        console.log('Form submitted:', { guestName, guestMessage });
    
        // Create new entry element
        const entry = document.createElement('div');
        entry.className = 'guestbook-entry';
        entry.innerHTML = `<strong>${guestName}:</strong><p>${guestMessage}</p>`;
    
        // Add new entry to the guestbook
        guestbookEntries.appendChild(entry);
    
        // Clear form fields
        form.reset();
    
        console.log('New entry added:', entry);
      });
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
    if (shakeCount > 40) { 
      document.body.removeChild(shutdownOverlay); 
      window.removeEventListener('mousemove', shakeListener); 
    } 
  }; 
  window.addEventListener('mousemove', shakeListener);
}
