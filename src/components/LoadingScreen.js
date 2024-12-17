export function createLoadingScreen(container, onLoadComplete) {
  // Body of Loading Screen
  const loadingScreen = document.createElement('div');
  loadingScreen.className = 'loading-screen';

  // Profile Picture
  const profilePic = document.createElement('img');
  profilePic.className = 'profile-pic';
  profilePic.src = 'toroCat.jpg';

  // Text - Name
  const textElement = document.createElement('div');
  textElement.className = 'text-element';
  textElement.innerText = '❀ Jasmin Bonilla ❀';

  // Input Form with Typing Animation
  const form = document.createElement('form');
  form.className = 'typing-form';
  
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Type Password...';
  input.className = 'typing-input';
  form.appendChild(input);

  loadingScreen.appendChild(profilePic);
  loadingScreen.appendChild(textElement);
  loadingScreen.appendChild(form);
  container.appendChild(loadingScreen);

  // Typing Animation
  let typingText = "*************";
  let typingIndex = 0;
  const typingSpeed = 100; // Adjust the speed as needed

  function type() {
    if (typingIndex < typingText.length) {
      input.value += typingText.charAt(typingIndex);
      typingIndex++;
      setTimeout(type, typingSpeed);
    } else {
      // Transition to desktop
      setTimeout(() => {
        container.removeChild(loadingScreen);
        onLoadComplete();
      }, 1000);
    }
  }

  type();
}
