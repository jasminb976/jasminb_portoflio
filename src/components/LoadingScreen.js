export function createLoadingScreen(container, onLoadComplete) {
  //Body of Loading Screen
    const loadingScreen = document.createElement('div');
    loadingScreen.className = 'loading-screen';
  
  //Profile Picture
    const profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = 'toroCat.jpg'

  //Text - Name 
    const textElement = document.createElement('div');
    textElement.className = 'text-element';
    textElement.innerText = '❀Jasmin Bonilla❀'
  
  //Password Input
    const input = document.createElement('input');
    input.type = 'password';
    input.placeholder = 'Enter Password...';
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        container.removeChild(loadingScreen);
        onLoadComplete();
      }
    });
  
    loadingScreen.appendChild(profilePic);
    loadingScreen.appendChild(textElement);
    loadingScreen.appendChild(input);
    container.appendChild(loadingScreen);
  }
  