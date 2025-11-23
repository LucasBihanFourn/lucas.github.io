const dropdowns = document.querySelectorAll('.drop');

dropdowns.forEach(dropdown => {
  const btn = dropdown.querySelector('.btn-top');
  const content = dropdown.querySelector('.bloc-links');

  btn.addEventListener('click', () => {

    dropdowns.forEach(otherDropdown => {
      const otherContent = otherDropdown.querySelector('.bloc-links');
      if (otherContent !== content) {
        otherContent.style.height = '0';
      }
    });

    if (content.style.height === '' || content.style.height === '0px') {
      content.style.height = content.scrollHeight + 'px';
    } else {
      content.style.height = '0';
    }
  });
});
