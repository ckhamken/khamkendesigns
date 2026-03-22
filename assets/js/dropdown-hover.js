// Enable dropdown menu on hover for desktop and allow link navigation
document.addEventListener('DOMContentLoaded', function() {
  const dropdownToggle = document.getElementById('cncDropdown');
  const dropdownMenu = dropdownToggle?.nextElementSibling;

  if (dropdownToggle && dropdownMenu) {
    const dropdownItem = dropdownToggle.closest('li');

    // Show dropdown on hover
    dropdownItem.addEventListener('mouseenter', function() {
      const bsDropdown = new bootstrap.Dropdown(dropdownToggle);
      bsDropdown.show();
    });

    // Hide dropdown when leaving the dropdown item
    dropdownItem.addEventListener('mouseleave', function() {
      const bsDropdown = new bootstrap.Dropdown(dropdownToggle);
      bsDropdown.hide();
    });

    // Allow normal link navigation on click
    dropdownToggle.addEventListener('click', function(e) {
      // Navigate to the href
      if (this.href && this.href !== '#') {
        window.location.href = this.href;
      }
    });
  }
});