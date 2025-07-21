// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  const messageBox = document.createElement('div');
  messageBox.innerText = 'JavaScript is working!';
  messageBox.style.color = 'green';
  messageBox.style.fontWeight = 'bold';

  document.body.appendChild(messageBox);
});