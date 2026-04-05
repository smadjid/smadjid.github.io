// Toggle visibility function (kept for compatibility)
function toggleVisibility(id) {
  var el = document.getElementById(id);
  if (el) {
    if (el.style.display === 'none') {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  }
}

function toggle_visibility(block_id) {
  toggleVisibility(block_id);
}
