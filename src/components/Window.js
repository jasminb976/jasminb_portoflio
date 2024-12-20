import interact from 'interactjs';

export function createWindow(container, windowData) {
  const windowElem = document.createElement('div');
  windowElem.className = `window ${windowData.className || ''} ${windowData.draggable ? 'draggable' : ''}`
  windowElem.id = `window-${windowData.name}`

  if (windowData.draggable) {
    const header = document.createElement('div');
    header.className = 'window-header';

    const title = document.createElement('div');
    title.className = 'window-title';
    title.innerText = windowData.name;

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
  content.innerHTML = windowData.content;
  windowElem.appendChild(content);

  container.appendChild(windowElem);

  if (windowData.draggable) {
    interact(windowElem)
      .draggable({
        handle: '.window-header',
        listeners: {
          start(event) {
            console.log('Drag started');
            windowElem.style.opacity = '0.90'; 
          },
          move(event) {
            const target = event.target;
            const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
            const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
            target.style.transform = `translate(${x}px, ${y}px)`;

            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
          },
          end(event) {
            console.log('Drag ended');
            windowElem.style.opacity = '1'; // Reset opacity
          }
        }
      });
  }
}
