import { createLoadingScreen } from './LoadingScreen.js';
import { createFolder } from './Folder.js';
import { createWindow } from './Window.js';

export function createDesktop(container) {
  const desktop = document.createElement('div');
  desktop.className = 'desktop';
  container.appendChild(desktop);

//DRAGGABLE ELEMENTS ON DESKTOP START//
  
//DRAGGABLE ELEMENTS ON DESKTOP END//

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
        <p>It's <b>Jasmin</b>! A CUNY Hunter student majoring in media studies and minoring in Computer Science based 
          in New York City. I love to create beautiful experiences for people and am interested in challenging myself 
          to gain new knowledges plus develop my creativity in fun designs. 
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
              <img src="/webProgramming.png" alt="Project 1"> 
              <div class="project-info"> 
              <h3>web programming class portfolio</h3> 
              <p>a website that holds all my work for my web programming class</p> 
              <div class="buttons"> <a href="https://jasminb976.github.io./index.html" target="_blank" class="btn">Live Site</a> <a href="https://github.com/jasminb976/jasminb976.github.io" target="_blank" class="btn">Repository</a> </div>
            </div> 
          </div> 
          <div class="project-card"> 
            <img src="laufeyFansite.png" alt="Project 2"> 
            <div class="project-info"> 
              <h3>Laufey Fansite</h3> 
              <p>a fansite website that uses an API to randomly call for Laufey song lyrics</p>
              <div class="buttons"> <a href="https://coding-practice3.netlify.app/" target="_blank" class="btn">Live Site</a> </div> 
            </div>
          </div> 
          <div class="project-card"> 
            <img src="gourmetHub.png" alt="Project 3"> 
            <div class="project-info"> 
              <h3>Gourmet Hub</h3> 
              <p>a recipe finder website that uses the mealDB api to call for the recipes</p>
              <div class="buttons"> <a href="https://sumptuous-buttery-orbit.glitch.me" target="_blank" class="btn">Live Site</a> <a href="https://glitch.com/edit/#!/sumptuous-buttery-orbit" target="_blank" class="btn">Glitch Code</a> </div> 
            </div> 
          </div>
        `,
        className: 'window-projects'
      },
      { id: 3, 
        name: 'blog', 
        icon: 'blog-folder-icon.png',
        content:`
        <div class="blog-container" id="blog-container">
          <!-- Blog posts will be rendered here -->
        </div>
        `,
        className: 'window-blog'
       },
      { id: 4, 
        name: 'media', 
        icon: 'media-folder-icon.png',
        content:`
        <!---Credits to HillHouse---!>
      <section class="layout">
        <div class="ipod"> 
          <div class="screen"> 
            <h3>Lonely in Gorgeous</h3> 
            <audio controls> 
              <source src="/lonely.mp3" type="audio/mpeg">
            </audio> 
            <div class="caption"> Artist: Tommy February6</div> 
          </div>
          <div class="button"> 
            <div class="b b-top">▶</div>
            <div class="b b-left">⏮︎</div>
            <div class="b b-right">⏭︎</div>
            <div class="b b-bottom">❚❚</div> 
            <divclass="button"></div> 
          </div> 
        </div>
        <div>
          <h2>my fav music artists: </h2>
          <section class="column">
            <div><a href="https://open.spotify.com/artist/4B9dJjZ4F00cExmGc2OiST?si=etYd4S5lS7ew9dPAW_hj1g"><img src="/tommyFebruary6.jpg" class ="musicArtist"></a></div>
            <div><a href="https://open.spotify.com/artist/5069JTmv5ZDyPeZaCCXiCg?si=bgwNqqv9S7eiVp8i4LncFA"><img src="/w2e.jpg" class ="musicArtist"></a></div>
            <div><a href="https://open.spotify.com/artist/6CwfuxIqcltXDGjfZsMd9A?si=_ndBw4eeSO6rox6sLI484g"><img src="/marinaAndtheDiamonds.jpg" class ="musicArtist"></a></div>
            <div><a href="https://open.spotify.com/artist/7gW0r5CkdEUMm42w9XpyZO?si=N2FYM47MS5e-1yjFkHqhCA"><img src="/laufey.jpg" class ="musicArtist"></a></div>
          </section>
        </div>
      </section>
      <h2>my fav/current reads: </h2>
      <section class="bookGrid">
        <div><img src="/gambler.jpg" class ="book"></div>
        <div><p class="bookDesc">★★★★ <br> This book was the first book i've read after a 3 year break of reading books on my free time. Dostoevsky is infamously known for his classic works, especially "Crime and Punishment" and "The Brothers Karamazov", but I decided to pick up a less known book of his.</p></div>
        <div><img src="/heaven.jpg" class ="book"></div>
        <div><p class="bookDesc">I have yet to read this, but I've heard good things about this book.</p></div>
        <div><img src="/theTrial.jpg" class ="book"></div>
        <div><p class="bookDesc">I also have yet to read this book, but I have read another Kafka book, "Metamorphasis". I have high hopes about this book!</p></div>
        <div><img src="/wonder.jpg" class ="book"></div>
        <div><p class="bookDesc">★★★★★ <br> I remember reading this book when I was in elementary school, specifically in the 4th grade. I love how the book would switch between point of views, but also said POV's would have a different tone based on the character. I haven't watched the movie yet, but I hope to read this book again in the future.</p></div>
      </section>
        `,
        className: 'window-media'
      },
      { id: 5, 
        name: 'contact', 
        icon: 'contact-folder-icon.png',
        content:`
        <h2>Thank you for viewing my website/portfolio!</h2>
        <p>For collaboration inquiries, please contact me by emailing <a href="mailto:jb123@hotmail.com" ><b class="email">jb123@hotmail.com</b></a> </p>
        
        <h2>If you just want to drop a quick message, sign the guestbook down below!</h2>
          <div class="form-wrapper">
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfLuERp6UzgNk3JHBy6N7rOGi6_pZ3cNpEIeCkLY3Dyb6Oovw/viewform?embedded=true" width="640" height="715" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
          <h2>Responses:</h2>
          <div id="responses"></div>
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
        <h1>welcome to my portfolio,
        <br>User!</h1>
        <div class="layout">
          <div><p>Hi there! I hope you enjoy your stay as you see my progress as a designer + developer through my projects and get to know me as a person through this portfolio website.</p></div>
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
        <b>dec 17:</b> <br> fixed DOM loading timing with blog and contact pages, added a web widget + mouse follower, added an ipod widget music player and fully updated media tab <br>
        <b>dec 16:</b> <br> guestbook is finished, but there is a DOM loading issue with the responses container, and still no progress with music player<br>
        <b>dec 15:</b> <br> fixed the loading screen so that it's an animation rather than user-inputted, tried doing a guestbook feature and failed, updated "contact page", unsuccessfully tried doing a music player that plays multiple songs<br>
        <b>dec 13:</b> <br> uploaded complete update log with full history, updated the "about me" tab and "welcoming page", fixed code so that each tab can have its own width + height, uploaded folder placeholder icons, and fully created "projects" tab <br>
        <b>dec 12:</b> <br> aligned the icons to the left and made the icons to the left and made the icons responsive + increased the number of mouse movements it takes to "wake up" the screen after the laptop is shutdown <br>
        <b>dec 10:</b> <br> added the taskbar at the bottom of the site and implemented a new feature (the power button) allowing to open back up the update + welcoming page and allow the user to "shutdown" the site and open back up by shaking their mouse. further optimized the code in order to allow different content in a different window tab as well as allowed each window tab to have a name in accordance to their folder name, and finally deployed this project through Netlify <br>
        <b>nov 30:</b> <br> created the basic structure of this portfolio/personal website, including the creation of the vue.js environment and file structure. trying to make a custom cursor, update the content to each folder, updating the main title for each folder, and working on creating the taskbar for the laptop screen. fully created a github repository for this project <br>
        <b>nov 13 - nov 20:</b> <br> created a design pitch with a mind map (using octopus.do) and a low-fidelity wireframe (using figma) along with color palettes and fonts <br>
        <b>nov 06 - nov 13:</b> <br> started brainstorming, planning, and design the idea of this portfolio
        </div>
        `,
        draggable: true,
        className: 'window-updates'
      },
      {
        id: 3,
        name: 'web-pet',
        content: `
        <iframe scrolling="no" src="https://gifypet.neocities.org/pet/pet.html?name=cookies&dob=1734495825&gender=f&element=Water&pet=cat.gif&map=forest.jpg&background=&tablecolor=%23529d32&textcolor=black" frameborder="1"></iframe>
        `,
        draggable: true,
        className: 'window-pet'

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
        <button id="open-pet">Open pet</button>
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
    
    document.getElementById('open-pet').addEventListener('click', () => { 
      createWindow(mainContent, windows[2]); 
      powerMenu.style.display = 'none';
    });

    document.getElementById('shut-down').addEventListener('click', () => { 
      shutDownDesktop(desktop);
      powerMenu.style.display = 'none'; 
    });

    //BLOG - BLOG - BLOG - BLOG
    const checkInterval = setInterval(function() {   // <---- Waits for the .blog-container to appear when the user clicks the folder
      const blogContainer = document.querySelector('.blog-container');
      if (blogContainer) {
        clearInterval(checkInterval);  // <---- Stops the interval once the container is found
        fetch('/posts.json') // <---- Fetches and renders the blog posts
          .then(response => response.json())
          .then(posts => {
            posts.forEach(post => {
              const postElement = document.createElement('div');
              postElement.classList.add('post');
              let postContent = `
                <div class="blog-post">
                  <h4 class="post-date">${post.date}</h4>
                  <h1 class="post-title">${post.title}</h1>
                  <section class="postImg">
              `;
              if (post.images && Array.isArray(post.images)) {
                post.images.forEach(image => {
                  console.log(`Image path: ${image}`);
                  postContent += `<img src="${image}" class="blogImage">`;
                });
              }
              postContent += `</section>`
              postContent += `<p class="post-text">${post.content}</p>`;
              postContent += `<h2 class="post-border">────── ⋆⋅☆⋅⋆ ──────</h2>`
              postContent += `</div>`;
              postElement.innerHTML = postContent;
              blogContainer.appendChild(postElement);
            });
          })
          .catch(error => console.error('Error fetching blog posts:', error));
      }
    }, 100);  

    //MUSIC PLAYER - MUSIC PLAYER - MUSIC PLAYER - MUSIC PLAYER
    

    //GUESTBOOK - GUESTBOOK - GUESTBOOK - GUESTBOOK
    const script = document.createElement('script');
script.innerHTML = `
  const checkInterval = setInterval(function() {
    // Wait for the container to be available
    const responsesContainer = document.getElementById('responses');
    
    if (!responsesContainer) {
      console.error('Responses container not found!');
      return;
    }

    // Fetch the CSV data if the container exists
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQukf_AzwlX4NyQig6R1xQKuuguR770Wb8usXC5viWmxOARGnA2baKo-fcyzmPiR06rFAoQ3bZ_4Ej_/pub?gid=773105761&single=true&output=csv';
    console.log('CSV URL:', csvUrl);

    fetch(csvUrl)
      .then(response => {
        console.log('Fetch successful, response received:', response);
        return response.text();
      })
      .then(csvData => {
        console.log('CSV Data:', csvData);
        const rows = csvData.split('\\n');
        
        // Process the CSV data row by row
        rows.forEach((row, index) => {
          if (index > 0) { // Skip header row
            const columns = row.split(',');
            const timestamp = columns[0];
            const songRecs = columns[1];
            const name = columns[2];
            const message = columns[3];
            
            console.log({ timestamp, songRecs, name, message });

            // Create a new entry in the DOM
            const entry = document.createElement('div');
            entry.classList.add('entry');
            entry.innerHTML = \`
              <p><em>\${timestamp}</em></p>
              <p><strong>\${name}</strong> says:</p>
              <p>\${message}</p>
              <p><em>Song recs: \${songRecs}</em></p>
            \`;
            responsesContainer.appendChild(entry);
          }
        });

        // Clear the interval after the data has been fetched and processed
        clearInterval(checkInterval);
      })
      .catch(error => {
        console.error('Error fetching CSV data:', error);
      });
  }, 3000);
`;

document.body.appendChild(script);
  }); 
} 

// Shut Down Functionality 
function shutDownDesktop(_desktop) { 
  const shutdownOverlay = document.createElement('div'); 
  shutdownOverlay.className = 'shutdown-overlay'; 
  shutdownOverlay.innerText = '…ᘛ⁐̤ᕐᐷ move your mouse or tap the screen!'; 
  document.body.appendChild(shutdownOverlay); 

  // Darkens the screen 
  shutdownOverlay.style.position = 'fixed'; 
  shutdownOverlay.style.top = 0; 
  shutdownOverlay.style.left = 0; 
  shutdownOverlay.style.width = '100%'; 
  shutdownOverlay.style.height = '100%'; 
  shutdownOverlay.style.backgroundColor = 'rgba(0, 0, 0, 1)'; 
  shutdownOverlay.style.color = 'white';
  shutdownOverlay.style.fontFamily = 'VT323', 'monospace';
  shutdownOverlay.style.fontSize = '40px';
  shutdownOverlay.style.display = 'flex'; 
  shutdownOverlay.style.alignItems = 'center'; 
  shutdownOverlay.style.justifyContent = 'center'; 
  shutdownOverlay.style.zIndex = 1000; 

  // Wake up the desktop by shaking the mouse or tapping the screen
  let shakeCount = 0; 
  const shakeListener = () => { 
    shakeCount += 1; 
    if (shakeCount > 35) { 
      document.body.removeChild(shutdownOverlay); 
      window.removeEventListener('mousemove', shakeListener);
      window.removeEventListener('touchstart', shakeListener); 
      removeOverlay();
    } 
  }; 
  window.addEventListener('mousemove', shakeListener);
  window.addEventListener('touchstart', shakeListener);
}
