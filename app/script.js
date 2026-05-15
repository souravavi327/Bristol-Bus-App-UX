function show(button, tabClass, tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll(`.${tabClass}`);
  tabs.forEach(tab => tab.style.display = 'none');

  // Remove active class from all buttons
  const buttons = document.querySelectorAll(`.${tabClass}-button`);
  buttons.forEach(button => button.classList.remove('w3-grey', 'w3-black'));

  // Show the clicked tab and add active class to button
  document.getElementById(tabName).style.display = 'block';
  button.classList.add('w3-grey'); // Highlight active button
}
