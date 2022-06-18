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
      case 'clr':
        displayScreen.innerText = '0';
        break;
      case '.':
        if (!displayScreen.innerText.includes('.')) {
          displayScreen.innerText = `${displayScreen.innerText}.` + e.target.innerText;
        }
      case '=':
        try {
          displayScreen.innerText = eval(displayScreen.innerText);
        } catch (err) {
          displayScreen.innerText = 'Error!';
        }
        break;
      default:
        const displayValue = displayScreen.innerText;
        displayScreen.innerText =
          displayValue === '0' ? e.target.innerText : displayScreen.innerText + e.target.innerText;
    }
  });
}
