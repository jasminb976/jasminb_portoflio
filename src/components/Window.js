import interact from 'interactjs';
//import { folders } from './desktop.js';

export function createWindow(container, window) {
  const windowElem = document.createElement('div');
  windowElem.className = 'window';
  windowElem.id = `window-${name}`;
  windowElem.className = `window ${window.draggable ? 'draggable' : ''}`;

  if (window.draggable) {
    const header = document.createElement('div');
    header.className = 'window-header';

    const title = document.createElement('div');
    title.className = 'window-title';
    title.innerText = name;

    const closeButton = document.createElement('button');
    closeButton.className = 'close-btn';
    closeButton.innerText = 'x';
    closeButton.addEventListener('click', () => {
      container.removeChild(windowElem);
    });

    header.appendChild(title);
    header.appendChild(closeButton);
    windowElem.appendChild(header);
  }

  const content = document.createElement('div');
  content.className = 'window-content';
  content.innerHTML = window.content;
  windowElem.appendChild(content);

  container.appendChild(windowElem);

  if (window.draggable) {
    interact(windowElem)
      .draggable({
        handle: '.window-header',
        listeners: {
          start(event) {
            console.log('Drag started');
            // Any initialization you want to do when dragging starts
            windowElem.style.opacity = '0.7'; // Example: Change opacity
          },
          move(event) {
            const target = event.target;
            // Keep the dragged position in the data-x/data-y attributes
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            // Translate the element
            target.style.transform = `translate(${x}px, ${y}px)`;
            // Update the position attributes
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
          end(event) {
            console.log('Drag ended');
            // Any cleanup you want to do when dragging ends
            windowElem.style.opacity = '1'; // Reset opacity
          }
        }
      });
  }
}
