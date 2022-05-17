const displayScreen = document.querySelector('.display-screen');
const buttons = Array.from(document.getElementsByClassName('button'));
for (let button of buttons) {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case 'del':
        if (displayScreen) {
          displayScreen.innerText = displayScreen.innerText.slice(0, -1);
        }
        break;
      case 'c':
        displayScreen.innerText = '';
        break;
      case '=':
        try {
          displayScreen.innerText = eval(displayScreen.innerText);
        } catch (err) {
          displayScreen.innerText = 'Error!';
        }
        break;
      default:
        displayScreen.innerText += e.target.innerText;
    }
  });
}
