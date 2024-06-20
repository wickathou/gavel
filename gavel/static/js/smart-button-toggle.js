function buttonSelected(event) {
  const radioButton = event.target;

  // Find the associated label using the 'for' attribute
  const label = document.querySelector(`label[for="${radioButton.id}"]`);
  const voteSubmit = document.getElementById('vote-submit');

  if (radioButton.value === 'Skip') {
    voteSubmit.value = 'Confirm Skip';
  } else if (label) {
    // Retrieve the text content of the label
    const labelText = label.textContent.trim();
    voteSubmit.value = `Vote for ${labelText}`
  }
  voteSubmit.disabled = false;
}

(function() {
  document.getElementsByName('action').forEach(elem => {
    if (elem.type === 'radio') {
      elem.checked = false;
      elem.onchange = buttonSelected;
    }
  });

  document.getElementById('vote-submit').disabled = true;
})();
