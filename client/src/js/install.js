const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (window.deferredPrompt) {
      window.deferredPrompt.prompt();
      window.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('A2HS Prompt accepted!');
        } else {
          console.log('A2HS Prompt declined.');
        }
        window.deferredPrompt = null;
        butInstall.style.display = 'none';
      });
    } else {
      alert('This app has already been installed, or is unavailable. Sorry!');
    }});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was successfully installed', event);
    butInstall.style.display = 'none';
    window.deferredPrompt = null;
  });
  window.addEventListener('load', () => {
    butInstall.style.display = 'block'; // Always show the install button until app is installed
  });